# Fonix — AI Security Rules (Frontend · React / Next.js)

**Paste the Shared file FIRST, then this file. This covers React and Next.js specific security rules.**

---

## FE1. XSS Prevention

- **NEVER** use `dangerouslySetInnerHTML` unless the content is sanitised with `DOMPurify`.
- **NEVER** use `eval()`, `new Function()`, or `document.innerHTML` with user-supplied data.
- React auto-escapes JSX by default — use that. Only break out of it with DOMPurify when absolutely necessary.

```tsx
// ❌ NEVER — XSS vulnerability
<div dangerouslySetInnerHTML={{ __html: userComment }} />

// ✅ Correct — sanitise first
import DOMPurify from "dompurify";
<div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(userComment) }} />

// ✅ Best — use React's default escaping
<p>{userComment}</p>
```

---

## FE2. Token & State Security

- Access tokens stored in **Zustand store or React state only**. Never `localStorage`, never `sessionStorage`.
- Refresh tokens handled via **HttpOnly cookies** set by the backend — frontend never reads them directly.
- Clear all auth state on logout. Use `zustand` persist only for non-sensitive UI preferences.

```tsx
// ❌ NEVER
localStorage.setItem("accessToken", token);
sessionStorage.setItem("refreshToken", refreshToken);

// ✅ Correct — in-memory via Zustand
const useAuthStore = create<AuthState>((set) => ({
  accessToken: null,
  setAccessToken: (token: string | null) => set({ accessToken: token }),
  logout: () => set({ accessToken: null }),
}));
```

---

## FE3. Environment Variables in Next.js

- Only use `NEXT_PUBLIC_` prefix for keys that are **intentionally public**: Sentry DSN, Stripe publishable key, app URL.
- **NEVER** prefix secret keys with `NEXT_PUBLIC_` — they get bundled into client-side JavaScript.

```bash
# ✅ Safe to expose (publishable/public)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxx
NEXT_PUBLIC_SENTRY_DSN=https://xxx@sentry.io/xxx
NEXT_PUBLIC_APP_URL=https://app.fonix.in

# ❌ NEVER expose these with NEXT_PUBLIC_
# NEXT_PUBLIC_STRIPE_SECRET_KEY — WRONG
# NEXT_PUBLIC_DATABASE_URL — WRONG
# NEXT_PUBLIC_JWT_SECRET — WRONG
```

---

## FE4. External Resources — No CDN

- **NEVER** use `@import url("https://fonts.googleapis.com/...")` in CSS.
- **NEVER** use `<link href="https://cdn.jsdelivr.net/...">` for stylesheets or scripts.
- Load fonts via `next/font/google` (build-time, zero runtime CSS):

```tsx
// ✅ Correct — next/font/google
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
```

- Install icon libraries as npm packages (`lucide-react`). Never CDN.
- **NEVER** load external JS scripts via `<script src="https://...">` unless it's a verified payment SDK (Stripe, Razorpay).

---

## FE5. Component Security Patterns

- **NEVER** initialise third-party SDKs inside component render paths. Initialise once at module level or in a provider.
- **NEVER** include business logic for pricing, discounts, or permissions in frontend code — always validate on the server.
- **NEVER** ship source maps to production — they expose original source code.

```tsx
// ❌ WRONG — re-initialises on every render
function PaymentButton() {
  const stripe = new Stripe(key); // runs every render
  return <button onClick={() => stripe.pay()}>Pay</button>;
}

// ✅ Correct — initialise once
const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
function PaymentButton() {
  return <button onClick={() => stripe.pay()}>Pay</button>;
}
```

---

## FE6. Next.js App Router Security

- `page.tsx` is always a **Server Component** (no `"use client"`) unless it has no async data.
- `page.tsx` is a thin shell — all state and interaction logic goes in a `*Content.tsx` client component.
- **NEVER** access server-only secrets in client components. Use Server Actions or API routes.
- Always include `error.tsx` and `not-found.tsx` at the app root — these are your error boundaries.

```tsx
// app/dashboard/page.tsx — Server Component (no "use client")
import { DashboardContent } from "./DashboardContent";

export default async function DashboardPage() {
  const data = await fetchDashboardData(); // server-side fetch
  return <DashboardContent initialData={data} />;
}

// app/dashboard/DashboardContent.tsx — Client Component
"use client";
export function DashboardContent({ initialData }: Props) {
  // all state, hooks, interactions here
}
```

---

## FE7. CORS — Frontend Perspective

- **NEVER** set `credentials: "include"` on fetch requests to untrusted APIs.
- Always use the Fonix API base URL from environment variables — never hardcode API URLs.

```tsx
// ❌ WRONG — hardcoded API URL
const res = await fetch("http://localhost:3001/api/projects");

// ✅ Correct — from environment
const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/projects`, {
  headers: { Authorization: `Bearer ${accessToken}` },
});
```

---

## FE8. Tailwind & Styling Security

- Define brand colours as design tokens in `tailwind.config.ts` — never `bg-[#E8472A]` scattered across files.
- Use Tailwind variants (`hover:`, `focus:`, `dark:`) — never `onMouseEnter` to manipulate inline styles.
- `style={{}}` only for genuinely dynamic runtime values (animation progress). Never for colours, padding, fonts.

---

## FE9. Form & Input Handling

- Client-side validation is a **courtesy for UX**. Server-side validation is the security measure.
- **NEVER** trust that client-side validation ran. The server must validate every input independently.
- Use controlled components for forms. Never read form values from DOM directly.
- Disable submit buttons during API calls to prevent double submissions.
- Always show meaningful error messages from server validation — never expose raw error objects.

```tsx
// ✅ Correct form pattern
const [isSubmitting, setIsSubmitting] = useState(false);

async function handleSubmit(data: FormData) {
  setIsSubmitting(true);
  try {
    const result = await createProject(data);
    if (!result.success) {
      showToast(result.error.message); // user-friendly message
    }
  } catch (error) {
    showToast("Something went wrong. Please try again.");
    logger.error({ error }, "Form submission failed"); // structured log
  } finally {
    setIsSubmitting(false);
  }
}
```

---

## FE10. State Management Security

- Use **Zustand** for global client state. Use **React state** (`useState`) for component-local state. Use **URL state** (search params) for shareable/filterable state.
- **NEVER** store sensitive data (tokens, user PII, payment info) in Zustand's persist middleware.
- **NEVER** store user role or permissions in client state for security decisions — always verify on the server.

---

## FE11. Responsive & Self-Testing

Before creating a PR, verify:
- Layout works at 375px (mobile), 768px (tablet), 1280px (desktop)
- No errors or warnings in browser console
- Loading indicators visible during async operations
- Empty states handled (empty array, not null, not blank screen)
- Error states handled (API failure shows user-friendly message)
- Tested as the **correct user role** — not as admin when testing a regular user feature

---

## Frontend Quick Checklist

| # | Check | Pass? |
|---|-------|-------|
| 1 | No `dangerouslySetInnerHTML` without DOMPurify | ☐ |
| 2 | No tokens in `localStorage` / `sessionStorage` | ☐ |
| 3 | No secret keys with `NEXT_PUBLIC_` prefix | ☐ |
| 4 | No external CDN links (fonts, icons, stylesheets) | ☐ |
| 5 | No `eval()`, `new Function()`, `innerHTML` with user data | ☐ |
| 6 | No hardcoded API URLs — env vars used | ☐ |
| 7 | No source maps shipped to production | ☐ |
| 8 | No SDK initialisation inside render paths | ☐ |
| 9 | No pricing/permission logic in frontend only | ☐ |
| 10 | `error.tsx` and `not-found.tsx` present | ☐ |
| 11 | No `console.log` — structured logger used | ☐ |
| 12 | No `var`, no `any`, no `@ts-ignore`, no `==` | ☐ |

---

*Fonix Technologies — Frontend Security Rules (React / Next.js) · Always paste with Shared file*

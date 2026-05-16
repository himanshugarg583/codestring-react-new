export const blogCategories = [
  { label: 'DevOps', accent: '#e7f3fb' },
  { label: 'Full Stack', accent: '#fde7a0' },
  { label: 'General', accent: '#e9efff' },
  { label: 'Insights', accent: '#e6f6ef' },
  { label: 'QA', accent: '#f7e5a8' },
  { label: 'Salesforce', accent: '#e3f0c9' },
]

export const blogPosts = [
  {
    slug: 'recursion-data-structures-click',
    title: 'How Recursion Makes Data Structures Click (Finally)',
    excerpt:
      'A simple way to understand recursion, base cases, and why it matters for core data structures.',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    readTime: '6 Min. Read',
    category: 'General',
    content: [
      'Recursion is just a function calling itself with a smaller problem. The base case is the stop sign that prevents infinite loops.',
      'Trees, graphs, and divide-and-conquer algorithms become easier once you think in terms of smaller subproblems and clear base cases.',
      'If recursion feels scary, trace one input on paper and watch the stack grow and shrink. That mental model makes the concept stick.',
    ],
    seo: {
      title: 'How Recursion Makes Data Structures Click | CodeString',
      description:
        'A quick, practical explanation of recursion and why it makes data structures easier to understand.',
      keywords:
        'recursion, data structures, base case, call stack, algorithms',
      canonical: 'https://codestring.in/blog/recursion-data-structures-click',
      ogImage:
        'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
      ogType: 'article',
    },
  },
  {
    slug: 'vite-vs-cra-react-2025',
    title: 'Vite vs CRA: What Every React Dev Should Know in 2025',
    excerpt:
      'Compare dev speed, build output, and tooling so you can pick the right React stack.',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
    readTime: '6 Min. Read',
    category: 'Full Stack',
    content: [
      'Vite uses native ESM in development, which makes startup and hot reload much faster than CRA on larger projects.',
      'CRA is stable but slower and less flexible. Vite gives a modern build pipeline with easier configuration and smaller bundles.',
      'If you are starting new in 2025, Vite is the default choice. Keep CRA only for legacy projects that already depend on it.',
    ],
    seo: {
      title: 'Vite vs CRA for React in 2025 | CodeString',
      description:
        'A practical comparison of Vite and Create React App to help you choose the right React tooling.',
      keywords: 'Vite vs CRA, React tooling, build tools, Vite React',
      canonical: 'https://codestring.in/blog/vite-vs-cra-react-2025',
      ogImage:
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
      ogType: 'article',
    },
  },
  {
    slug: 'what-happens-when-you-call-api',
    title: 'What Really Happens When You Call an API?',
    excerpt:
      'From DNS to response payloads, here is the real journey behind every API call.',
    image:
      'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80',
    readTime: '5 Min. Read',
    category: 'General',
    content: [
      'Your request starts with DNS lookup, then a TCP or TLS handshake to create a secure connection to the server.',
      'The server parses headers, validates auth, runs business logic, and returns a response with status codes and data.',
      'Latency comes from network distance, server load, and response size. Caching and pagination keep APIs fast.',
    ],
    seo: {
      title: 'What Happens When You Call an API | CodeString',
      description:
        'A clear explanation of the steps an API call takes from your browser to the server and back.',
      keywords: 'API request, HTTP, DNS, TLS, REST basics',
      canonical: 'https://codestring.in/blog/what-happens-when-you-call-api',
      ogImage:
        'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1200&q=80',
      ogType: 'article',
    },
  },
  {
    slug: 'ml-training-like-teaching-child',
    title: 'Why ML Training Is Actually Like Teaching a Child',
    excerpt:
      'Small feedback loops, good examples, and patience are what make models learn well.',
    image:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    readTime: '5 Min. Read',
    category: 'Insights',
    content: [
      'Models learn from examples, not from intentions. If the examples are biased or noisy, the output will be too.',
      'Training is a feedback loop. You show a sample, get a prediction, measure error, and update weights to improve.',
      'Like teaching a child, better explanations and consistent practice make learning faster and more reliable.',
    ],
    seo: {
      title: 'ML Training Explained With a Simple Analogy | CodeString',
      description:
        'A simple way to understand how machine learning models learn and improve with training data.',
      keywords: 'machine learning training, ML basics, model learning, data quality',
      canonical: 'https://codestring.in/blog/ml-training-like-teaching-child',
      ogImage:
        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
      ogType: 'article',
    },
  },
  {
    slug: 'code-debug-full-stack-pro',
    title: 'How to Code & Debug Like a Full-Stack Pro',
    excerpt:
      'A practical workflow for tracing bugs across frontend, backend, and data layers.',
    image:
      'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=800&q=80',
    readTime: '6 Min. Read',
    category: 'Full Stack',
    content: [
      'Start by isolating the layer where the bug begins: UI, API, or database. Narrowing the scope saves hours.',
      'Use consistent logging, request IDs, and browser devtools to trace the full path of a request.',
      'Write a quick reproduction test or script. If you can reproduce it, you can fix it confidently.',
    ],
    seo: {
      title: 'Code and Debug Like a Full-Stack Pro | CodeString',
      description:
        'Learn a simple workflow for debugging issues across frontend, backend, and database layers.',
      keywords: 'debugging, full stack, troubleshooting, devtools, logs',
      canonical: 'https://codestring.in/blog/code-debug-full-stack-pro',
      ogImage:
        'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1200&q=80',
      ogType: 'article',
    },
  },
  {
    slug: 'full-stack-dev-trends-2025',
    title: 'Top Full-Stack Dev Trends to Watch in 2025',
    excerpt:
      'From meta frameworks to AI-assisted coding, here is what matters this year.',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    readTime: '6 Min. Read',
    category: 'Full Stack',
    content: [
      'Meta frameworks are standardizing routing, data fetching, and edge rendering for faster delivery.',
      'AI copilots are now part of the developer toolkit. The focus is on using them responsibly and verifying output.',
      'Teams still value fundamentals: security, testing, and performance. Trends evolve, core skills remain.',
    ],
    seo: {
      title: 'Full-Stack Dev Trends to Watch in 2025 | CodeString',
      description:
        'A focused list of the full stack development trends that matter most in 2025.',
      keywords: 'full stack trends 2025, web development, AI tools, meta frameworks',
      canonical: 'https://codestring.in/blog/full-stack-dev-trends-2025',
      ogImage:
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
      ogType: 'article',
    },
  },
  {
    slug: 'netflix-data-structures-algorithms',
    title: 'How Netflix Uses Data Structures and Algorithms',
    excerpt:
      'Ever wondered how recommendation engines work? We break down the core ideas.',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    readTime: '8 Min. Read',
    category: 'General',
    content: [
      'Netflix runs on fast lookups, ranking systems, and caching layers. Data structures like hash maps and priority queues make personalized rows appear instantly for millions of users.',
      'Recommendation engines score content using signals like watch time, rewatches, and searches. Those signals are sorted, filtered, and served through efficient algorithms to keep the UI snappy.',
      'When you see trending or continue watching rows, you are seeing systems that balance freshness, relevance, and scale with smart indexing and batching.',
    ],
    seo: {
      title: 'How Netflix Uses Data Structures and Algorithms | CodeString',
      description:
        'Understand how large platforms like Netflix rely on data structures and algorithms for recommendations and performance.',
      keywords:
        'Netflix algorithms, data structures, recommendation systems, caching, ranking',
      canonical: 'https://codestring.in/blog/netflix-data-structures-algorithms',
      ogImage:
        'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
      ogType: 'article',
    },
  },
  {
    slug: 'ui-ux-design-difference',
    title: 'UI/UX Design: The Difference Every Designer Should Know',
    excerpt:
      'Understand the frameworks and thinking that separate UI from UX.',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
    readTime: '8 Min. Read',
    category: 'Insights',
    content: [
      'UI is the look and feel of a product, while UX is the end-to-end experience a user has with it. Strong products need both to work together.',
      'Great UX focuses on user goals, flows, and friction points. UI expresses those decisions with typography, spacing, and visual hierarchy.',
      'If your screens are beautiful but users get lost, UX needs work. If flows are solid but visuals are unclear, UI needs refinement.',
    ],
    seo: {
      title: 'UI vs UX: The Difference Designers Must Know | CodeString',
      description:
        'Learn the practical difference between UI and UX design and how they work together to build great products.',
      keywords: 'UI vs UX, UX design, UI design, product design basics',
      canonical: 'https://codestring.in/blog/ui-ux-design-difference',
      ogImage:
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
      ogType: 'article',
    },
  },
  {
    slug: 'ai-driven-marketing-ownership',
    title: 'What Marketers Must Own in an AI-Driven Market',
    excerpt:
      'AI is changing how we create, measure, and optimize campaigns.',
    image:
      'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=800&q=80',
    readTime: '6 Min. Read',
    category: 'Insights',
    content: [
      'Marketers now need to master prompts, creative testing, and data interpretation. AI accelerates output, but humans still define direction.',
      'The highest leverage skills are message strategy, audience insight, and conversion thinking. AI becomes a multiplier when these are clear.',
      'Track experimentation rigorously. Use AI to generate options, but keep judgment on positioning and brand voice in human hands.',
    ],
    seo: {
      title: 'Marketing Skills for the AI Era | CodeString',
      description:
        'Explore the core marketing skills you must own as AI transforms campaigns and creative workflows.',
      keywords: 'AI marketing, growth marketing, campaign optimization, prompt strategy',
      canonical: 'https://codestring.in/blog/ai-driven-marketing-ownership',
      ogImage:
        'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1200&q=80',
      ogType: 'article',
    },
  },
  {
    slug: 'hr-training-for-engineers-2026',
    title: 'Why HR Training Is a Must for Engineers in 2026',
    excerpt:
      'Soft skills and communication are part of every high-performing team.',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    readTime: '6 Min. Read',
    category: 'General',
    content: [
      'Modern engineers collaborate across product, design, and business teams. HR-style training helps with communication, conflict resolution, and feedback.',
      'Teams move faster when engineers can explain trade-offs clearly and align with non-technical stakeholders.',
      'Learning these skills is no longer optional. It is a direct path to leadership and faster career growth.',
    ],
    seo: {
      title: 'HR Training for Engineers in 2026 | CodeString',
      description:
        'Why communication and collaboration skills are now critical for engineers who want to grow in 2026.',
      keywords: 'engineer soft skills, HR training, communication, career growth',
      canonical: 'https://codestring.in/blog/hr-training-for-engineers-2026',
      ogImage:
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
      ogType: 'article',
    },
  },
  {
    slug: 'low-code-ai-for-junior-devs',
    title: 'How Low-Code and AI Help Junior Full Stack Devs',
    excerpt:
      'Explore how tooling helps engineers ship faster without sacrificing quality.',
    image:
      'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80',
    readTime: '6 Min. Read',
    category: 'Full Stack',
    content: [
      'Low-code platforms and AI copilots remove repetitive tasks so juniors can focus on logic and problem solving.',
      'The best use is scaffolding and debugging help, not skipping fundamentals. Use AI to learn faster, not to avoid learning.',
      'Companies still value engineers who can reason about architecture. Use these tools to build confidence and speed.',
    ],
    seo: {
      title: 'Low-Code + AI for Junior Developers | CodeString',
      description:
        'See how low-code tools and AI copilots accelerate junior full stack developer growth.',
      keywords: 'low code, AI copilot, junior developers, full stack learning',
      canonical: 'https://codestring.in/blog/low-code-ai-for-junior-devs',
      ogImage:
        'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1200&q=80',
      ogType: 'article',
    },
  },
  {
    slug: 'full-stack-trends-2026',
    title: 'Top Full Stack Development Trends to Watch',
    excerpt:
      'A quick scan of what employers want and how you can prepare.',
    image:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    readTime: '6 Min. Read',
    category: 'Full Stack',
    content: [
      'Full stack roles now expect cloud literacy, API-first thinking, and strong front-end performance skills.',
      'Frameworks shift quickly, but fundamentals like state management, testing, and deployment remain the core.',
      'Focus on shipping real projects with authentication, databases, and CI to match hiring expectations.',
    ],
    seo: {
      title: 'Full Stack Development Trends 2026 | CodeString',
      description:
        'Discover the full stack skills and trends that matter most for hiring in 2026.',
      keywords: 'full stack trends, hiring skills, web development, 2026 tech',
      canonical: 'https://codestring.in/blog/full-stack-trends-2026',
      ogImage:
        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
      ogType: 'article',
    },
  },
  {
    slug: 'still-ignoring-dsa',
    title: 'Still Ignoring DSA? This Might Be Why',
    excerpt:
      'DSA is not just interviews. It powers efficient production systems too.',
    image:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80',
    readTime: '5 Min. Read',
    category: 'General',
    content: [
      'DSA improves your ability to pick the right tool for a problem. It reduces bugs and performance bottlenecks in real systems.',
      'Interview prep is only a side effect. The real gain is clarity in how you design data pipelines, caching, and search.',
      'Even simple apps benefit from smarter data choices. Learn DSA and your code becomes more resilient.',
    ],
    seo: {
      title: 'Why DSA Still Matters in 2026 | CodeString',
      description:
        'Understand why data structures and algorithms matter beyond interviews.',
      keywords: 'DSA, data structures, algorithms, software performance',
      canonical: 'https://codestring.in/blog/still-ignoring-dsa',
      ogImage:
        'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80',
      ogType: 'article',
    },
  },
  {
    slug: 'gen-ai-career-2026',
    title: 'What Gen AI Means for Your Career in 2026',
    excerpt:
      'How to stay relevant when AI tools become part of every workflow.',
    image:
      'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80',
    readTime: '5 Min. Read',
    category: 'Insights',
    content: [
      'Gen AI will be embedded in everyday tools. Learn how to prompt, verify output, and combine AI with your core expertise.',
      'People who can translate business problems into AI-assisted workflows will lead the next wave of hiring.',
      'Build a portfolio that shows you can use AI responsibly, not just generate content.',
    ],
    seo: {
      title: 'Gen AI and Career Growth in 2026 | CodeString',
      description:
        'Learn how Gen AI changes career paths and how to stay ahead in 2026.',
      keywords: 'gen AI, career growth, AI skills, future of work',
      canonical: 'https://codestring.in/blog/gen-ai-career-2026',
      ogImage:
        'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1200&q=80',
      ogType: 'article',
    },
  },
  {
    slug: 'soft-skills-for-engineers',
    title: '10 Important Soft Skills Every Computer Engineer Needs',
    excerpt:
      'Communication, collaboration, and clarity are now mandatory skills.',
    image:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
    readTime: '4 Min. Read',
    category: 'General',
    content: [
      'The best engineers can explain complex ideas simply. Communication makes you faster in teams and clearer with stakeholders.',
      'Skills like negotiation, listening, and time management reduce rework and help you lead projects confidently.',
      'Treat soft skills as engineering tools. They compound with your technical ability over time.',
    ],
    seo: {
      title: 'Soft Skills for Computer Engineers | CodeString',
      description:
        'A practical list of soft skills that help engineers collaborate and grow faster.',
      keywords: 'soft skills, engineers, communication, teamwork',
      canonical: 'https://codestring.in/blog/soft-skills-for-engineers',
      ogImage:
        'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80',
      ogType: 'article',
    },
  },
  {
    slug: 'devops-pipelines-2026',
    title: 'DevOps Pipelines Recruiters Expect in 2026',
    excerpt:
      'CI/CD fundamentals, cloud pipelines, and practical tooling checklists.',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    readTime: '5 Min. Read',
    category: 'DevOps',
    content: [
      'Recruiters expect Git-based workflows, automated testing, and clear deployment pipelines.',
      'Focus on infrastructure as code, monitoring, and rollback strategies. These separate hobby projects from production systems.',
      'Build a pipeline demo that includes tests, linting, and cloud deployment to show real-world readiness.',
    ],
    seo: {
      title: 'DevOps Pipelines for 2026 Hiring | CodeString',
      description:
        'What recruiters look for in DevOps pipelines and how to build a strong portfolio.',
      keywords: 'DevOps pipelines, CI/CD, infrastructure as code, hiring',
      canonical: 'https://codestring.in/blog/devops-pipelines-2026',
      ogImage:
        'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
      ogType: 'article',
    },
  },
  {
    slug: 'qa-automation-first-steps',
    title: 'QA Automation Testing: What to Learn First',
    excerpt:
      'A starter roadmap for tools, frameworks, and real-world testing skills.',
    image:
      'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80',
    readTime: '6 Min. Read',
    category: 'QA',
    content: [
      'Start with testing fundamentals: test cases, defect lifecycle, and regression basics.',
      'Learn one automation stack deeply. Focus on frameworks, reporting, and CI integration.',
      'Recruiters value engineers who can explain test strategy, not just write scripts.',
    ],
    seo: {
      title: 'QA Automation: What to Learn First | CodeString',
      description:
        'A practical roadmap for learning QA automation testing and modern tools.',
      keywords: 'QA automation, testing roadmap, Selenium, CI testing',
      canonical: 'https://codestring.in/blog/qa-automation-first-steps',
      ogImage:
        'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1200&q=80',
      ogType: 'article',
    },
  },
  {
    slug: 'salesforce-admin-to-developer-90-days',
    title: 'Salesforce Admin to Developer: First 90 Days',
    excerpt:
      'Key skills, tools, and mini-projects to level up in the ecosystem.',
    image:
      'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=800&q=80',
    readTime: '6 Min. Read',
    category: 'Salesforce',
    content: [
      'Move from clicks to code by learning Apex, SOQL, and Lightning components.',
      'Build small automation projects to prove you can translate business needs into logic.',
      'A 90-day plan with weekly practice is enough to make the developer jump confidently.',
    ],
    seo: {
      title: 'Salesforce Admin to Developer in 90 Days | CodeString',
      description:
        'A 90-day path to transition from Salesforce admin to developer with practical milestones.',
      keywords: 'Salesforce admin, Salesforce developer, Apex, LWC',
      canonical: 'https://codestring.in/blog/salesforce-admin-to-developer-90-days',
      ogImage:
        'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1200&q=80',
      ogType: 'article',
    },
  },
]

import heroGirl from '../assets/Images/Girl.png'
import programGirl from '../assets/Images/girl2.png'
import enquiryBg from '../assets/Images/login.webp'
import mentor1 from '../assets/mentors/mentor 1.png'
import mentor2 from '../assets/mentors/mentor 2.png'
import mentor3 from '../assets/mentors/mentor 3.png'
import mentor4 from '../assets/mentors/mentor 4.png'
import mentor5 from '../assets/mentors/mentor 5.png'
import student2 from '../assets/students/student 2.png'
import student3 from '../assets/students/student 3.png'
import student4 from '../assets/students/student 4.png'
import student8 from '../assets/students/student 8.png'
import popupLogo from '../assets/Logo/logo.png'
import cgcLogo from '../assets/colleges/cgc-logo_2.png'
import cgcLandranLogo from '../assets/colleges/cgc-college-of-engineering-landran-mohali-colleges-266x266.png'
import buestLogo from '../assets/colleges/Mask-Group-6@2x-3-300x263.png'
import tulasLogo from '../assets/colleges/Mask-Group-6@2x-4-300x263.png'
import naacLogo from '../assets/colleges/NAAC-Logo-2025-webp-1.webp'
import puLogo from '../assets/colleges/PULogo.png'

const mentorImages = [mentor1, mentor2, mentor3, mentor4, mentor5]
const studentImages = [student2, student3, student4, student8]

const mentorItems = [
  {
    name: 'Aarti Mehta',
    role: 'Full Stack & Gen AI Trainer',
    bio:
      '7+ years of experience in building scalable web apps using React, Node.js, and modern backend frameworks. Has helped 300+ students land their first dev job.',
  },
  {
    name: 'Anjali Singh',
    role: ' C++ & Java Trainer',
    bio:
      '8+ years of expertise in Data Structures, Algorithms, and Object-Oriented Programming.Trained 500+ students for top product-based company interviews.',
    featured: true,
  },
  {
    name: 'Priya Rao',
    role: 'Python Trainer',
    bio:
      '5+ years of experience in Python — from automation scripts to data science and ML libraries like Pandas, NumPy, and Scikit-learn.Helped 400+ learners transition into data and software roles.',
  },
  {
    name: 'Mohit Sharma',
    role: 'Cloud & DevOps Trainer',
    bio: 'AWS Certified with 6+ years in cloud infrastructure, CI/CD pipelines, Docker, and Kubernetes. Mentor-of-the-Year at multiple ed-tech platforms.',
  },
  // {
  //   name: 'Manish Singh',
  //   role: 'Python Trainer',
  //   bio: '2 years of experience.',
  // },
]

const spotlightItems = [
  {
    name: 'Aakanksha Verma',
    role: 'Full Stack Developer at a Bangalore startup',
    quote:
      'CodeString did not just teach me to code - it taught me how to think like a developer. The projects and mentors made all the difference.',
    rating: 5,
  },
  {
    name: 'Alisha Sharma',
    role: 'Data Analyst, placed within 3 months',
    quote:
      'One of the best decisions I made was choosing CodeString. Hands-on assignments and real mentor feedback changed the way I approach problems.',
    rating: 5,
  },
  {
    name: 'Suresh Babu',
    role: 'QA Engineer, switched from non-IT background',
    quote:
      'I came from a completely different field. The structured curriculum and placement support made my switch into tech smooth and confident.',
    rating: 5,
  },
]

export const siteContent = {
  hero: {
    titleLines: ['Turn Curiosity Into Code.', 'Build the Career You Actually Want.'],
    tagline:
      'Industry-aligned programs for students, fresh graduates, and career switchers - built by engineers, for engineers.',
    cta: 'Start Learning Free',
    image: heroGirl,
    imageAlt: 'Student learning',
  },
  popup: {
    enabled: true,
    delayMs: 10000,
    storageKey: 'codestring_popup_v1',
    logo: popupLogo,
    title: '45 Days Internship Program',
    subtitle: 'React, Node.js Learning & Gen AI',
    highlights: [
      'Letter of Internship',
      'Industry-Oriented Curriculum',
      'Practical Assignments',
      'Certification on Completion',
      'Expert Mentorship',
      'Hands-On Training',
    ],
    startDate: 'Starting from 1 June 2026',
    feeLabel: 'Program Fee',
    feeValue: 'INR 2,999/-',
    cta: 'Limited Seats | Apply Now',
  },
  stats: [
    { value: '30+', label: 'Courses' },
    { value: '1200+', label: 'Students' },
    { value: '600+', label: 'Placements' },
    { value: '15+', label: 'Hiring Partners' },
  ],
  whyChoose: {
    title: 'Why Should You Pick CodeString?',
    cards: [
      {
        iconKey: 'target',
        title: 'Live Sessions with Industry Pros',
        text:
          'Learn directly from developers working at top product and service companies - not just theory teachers.',
      },
      {
        iconKey: 'laptop',
        title: 'Real Projects & Assignments',
        text:
          'Every module ends with hands-on projects that go straight into your portfolio and your GitHub.',
      },
      {
        iconKey: 'builder',
        title: 'Curriculum Built by Engineers',
        text:
          "Our syllabus is reviewed every quarter by CTOs and senior devs so you're always learning what's actually used.",
      },
    ],
  },
  programs: {
    title: 'Unlock Your Potential With Expertly Curated Programs',
    image: programGirl,
    imageAlt: 'Student pointing',
    items: [
      {
        badge: 'Long Duration Course',
        title: 'Full-Stack Development Bootcamp',
        description:
          'Master frontend to backend - from HTML/CSS to Node.js and databases - in 5-6 months with placement support.',
        cta: 'Learn More',
        accent: '#fde7a0',
      },
      {
        badge: 'Short Duration Course',
        title: 'Quick Skills Sprint',
        description:
          'Nail one high-demand skill in under 2 months. Perfect for working professionals and college students.',
        cta: 'Learn More',
        accent: '#ddf2c6',
      },
      {
        badge: 'Industry-Institute Collaboration (IIC)',
        title: 'Campus to Corporate Program',
        description:
          'Structured training co-designed with hiring companies so your skills match exactly what the industry needs right now.',
        cta: 'Learn More',
        accent: '#d6f0ff',
      },
    ],
  },
  skills: {
    title: 'Transform Your Learning With the Most In-Demand Tech Skills',
    subtitle:
      'Choose CodeString for a transformational experience with mentors from leading product companies.',
    tracks: [
      { title: 'Full Stack', count: '25 Courses', iconKey: 'stack', accent: '#ead8f4' },
      {
        title: 'DevOps & Cloud',
        count: '9 Courses',
        iconKey: 'devops',
        accent: '#d9eef9',
      },
      {
        title: 'Data Science',
        count: '7 Courses',
        iconKey: 'data',
        accent: '#e3f0c9',
      },
      { title: 'QA & Testing', count: '4 Courses', iconKey: 'qa', accent: '#f7e5a8' },
    ],
    cta: 'Explore All Courses',
  },
  partners: {
    title: 'Institutes & Companies We Have Partnered With',
    logos: [
      { src: cgcLogo, alt: 'CGC logo' },
      { src: buestLogo, alt: 'BUEST logo' },
      { src: tulasLogo, alt: 'Tulas logo' },
      { src: cgcLandranLogo, alt: 'CGC Landran logo' },
      { src: naacLogo, alt: 'NAAC logo' },
      { src: puLogo, alt: 'PU logo' },
    ],
  },
  mentors: {
    title: 'Our Mentors',
    subtitle:
      'Our panel of mentors includes Subject Matter Experts (SMEs) dedicated to helping learners succeed. With deep knowledge and real-world experience, they provide personalized guidance and support throughout your journey.',
    items: mentorItems.map((mentor, index) => ({
      ...mentor,
      image: mentorImages[index % mentorImages.length],
    })),
  },
  ctaBanner: {
    eyebrow: 'Your Dream Job Is Only a Query Away!',
    headline: 'Begin Your Journey Towards Growth With CodeString',
    subtext:
      'At CodeString, we offer a wide range of future-ready courses. Drop us a word to connect with our experts now.',
    background: enquiryBg,
  },
  enquiryForm: {
    title: 'Enquire Now',
    subtitle: "Speak with a counsellor - it's completely free.",
    fields: {
      name: 'Name*',
      email: 'Email*',
      phone: 'Contact Number*',
      question: 'Primary Question?'
    },
    consent:
      'I understand and agree that the information submitted here will be used to reach me via phone, email, or WhatsApp. I give my consent to be contacted.',
    submit: 'Submit Enquiry',
  },
  contactHelp: {
    title: 'Need Help Making a Decision?',
    options: [
      {
        iconKey: 'phone',
        label: 'Call Us',
        details: ['+91-63765-32619 / +91-63765-32619', '(Mon-Sat, 9 AM - 7 PM)'],
      },
      {
        iconKey: 'email',
        label: 'Email Us',
        details: ['info@codestring.in'],
      },
    ],
  },
  trending: {
    title: 'Trending Courses',
    items: [
      {
        badge: 'Trending',
        title: 'Full Stack (MERN)',
        level: 'Beginner -> Advanced',
        rating: 5,
        image:
          'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=700&q=80',
        cta: 'Enroll Now',
      },
      {
        badge: 'Trending',
        title: 'Python for Data Science',
        level: 'Beginner -> Intermediate',
        rating: 5,
        image:
          'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=700&q=80',
        cta: 'Enroll Now',
      },
      {
        badge: 'Trending',
        title: 'DevOps with AWS & Docker',
        level: 'Intermediate -> Advanced',
        rating: 5,
        image:
          'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=700&q=80',
        cta: 'Enroll Now',
      },
    ],
  },
  spotlights: {
    title: 'Student Spotlights',
    items: spotlightItems.map((spotlight, index) => ({
      ...spotlight,
      image: studentImages[index % studentImages.length],
    })),
  },
  blog: {
    title: 'Our Recent Blog Posts',
    items: [
      {
        title: 'How Recursion Makes Data Structures Click (Finally)',
        image:
          'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80',
        link: '#',
        cta: 'Read More ->',
      },
      {
        title: 'Vite vs CRA: What Every React Dev Should Know in 2025',
        image:
          'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80',
        link: '#',
        cta: 'Read More ->',
      },
      {
        title: 'What Really Happens When You Call an API?',
        image:
          'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=600&q=80',
        link: '#',
        cta: 'Read More ->',
      },
      {
        title: 'Why ML Training Is Actually Like Teaching a Child',
        image:
          'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80',
        link: '#',
        cta: 'Read More ->',
      },
      {
        title: 'How to Code & Debug Like a Full-Stack Pro',
        image:
          'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80',
        link: '#',
        cta: 'Read More ->',
      },
      {
        title: 'Top Full-Stack Dev Trends to Watch in 2025',
        image:
          'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80',
        link: '#',
        cta: 'Read More ->',
      },
    ],
  },
  footer: {
    brandTagline: 'Follow CodeString for Regular Updates',
    quickLinks: [
      { label: 'Courses', href: '#' },
      { label: 'About', href: '#' },
      { label: 'FAQs', href: '#' },
      { label: 'Internships', href: '#' },
    ],
    supportLinks: [
      { label: 'FAQs', href: '#' },
      { label: 'Terms & Conditions', href: '#' },
      { label: 'Refund Policy', href: '#' },
    ],
    contact: {
      address:
        'Plot 14, Tech Park, Sector 52, Gurugram, Haryana - 122001',
      phone: '+91-63765-32619',
      email: 'info@codestring.in',
      hours: 'Mon-Sat, 9:00 AM - 7:00 PM',
    },
    copyright: 'Copyright 2026 CodeString. All rights reserved.',
  },
  socialLinks: [
    { label: 'Facebook', href: '#' },
    { label: 'X', href: '#' },
    { label: 'YouTube', href: '#' },
    { label: 'Instagram', href: '#' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/ccodestring/' },
  ],
}

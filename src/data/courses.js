const defaultTabs = [
  'Course Description',
  'Curriculum',
  'Learning Outcome',
  'Fees',
  'How to Enrol',
  'FAQs',
]

const defaultHighlights = [
  '24x7 access to online learning through the SkillStone portal',
  'Learning courseware developed by subject matter experts',
  'Get your doubts cleared by email by experienced IT professionals',
  'Practical learning through applied assignments',
  'A certificate on successful completion of the course',
]

const defaultDescription = [
  'Build practical skills through guided lessons, assignments, and real-world projects.',
  'Learn the core concepts, tools, and workflows needed for on-the-job success.',
  'Enrol now to gain access to self-paced learning and mentor support.',
]

const defaultCurriculum = [
  'Foundations and toolchain setup',
  'Core language concepts and best practices',
  'Framework fundamentals and component design',
  'Project building, testing, and deployment',
  'Capstone and portfolio readiness',
]

const defaultOutcomes = [
  'Build responsive user interfaces',
  'Apply component and API patterns effectively',
  'Work with databases and authentication flows',
  'Deploy and maintain production-ready projects',
  'Communicate solutions with confidence',
]

const defaultEnrolSteps = [
  {
    title: 'Enrol by clicking Add to Cart',
    description: 'Select the course and add it to your cart.',
  },
  {
    title: 'Register for the course',
    description: 'Follow the provided instructions to register.',
  },
  {
    title: 'Make a payment',
    description: 'Complete the payment to start learning.',
  },
]

const defaultFaqs = [
  'What is the duration of the course?',
  'Do I need prior experience?',
  'Will I receive a certificate?',
  'How can I access the course content?',
  'What if I miss a session?',
  'How do I contact support?',
]

const defaultHeroImage =
  'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80'
const defaultSidebarImage =
  'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80'

const defaultCallout = {
  title: 'SkillStone - Difficult Things About Education.',
  body: 'Talk to us: +91-6376532619',
  cta: 'Enrol Now',
  image:
    'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=600&q=80',
}

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

const buildCourse = (overrides) => ({
  slug: overrides.slug || slugify(overrides.menuLabel || overrides.title),
  title: overrides.title,
  menuLabel: overrides.menuLabel || overrides.title,
  subtitle:
    overrides.subtitle ||
    'Build practical skills with mentor-led training and hands-on projects.',
  badge: overrides.badge || 'Popular',
  rating: overrides.rating ?? 5,
  price: overrides.price || 'INR 999 /-',
  duration: overrides.duration || '2 Months',
  effort: overrides.effort || 'Estimated 40 hours/week',
  skillLevel: overrides.skillLevel || 'Long Duration',
  language: overrides.language || 'English',
  assessments: overrides.assessments || 'Assignments, Projects, Tests',
  heroImage: overrides.heroImage || defaultHeroImage,
  sidebarImage: overrides.sidebarImage || defaultSidebarImage,
  syllabusUrl: overrides.syllabusUrl || '/lead-magnets/detailed-syllabus.pdf',
  highlights: overrides.highlights || defaultHighlights,
  tabs: overrides.tabs || defaultTabs,
  description: overrides.description || defaultDescription,
  callout:
    typeof overrides.callout === 'undefined'
      ? defaultCallout
      : overrides.callout,
  curriculumTitle: overrides.curriculumTitle || 'Course Curriculum',
  curriculum: overrides.curriculum || defaultCurriculum,
  outcomes: overrides.outcomes || defaultOutcomes,
  enrolSteps: overrides.enrolSteps || defaultEnrolSteps,
  faqs: overrides.faqs || defaultFaqs,
  relatedCourses: overrides.relatedCourses || [],
  category: overrides.category || 'General',
})

const fullStackBeginner = buildCourse({
  slug: 'full-stack-mern-beginner',
  title: 'Full Stack Beginner Course (MERN)',
  menuLabel: 'FullStack (MERN) Beginners Course',
  subtitle:
    'This course is tailored for beginners and covers essential concepts and technologies required to build dynamic web applications.',
  badge: 'Trending',
  rating: 5,
  price: 'INR 999 /-',
  duration: '2 Months',
  effort: 'Estimated 40 hours/week',
  skillLevel: 'Long Duration',
  language: 'English',
  assessments: 'Assignments, Projects, Tests',
  heroImage:
    'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
  sidebarImage:
    'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80',
  highlights: [
    '24x7 access to online learning through the SkillStone portal',
    'Learning courseware developed by subject matter experts',
    'Get your doubts cleared by email by experienced IT professionals',
    'Practical learning through applied assignments',
    'A certificate on successful completion of the course',
  ],
  tabs: defaultTabs,
  description: [
    'With practical assignments, case studies, tests, and projects, this course will help you develop a basic understanding and skill set for full stack development.',
    'To gain subject knowledge and hands-on experience, you will learn JavaScript, HTML/CSS, ReactJS, NodeJS, MongoDB, and more.',
    'Enrol now to gain exclusive access to self-paced online learning and have your questions answered by experienced IT professionals via email.',
    'At the end of the course, you will receive a certificate of completion which will help you improve your resume and get noticed by prospective employers for your dream job.',
  ],
  callout: defaultCallout,
  curriculumTitle: 'Full Stack Course Curriculum (MERN)',
  curriculum: [
    'HTML/CSS',
    'JavaScript',
    'Front-End Framework: ReactJS',
    'Backend Concepts with NodeJS, Express, and MongoDB',
    'APIs, Authentication, and Deployment',
  ],
  outcomes: [
    'CSS margins, padding, and borders',
    'Building responsive HTML',
    'Using JavaScript (internal and external)',
    'Component API and component lifecycle',
    'Connecting and managing MongoDB',
    'Working with APIs and authentication',
  ],
  enrolSteps: defaultEnrolSteps,
  faqs: [
    'What is Full Stack and its scope?',
    'Where will the course be assigned to me?',
    'How to enrol in this course?',
    'Where will we attend the session and what if I miss it?',
    'What is the process if I want to quit the course?',
    'Will I get a certificate after completion?',
  ],
  relatedCourses: [
    {
      title: 'Advanced of FS',
      duration: '36 hours',
      rating: 4,
      image:
        'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'MongoDB',
      duration: '30 hours',
      rating: 5,
      image:
        'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Python',
      duration: '45 hours',
      rating: 4,
      image:
        'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=600&q=80',
    },
  ],
  category: 'Full Stack',
})

const salesforceDeveloper = buildCourse({
  slug: 'salesforce-developer',
  title: 'Salesforce Developer Course',
  menuLabel: 'Salesforce',
  subtitle:
    'Build hands-on skills in Salesforce development with Apex, Visualforce, and Lightning.',
  badge: 'Popular',
  rating: 5,
  price: 'INR 999 /-',
  duration: '2 Months',
  effort: 'Estimated 35 hours/week',
  skillLevel: 'Long Duration',
  language: 'English',
  assessments: 'Assignments, Projects, Tests',
  heroImage:
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
  sidebarImage:
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80',
  highlights: [
    'Live mentor support and doubt clearing',
    'Real-world case studies and projects',
    'Platform fundamentals to advanced builds',
    'Certificate on completion',
  ],
  tabs: ['Course Description', 'Curriculum', 'Learning Outcome', 'Fees', 'FAQs'],
  description: [
    'This course prepares you for Salesforce developer roles with practical, project-based learning.',
    'You will learn Apex, Visualforce, Lightning Web Components, integrations, and automation.',
  ],
  callout: {
    title: 'Talk to a Salesforce expert today.',
    body: 'Call us: +91-6376532619',
    cta: 'Enrol Now',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80',
  },
  curriculumTitle: 'Salesforce Course Curriculum',
  curriculum: ['Salesforce Basics', 'Apex Fundamentals', 'LWC', 'Integrations'],
  outcomes: ['Build custom apps', 'Automate workflows', 'Deploy LWC components'],
  enrolSteps: [
    { title: 'Register for the course', description: 'Sign up to get started.' },
  ],
  faqs: ['Is prior coding experience required?', 'What is the course duration?'],
  relatedCourses: [],
  category: 'Salesforce',
})

const qaAutomation = buildCourse({
  slug: 'qa-automation',
  title: 'QA Automation',
  menuLabel: 'QA Automation',
  subtitle: 'Learn automation frameworks, testing strategies, and CI pipelines.',
  curriculumTitle: 'QA Automation Curriculum',
  curriculum: ['Testing basics', 'Automation frameworks', 'API testing', 'CI pipelines'],
  outcomes: ['Write automated tests', 'Run CI pipelines', 'Report bugs effectively'],
  category: 'QA Automation',
})

const devOps = buildCourse({
  slug: 'dev-ops',
  title: 'Dev Ops',
  menuLabel: 'Dev Ops',
  subtitle: 'Master CI/CD, containers, and cloud deployments in real projects.',
  curriculumTitle: 'Dev Ops Curriculum',
  curriculum: ['Linux basics', 'Docker & containers', 'CI/CD pipelines', 'Cloud deployments'],
  outcomes: ['Ship via CI/CD', 'Manage deployments', 'Monitor applications'],
  category: 'Dev Ops',
})

const aiCourse = buildCourse({
  slug: 'ai',
  title: 'AI',
  menuLabel: 'AI',
  subtitle: 'Build AI-driven solutions using practical machine learning workflows.',
  curriculumTitle: 'AI Curriculum',
  curriculum: ['ML foundations', 'Model training', 'Prompting & inference', 'Deployment'],
  outcomes: ['Train models', 'Deploy AI workflows', 'Evaluate performance'],
  category: 'AI',
})

const fullStackMenuLabels = [
  'Web Development Summer Internship Program',
  'FullStack (MERN) Beginners Course',
  'FullStack (MEAN) Beginners Course',
  'Data Analytics with Python',
  'UI/UX',
  'DSA',
  'Java Fundamentals',
  'ReactJS',
  'Angular',
  'NodeJS',
  'Python',

]

const generatedFullStackCourses = fullStackMenuLabels
  .filter((label) => label !== 'FullStack (MERN) Beginners Course')
  .map((label) =>
    buildCourse({
      title: label,
      menuLabel: label,
      subtitle: `Learn ${label} with mentor-led training and hands-on projects.`,
      curriculumTitle: `${label} Curriculum`,
      category: 'Full Stack',
    }),
  )

export const courses = [
  fullStackBeginner,
  salesforceDeveloper,
  qaAutomation,
  devOps,
  aiCourse,
  ...generatedFullStackCourses,
]

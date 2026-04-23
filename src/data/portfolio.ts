import { Briefcase, TrendingUp, Search, Layers, Megaphone, Smartphone, Award, Terminal, Video, Link as LinkIcon, Target, Palette, Brain, Users, Clock, Lightbulb, MessageSquare, Scale, Hourglass, HeartHandshake, BookOpen, Rocket, Zap, Ear, Handshake, Share2, Linkedin, BarChart3, Magnet, Mail, Layout, PenTool, FlaskConical } from 'lucide-react';

export const HERO_DATA = {
  name: "Gaurav Singh Parihar",
  roles: ["Content & Growth Specialist", "Growth Marketer", "Content Strategist", "Organic Traffic Expert"],
  headline: "I Build Strategies That Drive Organic Growth",
  subtext: "Building growth systems that combine strategy, content, and data to drive real business impact.",
};

export const METRICS = [
  { label: "Traffic Generated", value: "100K+" },
  { label: "Keywords Ranked", value: "10K+" },
  { label: "Projects Scaled", value: "10+" },
  { label: "Years Experience", value: "4+" },
];

export const PROJECTS = [
  {
    title: "iXceed Solutions",
    role: "Content & Marketing Manager",
    duration: "May 2025 - Present",
    description: "I drive organic growth through content creation, SEO, and LinkedIn lead generation. I focus on building consistent brand visibility while securing industry awards to enhance credibility and inbound engagement.",
    achievement: "35% Increase in Brand Impressions, 20% Boost in CV Submissions & Leads to 2 Clients",
    image: "https://lh3.googleusercontent.com/u/0/d/1AOW0kWQIFbrqL3K6jH0PC_9Ic5VYC75e",
    link: "https://ixceed-solutions.com/",
    tags: ["SEO Strategy", "Content Marketing", "LinkedIn Leads"]
  },
  {
    title: "Soberpath App",
    role: "Digital Marketer (Growth & Branding)",
    duration: "Feb 2026 - Mar 2026",
    description: "I focused on building early-stage brand visibility and driving initial user traction through organic strategies. I leveraged Reddit and content-driven approaches to engage niche communities and generate targeted traffic during the app’s launch phase.",
    achievement: "In Initial Phase lead 5K+ Visitors on Apple App Store Within 1 Month",
    image: "https://lh3.googleusercontent.com/u/0/d/1KJfAsoWO1WmvRw6niruJHfY4hnwUYhuN",
    link: "https://soberpathapp.com/",
    tags: ["Reddit Marketing", "Content Strategy", "Organic Growth"]
  },
  {
    title: "GoForTrial",
    role: "SEO Manager",
    duration: "Dec 2023 - Apr 2025",
    description: "As the SEO Manager, I strategize and implement creative tactics to boost our website's visibility and organic traffic. I'm the go-to person for optimizing content and analyzing data to keep us ahead of the competition!",
    achievement: "17K+ Monthly Organic Traffic & 5K+ Ranked Keywords",
    image: "https://lh3.googleusercontent.com/u/0/d/1aHvnG1cUxRsIVkfpT27_snQfcWxpYj5I",
    link: "https://gofortrial.com/",
    tags: ["SEO Management", "Data Analysis", "Growth Strategy"]
  },
  {
    title: "Deals Dekho",
    role: "SEO & Content Manager",
    duration: "Nov 2022 - Apr 2025",
    description: "I focus on creating high-impact content that resonates with our audience and dominates search results. By deep-diving into analytics, I constantly refine our approach to maximize engagement and traffic.",
    achievement: "60K+ Monthly Traffic & 10K+ Ranked Keywords",
    image: "https://lh3.googleusercontent.com/u/0/d/1wNOM4Kji_us5Z3I1MHibvlOvCeDADQaX",
    link: "https://dealsdekho.co.in/",
    tags: ["Content SEO", "Analytics", "Audience Engagement"]
  },
  {
    title: "GamesNameGenerator",
    role: "Website Owner",
    duration: "Aug 2024 - Dec 2025",
    description: "Managing full-cycle growth—from technical SEO and content production to marketing and monetization strategies. Ensuring peak site performance and user experience.",
    achievement: "12K+ Monthly Traffic & 10K+ Ranked Keywords",
    image: "https://lh3.googleusercontent.com/u/0/d/1_oU8NUE5uBz5KGBhPk5jwmcq3aYraT9S",
    link: "https://gamesnamegenerator.com/",
    tags: ["Technical SEO", "Monetization", "Web Ownership"]
  },
  {
    title: "Divine Attire",
    role: "Local SEO Manager",
    duration: "Sep 2024 - Oct 2024",
    description: "Specialized in hyper-local visibility. Optimizing online presence and Google Business listings to translate digital searches into physical foot traffic and community engagement.",
    achievement: "Rank #1 on GMB for Competitive Local Keywords",
    image: "https://lh3.googleusercontent.com/u/0/d/1qCyPHr6bA6F-EuN5FlMuKOYmAvr0Ce11",
    link: "https://share.google/emqoA9i6luzCPvnAK",
    tags: ["Local SEO", "GMB Optimization", "Foot Traffic"]
  },
  {
    title: "WebMeTools",
    role: "Digital Marketing Executive",
    duration: "Jan 2021 - Dec 2023",
    description: "Crafted and managed multi-channel online campaigns. Analyzed cross-platform data to fine-tune strategies and foster creative audience connections.",
    achievement: "20K+ Monthly Traffic from 5+ Organic Sources",
    image: "https://lh3.googleusercontent.com/u/0/d/1-8zSDw4R1wMgvi5SCqdEPzDIDSYv2aPo",
    link: "https://webmetools.com/",
    tags: ["Digital Marketing", "Campaign Management", "Multi-Source"]
  },
  {
    title: "YourGamerDost",
    role: "YouTuber",
    duration: "March 2020 - Dec 2023",
    description: "Content creator focused on gaming. Built a vibrant community through engaging gameplay, funny commentary, and expert tips, celebrating gaming culture.",
    achievement: "3K+ Subscribers & 500K+ Total Views",
    image: "https://lh3.googleusercontent.com/u/0/d/1_MSe7GqHHsxlzP7vVPhuoiXBRKjSaYU9",
    link: "https://youtube.com/@yourgamerdost",
    tags: ["Content Creation", "Community Building", "YouTube"]
  }
];

export const SKILLS = {
  core: [
    {
      title: "SEO & Organic Growth",
      description: "I can rank websites using data-driven keyword strategy, on-page SEO, and scalable content systems.",
      icon: Search
    },
    {
      title: "Content Strategy & Management",
      description: "I plan, create, and manage content that aligns with business goals, audience intent, and conversion funnels.",
      icon: Layers
    },
    {
      title: "Social Media & Personal Branding",
      description: "I build consistent content systems (especially LinkedIn) to grow brand presence, engagement, and authority.",
      icon: Share2
    },
    {
      title: "LinkedIn Lead Generation",
      description: "I leverage content, outreach, and positioning to generate high-quality leads organically through LinkedIn.",
      icon: Linkedin
    },
    {
      title: "Research & Brainstorming",
      description: "I conduct deep research, analyze competitors, and brainstorm creative ideas to identify growth opportunities and content angles.",
      icon: Brain
    },
    {
      title: "Data Analysis & Performance Tracking",
      description: "I track performance using GA4, Search Console, and dashboards to optimize strategies based on real data.",
      icon: BarChart3
    },
    {
      title: "Website Optimization & UX",
      description: "I design and optimize website structure, landing pages, and content flow to improve user experience and conversions.",
      icon: Layout
    },
    {
      title: "Ad Campaign Setup & Execution",
      description: "I can set up & run ad campaigns that drive visibility, with a focus on simple, effective execution and manage campaigns that support lead generation.",
      icon: Target
    },
    {
      title: "Copywriting & Messaging",
      description: "I write persuasive and clear copy that improves engagement, conversions, and brand communication.",
      icon: PenTool
    },
    {
      title: "Creative & Visual Content",
      description: "I design graphics and edit videos to support content strategy and improve audience engagement.",
      icon: Palette
    },
    {
      title: "Email Marketing",
      description: "I can set up and manage email campaigns for nurturing leads and maintaining audience relationships.",
      icon: Mail
    },
    {
      title: "Growth Experimentation",
      description: "I experiment with channels like Reddit, SEO, and content systems to find scalable growth opportunities.",
      icon: FlaskConical
    }
  ],
  tools: [
    {
      category: "🔍 SEO & Optimization",
      items: [
        { name: "Semrush", icon: "https://prowly-prod.s3.eu-west-1.amazonaws.com/uploads/60169/assets/824898/large-27d31d9f4647ad4d6a4cd71810b52bff.png" },
        { name: "Surfer SEO", icon: "https://cdn.brandfetch.io/idMI1EQYax/theme/dark/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1757503869714" },
        { name: "RankMath", icon: "https://cdn.brandfetch.io/idnK0kffPN/w/350/h/350/theme/dark/icon.png?c=1bxid64Mup7aczewSAYMX&t=1775154769725" },
        { name: "Yoast SEO", icon: "https://cdn.brandfetch.io/id64sIHg1M/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1673963452011" },
        { name: "Sitechecker", icon: "https://cdn.brandfetch.io/idYjCc31nB/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1774214537828" }
      ]
    },
    {
      category: "📊 Analytics & Tracking",
      items: [
        { name: "GA4", icon: "https://cdn.brandfetch.io/idYpJMnlBx/w/515/h/515/theme/dark/icon.png?c=1bxid64Mup7aczewSAYMX&t=1703746982613" },
        { name: "Search Console", icon: "https://images.seeklogo.com/logo-png/44/1/google-search-console-logo-png_seeklogo-444237.png" },
        { name: "GTM", icon: "https://images.seeklogo.com/logo-png/37/1/google-tag-manager-logo-png_seeklogo-377211.png" },
        { name: "YouTube Studio", icon: "https://cdn.pixabay.com/photo/2021/05/22/10/22/youtube-6273167_1280.png" }
      ]
    },
    {
      category: "🤖 AI Research & Productivity",
      items: [
        { name: "ChatGPT", icon: "https://images.seeklogo.com/logo-png/50/1/chatgpt-logo-png_seeklogo-500383.png" },
        { name: "Claude", icon: "https://images.seeklogo.com/logo-png/55/1/claude-logo-png_seeklogo-554534.png" },
        { name: "Google AI Studio", icon: "https://images.seeklogo.com/logo-png/48/1/google-bard-logo-png_seeklogo-486880.png" },
        { name: "Perplexity", icon: "https://images.seeklogo.com/logo-png/51/1/perplexity-ai-logo-png_seeklogo-517845.png" }
      ]
    },
    {
      category: "🎨 Design & Media",
      items: [
        { name: "Canva", icon: "https://images.seeklogo.com/logo-png/65/1/canva-logo-png_seeklogo-653227.png" },
        { name: "CapCut", icon: "https://images.seeklogo.com/logo-png/43/1/capcut-logo-png_seeklogo-437025.png" },
        { name: "PicsArt", icon: "https://images.seeklogo.com/logo-png/32/1/picsart-icon-logo-png_seeklogo-321397.png" },
        { name: "Filmora", icon: "https://images.seeklogo.com/logo-png/36/1/wondershare-filmora-video-editor-logo-png_seeklogo-369722.png" }
      ]
    },
    {
      category: "🤖 AI Content & Creation",
      items: [
        { name: "Jasper", icon: "https://cdn.brandfetch.io/idbrKrUZrF/w/200/h/200/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1759129930287" },
        { name: "Grammarly", icon: "https://images.seeklogo.com/logo-png/37/1/grammarly-logo-png_seeklogo-372361.png" },
        { name: "Leonardo AI", icon: "https://images.seeklogo.com/logo-png/61/1/leonardo-ai-logo-png_seeklogo-619354.png" }
      ]
    },
    {
      category: "💰 Ads & Marketing Platforms",
      items: [
        { name: "Google Ads", icon: "https://cdn.brandfetch.io/idYpJMnlBx/w/515/h/515/theme/dark/icon.png?c=1bxid64Mup7aczewSAYMX&t=1703746982613" },
        { name: "Google AdSense", icon: "https://images.icon-icons.com/2699/PNG/512/google_ads_logo_icon_171064.png" },
        { name: "Meta Business Suite", icon: "https://images.seeklogo.com/logo-png/42/1/meta-icon-new-facebook-2021-logo-png_seeklogo-424014.png" }
      ]
    },
    {
      category: "🌐 CMS & Web Platforms",
      items: [
        { name: "WordPress", icon: "https://images.seeklogo.com/logo-png/29/1/wordpress-icon-logo-png_seeklogo-299143.png" },
        { name: "Elementor", icon: "https://cdn.brandfetch.io/idDXbvsZJH/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1769267810422" },
        { name: "Google Business Profile", icon: "https://img.icons8.com/?size=100&id=4y5FyfJdxJ3h&format=png&color=000000" }
      ]
    },
    {
      category: "🤝 Outreach & Sales Tools",
      items: [
        { name: "Lusha", icon: "https://cdn.brandfetch.io/idNK4wkrOo/w/180/h/180/theme/dark/icon.png?c=1bxid64Mup7aczewSAYMX&t=1673515841028" },
        { name: "RocketReach", icon: "https://cdn.brandfetch.io/idMR1oyz58/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1772549600633" },
        { name: "Sales Navigator", icon: "https://play-lh.googleusercontent.com/zb0NgZjxTlO6vMpGyjVmgMPN-xRbo31Q5xGNbjM8wYhiaU7xFKlGGCYl2Ws4-Nl0iBE" }
      ]
    },
    {
      category: "📧 CRM & Email Marketing",
      items: [
        { name: "HubSpot", icon: "https://images.seeklogo.com/logo-png/50/1/hubspot-logo-png_seeklogo-506857.png" },
        { name: "MailerLite", icon: "https://cdn.brandfetch.io/idB-3CfF_3/w/510/h/510/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1759218614207" }
      ]
    }
  ],
  quote: "New tools keep coming, and I like staying curious enough to explore what actually works."
};

export const PROCESS = [
  {
    step: "01",
    title: "Research & Audit",
    text: "Deep diving into your data, competitors, and technical health to find hidden opportunities.",
    icon: Search
  },
  {
    step: "02",
    title: "Strategy Building",
    text: "Creating a custom roadmap focused on high-impact ROI and long-term sustainability.",
    icon: Layers
  },
  {
    step: "03",
    title: "Execution",
    text: "High-quality content production and technical implementation without the fluff.",
    icon: Terminal
  },
  {
    step: "04",
    title: "Optimization",
    text: "Continuous monitoring and refining based on real-time performance and algorithm changes.",
    icon: TrendingUp
  }
];

export const INTERPERSONAL = [
  { title: "Problem-Solving", icon: Brain },
  { title: "Teamwork", icon: Users },
  { title: "Time Management", icon: Clock },
  { title: "Open-Mindedness", icon: Lightbulb },
  { title: "Communication", icon: MessageSquare },
  { title: "Critical Thinking", icon: Scale },
  { title: "Patience", icon: Hourglass },
  { title: "Relationship Building", icon: HeartHandshake },
  { title: "Self-Learning", icon: BookOpen },
  { title: "Self-Motivation", icon: Rocket },
  { title: "Decision-Making", icon: Zap },
  { title: "Active Listening", icon: Ear }
];

export const CERTIFICATIONS = [
  {
    title: "Digital Marketing Course",
    issuer: "LearnVern",
    year: "2022",
    description: "In this Course I learned about the strategies and techniques used to promote products, services, or brands through digital platforms.",
    link: "#"
  },
  {
    title: "Content Marketing & SEO Exam",
    issuer: "SEMrush Academy",
    year: "2023",
    description: "The Content Marketing & SEO Exam by SEMrush Academy teaches how to develop content strategies, optimize for SEO, and drive organic traffic.",
    link: "#"
  },
  {
    title: "Social Media Marketing Course",
    issuer: "Udemy",
    year: "2021",
    description: "The Social Media Marketing Course by Udemy teaches strategies to grow brands, engage audiences, and drive sales across various social media platforms.",
    link: "#"
  },
  {
    title: "Digital Marketing Fundamentals",
    issuer: "Google Digital Garage",
    year: "2021",
    description: "The Digital Marketing Fundamentals course by Google teaches core digital marketing skills, including SEO, social media, online advertising, and analytics to boost online business growth.",
    link: "#"
  }
];

export const TESTIMONIALS = [
  {
    name: "Sarah Jenkins",
    role: "CEO, TechFlow",
    quote: "Gaurav transformed our organic presence. We went from 'invisible' to 'industry leader' in 6 months.",
    rating: 5
  },
  {
    name: "Ankit Sharma",
    role: "Founder, Bloomly",
    quote: "His technical SEO audits are mind-blowing. No one else spotted the bugs that were killing our traffic.",
    rating: 5
  }
];

export const SIDE_PROJECTS = [
  {
    title: "Tutorial Video Making",
    text: "Creating engaging and informative tutorial videos for various platforms",
    icon: Video
  },
  {
    title: "Link Building and Guest Posting",
    text: "Building high-quality backlinks through strategic outreach and content placement",
    icon: LinkIcon
  },
  {
    title: "Meta Ads",
    text: "Managing and optimizing social media advertising campaigns",
    icon: Target
  },
  {
    title: "Poster, Booklet and Thumbnail Creations",
    text: "Designing eye-catching visuals for social media and printing",
    icon: Palette
  }
];

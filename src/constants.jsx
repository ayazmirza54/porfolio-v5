// ============ Personal Information ============
export const PERSONAL_INFO = {
    name: "Ayaz Mirza",
    initials: "AM",
    title: "Senior Consultant",
    tagline: "👋 Welcome to my portfolio",
    bio: "Senior Consultant at Wipro with 6+ years of experience in ETL development using Ab Initio ETL tool. Experienced in working with cloud providers like AWS, Azure and GCP.",
    aboutDescription: "Data Engineer with 6+ years of experience in designing, building, and optimizing high-volume ETL pipelines using Ab Initio and SQL. Skilled in automation with Shell scripting and Ansible, data visualization with Power BI, and leveraging Google Cloud Platform (GCP) & AWS for scalable cloud based solutions. Strong background in troubleshooting performance issues, ensuring data quality, and delivering efficient, reliable data workflows.",
    location: "Lucknow, India",
    locationFull: "Software Engineer from Lucknow, India",
    email: "ayazmirza54@gmail.com",
    phone: "+91 9889017774",
    resumeUrl: "/AyazMirzaResume.pdf",
    resumeDownloadName: "Ayaz_Resume.pdf",
    footerText: "© 2026 Ayaz Mirza. Built with ✨ & ❤️",
};

// ============ Navigation Links ============
export const NAV_LINKS = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#work-experience" },
    { label: "Projects", href: "#projects" },
    { label: "Blogs", href: "#blogs" },
    { label: "Contact", href: "#contact" },
];

// ============ Social Links ============
export const SOCIAL_LINKS = [
    {
        platform: "LinkedIn",
        link: "https://www.linkedin.com/in/ayazmirza54",
        username: "ayazmirza54",
    },
    {
        platform: "Github",
        link: "https://github.com/ayazmirza54",
        username: "ayazmirza54",
    },
    {
        platform: "Twitter",
        link: "https://twitter.com/ayazmirza54",
        username: "ayazmirza54",
    },
    {
        platform: "Dev.to",
        link: "https://dev.to/ayazmirza54",
        username: "ayazmirza54",
    },
];

// ============ Stats ============
export const STATS = [
    { label: "Years Experience", value: "6+" },
    { label: "Projects Completed", value: "13+" },
    { label: "Technologies", value: "15+" },
    { label: "Happy Clients", value: "2+" },
];

// ============ Tech Stack ============
export const TECH_STACK = {
    Languages: [
        { name: "JavaScript", icon: "⚡" },
        { name: "HTML5", icon: "🌐" },
        { name: "CSS3", icon: "🎨" },
        { name: "Markdown", icon: "📝" },
        { name: "Shell Script", icon: "💻" },
        { name: "C++", icon: "⚙️" },
        { name: "C", icon: "🔧" },
    ],
    "Frameworks & Libraries": [
        { name: "React", icon: "⚛️" },
        { name: "React Router", icon: "🛣️" },
        { name: "Express.js", icon: "🚂" },
        { name: "Node.js", icon: "📦" },
        { name: "TailwindCSS", icon: "💨" },
        { name: "Bootstrap", icon: "🅱️" },
    ],
    Databases: [
        { name: "MySQL", icon: "🗄️" },
        { name: "PostgreSQL", icon: "🐘" },
    ],
    "Tools & Platforms": [
        { name: "Canva", icon: "🎨" },
        { name: "Figma", icon: "🎯" },
        { name: "Ansible", icon: "🔄" },
        { name: "Notion", icon: "📓" },
        { name: "Git", icon: "🔄" },
        { name: "Ab Initio ETL", icon: "🏭" },
        { name: "Power BI", icon: "📊" },
        { name: "Grafana", icon: "📈" },
        { name: "Gemini AI", icon: "🤖" },
        { name: "Claude AI", icon: "🤖" },
        { name: "ChatGPT", icon: "🤖" },
    ],
};

// ============ Work Experience ============
export const WORK_EXPERIENCE = [
    {
        title: "Senior Consultant",
        company: "Wipro Limited",
        status: "Current",
        duration: "Nov 2019 - Present",
        location: "Greater Noida, India",
        responsibilities: [
            "Worked on Ab Initio ETL tool to process client side information and provide valuable insights",
            "Extensive experience in designing graphs, scheduling jobs through Control Centre",
            "Proficiently scripting Unix shell commands for ETL optimization",
            "Monitoring ETL job execution and addressing issues to minimize delays",
            "Created shell scripts to automate monitoring of critical server metrics",
            "Leveraged Grafana, Control Center, Queryit, and SQLExplorer for operational efficiency",
            "Appointed as L2, providing guidance to L1 teammates",
        ],
    },
    {
        title: "Frontend Web Developer",
        company: "Cosmo Infosolutions Pvt Ltd",
        status: "Completed",
        duration: "June 2019 - Oct 2019",
        location: "Lucknow, India",
        responsibilities: [
            "Front-end developer skilled in HTML, CSS, JavaScript, and ReactJS",
            "Experienced in designing landing pages that capture attention",
            "Focuses on layouts that are visually appealing and easy to navigate",
            "Designs responsive pages that work well on desktop and mobile",
            "Attention to layout, color, and typography for polished appearance",
            "Creates seamless and enjoyable experience for every user",
        ],
    },
];

// ============ Projects: Web/AI ============
export const WEBDEV_AI_PROJECTS = [
    {
        id: 1,
        title: "Text to Content AI",
        description: "Text to Content AI is an AI-powered tool that converts text into content. It uses the Gemini API to generate content based on the text input.",
        image: "p1",
        liveLink: "https://texttocontent.vercel.app/",
        githubLink: "https://github.com/ayazmirza54/text-to-content-ai/",
    },
    {
        id: 2,
        title: "Intellisketch : AI powered drawing tool 🖌️",
        description: "IntelliSketch is an AI-powered drawing app that uses Google Gemini API to interpret and solve mathematical sketches and graphical problems in real-time.",
        image: "p2",
        liveLink: "https://intellisketch.vercel.app/",
        githubLink: "https://github.com/ayazmirza54/intellisketch/",
    },
    {
        id: 3,
        title: "Text/Code Utils.AI",
        description: "Text and Code Utilities: AI-enhanced tool by Google Gemini, offering streamlined text analysis and code generation.",
        image: "p3",
        liveLink: "https://text-code-util-aiprod.vercel.app/",
        githubLink: "https://github.com/ayazmirza54/text-code-util.aiprod/",
    },
    {
        id: 4,
        title: "Chat2pdf using gemini",
        description: "AI-powered app for conversational PDF interaction using Gemini and LangChain.",
        image: "p4",
        liveLink: "https://chat2pdf-using-gemini.streamlit.app/",
        githubLink: "https://github.com/ayazmirza54/chat2pdf-using-gemini",
    },
];

// ============ Projects: DevOps ============
export const DEVOPS_PROJECTS = [
    {
        id: 5,
        title: "📜 UnixBot",
        description: "UnixBot is a chatbot that can be used to chat about unix commands. It uses the Gemini API to generate responses.",
        image: "p5",
        liveLink: "https://unix-bot.streamlit.app/",
        githubLink: "https://github.com/ayazmirza54/unixbot",
    },
    {
        id: 6,
        title: "⚒️ QuerySmith",
        description: "QuerySmith is a chatbot that can be used to generate SQL queries. It uses the Gemini API to generate responses.",
        image: "p6",
        liveLink: "https://query-smith.streamlit.app/",
        githubLink: "https://github.com/ayazmirza54/chat-with-db",
    },
    {
        id: 7,
        title: "EC2 Manager TUI",
        description: "A CLI tool to manage EC2 instances. It uses the AWS SDK for Python to interact with the AWS API.",
        image: "p7",
        liveLink: null,
        githubLink: "https://github.com/ayazmirza54/ec2-manager-tui",
    },
    {
        id: 8,
        title: "📌 Keep Alive EC2 Script",
        description: "This script keeps an EC2 instance alive by pinging it every 10 minutes.",
        image: "p8",
        liveLink: null,
        githubLink: "https://github.com/ayazmirza54/pingservice",
    },
    {
        id: 9,
        title: "System Metrics Logging Script",
        description: "This script logs system metrics (CPU usage and memory usage) to a PostgreSQL database.",
        image: "/system-metrics.png",
        liveLink: null,
        githubLink: "https://github.com/ayazmirza54/system-metrics-monitoring-script",
    },
];

// ============ Projects: Other Noteworthy ============
export const OTHER_PROJECTS = [
    {
        id: 10,
        title: "Studysensie",
        description: "Quiz Generator using Gemini AI API",
        githubLink: "https://github.com/ayazmirza54/studysensei/",
        liveLink: "https://studysensei.vercel.app/",
        technologies: ["React", "TailwindCSS", "Gemini AI API"],
    },
    {
        id: 11,
        title: "Movie-Finder",
        description: "Movie Finder app using the Movie Database API",
        githubLink: "https://github.com/ayazmirza54/movie-finder",
        liveLink: "https://movie-finder-lake-six.vercel.app/",
        technologies: ["JavaScript", "HTML/CSS", "Movie Database API"],
    },
    {
        id: 12,
        title: "Stone-Paper-Scissor-Game",
        description: "Stone Paper Scissor Game using React and TailwindCSS",
        githubLink: null,
        liveLink: "https://rock-paper-scrissors.netlify.app/",
        technologies: ["HTML/CSS", "JavaScript"],
    },
    {
        id: 13,
        title: "Quote-Generator",
        description: "Quote Generator using an external API",
        githubLink: null,
        liveLink: "https://quote-generator-live.netlify.app",
        technologies: ["React", "NodeJS", "Axios"],
    },
];

// ============ Blogs ============
export const BLOGS = [
    {
        title: "Intellisketch : AI powered drawing tool 🖌️",
        preview: "IntelliSketch: Building an AI-Powered Mathematical Sketching App",
        date: "Oct 12, 2024",
        readTime: "5 min read",
        link: "https://dev.to/ayazmirza54/intellisketch-ai-powered-drawing-tool-3i8e",
        platform: "Dev.to",
    },
    {
        title: "Migrating my app from chatgpt API to Gemini AI API",
        preview: "Migrating my app from chatgpt API to Gemini AI API",
        date: "Sept 14, 2024",
        readTime: "4 min read",
        link: "https://dev.to/ayazmirza54/migrating-my-app-from-chatgpt-api-to-gemini-ai-api-557o",
        platform: "Dev.to",
    },
    {
        title: "🤖 chatGPT on loop➰ using babyAGI and AutoGPT",
        preview: "Using babyAGI and AutoGPT to interact with chatGPT on loop",
        date: "Apr 13, 2023",
        readTime: "6 min read",
        link: "https://dev.to/ayazmirza54/chatgpt-on-loop-using-babyagi-and-autogpt-29c8",
        platform: "Dev.to",
    },
    {
        title: "Text and Code Utilities App using OpenAI API",
        preview: "Building a Text and Code Utilities App using OpenAI API",
        date: "Jan 28, 2023",
        readTime: "7 min read",
        link: "https://dev.to/ayazmirza54/text-and-code-utilities-app-using-openai-api-4m13",
        platform: "Dev.to",
    },
];

// ============ Gradient Colors ============
export const GRADIENT_TEXT_COLORS = ["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"];

// ============ Canvas Effect Config ============
export const CANVAS_EFFECT_CONFIG = {
    animationSpeed: 3,
    containerClassName: "bg-black",
    colors: [[255, 255, 255], [255, 255, 255]],
    dotSize: 6,
    opacities: [0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1],
    reverse: false,
};

// ============ Glowing Effect Config ============
export const GLOWING_EFFECT_CONFIG = {
    spread: 50,
    glow: true,
    disabled: false,
    proximity: 80,
    inactiveZone: 0.01,
    borderWidth: 4,
};

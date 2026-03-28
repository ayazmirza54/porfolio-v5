import awsIcon from "@/assets/aws.svg";
import azureIcon from "@/assets/azure.svg";
import gcpIcon from "@/assets/gcp.svg";
import ec2Icon from "@/assets/ec2.svg";
import lambdaIcon from "@/assets/lambda.svg";
import cloudwatchIcon from "@/assets/cloudwatch.svg";
import redshiftIcon from "@/assets/redshift.svg";
import shellIcon from "@/assets/shell.png";
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
        { name: "Shell Script", icon: "", svgIcon: shellIcon },
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
    "Cloud Technologies & Certifications": [
        { name: "AWS", icon: "", svgIcon: awsIcon },
        { name: "Azure", icon: "", svgIcon: azureIcon },
        { name: "GCP", icon: "", svgIcon: gcpIcon },
        { name: "AWS EC2", icon: "", svgIcon: ec2Icon },
        { name: "AWS Lambda", icon: "", svgIcon: lambdaIcon },
        { name: "CloudWatch", icon: "", svgIcon: cloudwatchIcon },
        { name: "Redshift", icon: "", svgIcon: redshiftIcon },
        { name: "Docker", icon: "🐳" },
    ],
};

// ============ Work Experience ============
export const WORK_EXPERIENCE = [
    {
        title: "Data Engineer (Platform Team)",
        company: "Wipro Limited — Aldermore Bank",
        status: "Current",
        duration: "Nov2025 - Present",
        location: "Greater Noida, India",
        responsibilities: [
            "Transitioned into a UK-based financial services client (Aldermore Bank) as a Data Engineer on the Ab Initio Platform team, managing the group data platform end-to-end",
            "Administered and maintained a hybrid infrastructure integrating AWS services (EC2, Redshift, CloudWatch) with core Ab Initio products including Control Center, GDE, Metadata Hub Portal, and Authorization Gateway",
            "Monitored Ab Initio job execution on AWS infrastructure, proactively identifying and resolving pipeline failures to meet banking SLAs",
            "Performed platform administration tasks including OS user provisioning and Ab Initio license key installation and management",
            "Authored Redshift SQL scripts as part of the release management process to promote data artifacts and configurations from UAT to Production environments",
        ],
    },
    {
        title: "Senior Consultant",
        company: "Wipro Limited — Indonesian Telecom Client",
        status: "Completed",
        duration: "Nov 2019 - Oct 2025",
        location: "Greater Noida, India",
        responsibilities: [
            "Developed and optimized Ab Initio ETL pipelines using the Graphical Development Environment (GDE) to process large-scale telecom data and deliver actionable business insights",
            "Designed and scheduled Ab Initio graphs and jobs through Control Center, ensuring reliable pipeline orchestration and SLA adherence",
            "Built operational dashboards in Grafana to visualize key telecom metrics and support proactive monitoring",
            "Automated Splunk log processing using Unix shell scripting, significantly reducing manual log analysis overhead",
            "Implemented auto-restart scripts using Ansible and shell scripting to minimize downtime for critical Ab Initio jobs",
            "Proficiently scripted Unix shell commands for ETL optimization, server metric monitoring, and operational automation",
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
        title: "Draftbuddy",
        description: "DraftBuddy — Your buddy for better drafts and send them over a teams message,a slack ping, an email or a linkedin post",
        image: "p9",
        liveLink: "https://draftbuddyy.vercel.app/",
        githubLink: "https://github.com/ayazmirza54/draftbuddy/",
    },
    {
        id: 2,
        title: "Text to Content AI",
        description: "Text to Content AI is an AI-powered tool that converts text into content. It uses the Gemini API to generate content based on the text input.",
        image: "p1",
        liveLink: "https://texttocontent.vercel.app/",
        githubLink: "https://github.com/ayazmirza54/text-to-content-ai/",
    },
    {
        id: 3,
        title: "Intellisketch : AI powered drawing tool 🖌️",
        description: "IntelliSketch is an AI-powered drawing app that uses Google Gemini API to interpret and solve mathematical sketches and graphical problems in real-time.",
        image: "p2",
        liveLink: "https://intellisketch.vercel.app/",
        githubLink: "https://github.com/ayazmirza54/intellisketch/",
    },
    {
        id: 4,
        title: "Text/Code Utils.AI",
        description: "Text and Code Utilities: AI-enhanced tool by Google Gemini, offering streamlined text analysis and code generation.",
        image: "p3",
        liveLink: "https://text-code-util-aiprod.vercel.app/",
        githubLink: "https://github.com/ayazmirza54/text-code-util.aiprod/",
    },
    {
        id: 5,
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
        id: 6,
        title: "📜 UnixBot",
        description: "UnixBot is a chatbot that can be used to chat about unix commands. It uses the Gemini API to generate responses.",
        image: "p5",
        liveLink: "https://unix-bot.streamlit.app/",
        githubLink: "https://github.com/ayazmirza54/unixbot",
    },
    {
        id: 7,
        title: "⚒️ QuerySmith",
        description: "QuerySmith is a chatbot that can be used to generate SQL queries. It uses the Gemini API to generate responses.",
        image: "p6",
        liveLink: "https://query-smith.streamlit.app/",
        githubLink: "https://github.com/ayazmirza54/chat-with-db",
    },
    {
        id: 8,
        title: "EC2 Manager TUI",
        description: "A CLI tool to manage EC2 instances. It uses the AWS SDK for Python to interact with the AWS API.",
        image: "p7",
        liveLink: null,
        githubLink: "https://github.com/ayazmirza54/ec2-manager-tui",
    },
    {
        id: 9,
        title: "📌 Keep Alive EC2 Script",
        description: "This script keeps an EC2 instance alive by pinging it every 10 minutes.",
        image: "p8",
        liveLink: null,
        githubLink: "https://github.com/ayazmirza54/pingservice",
    },
    {
        id: 10,
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
        id: 11,
        title: "Studysensie",
        description: "Quiz Generator using Gemini AI API",
        githubLink: "https://github.com/ayazmirza54/studysensei/",
        liveLink: "https://studysensei.vercel.app/",
        technologies: ["React", "TailwindCSS", "Gemini AI API"],
    },
    {
        id: 12,
        title: "Movie-Finder",
        description: "Movie Finder app using the Movie Database API",
        githubLink: "https://github.com/ayazmirza54/movie-finder",
        liveLink: "https://movie-finder-lake-six.vercel.app/",
        technologies: ["JavaScript", "HTML/CSS", "Movie Database API"],
    },
    {
        id: 13,
        title: "Stone-Paper-Scissor-Game",
        description: "Stone Paper Scissor Game using React and TailwindCSS",
        githubLink: null,
        liveLink: "https://rock-paper-scrissors.netlify.app/",
        technologies: ["HTML/CSS", "JavaScript"],
    },
    {
        id: 14,
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

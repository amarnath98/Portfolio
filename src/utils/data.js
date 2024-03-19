export const skillsData = [
    {
        title: "Frontend",
        icon: "./assets/images/frontend-icon.png",
        skills: [
            {skill: "HTML5 & CSS", src: "./assets/images/skills/html.png", title: 'HTML',style: 'shadow-green-400',link: '', percentage: "90%"},
            {skill: "JavaScript / TypeScript",src: "./assets/images/skills/javascript.png", title: 'jaascript',style: 'shadow-green-400', percentage: "76%"},
            {skill: "Angular",src: "./assets/images/skills/javascript.png", title: 'angular',style: 'shadow-green-400', percentage: "80%"},
            {skill: "ReactJS",src: "./assets/images/skills/react.png", title: 'react',style: 'shadow-green-400', percentage: "64%"}
        ],
    },
    {
        title: "Backend",
        icon: "./assets/images/backend-icon.png",
        skills: [
            {skill: "ASP.Net", percentage: "80%"},
            {skill: ".Net Core", percentage: "92%"},
            {skill: "SQL", percentage: "76%"},
            {skill: "PostgreSQL", percentage: "64%"}
        ],
    },
    {
        title: "Tools",
        icon: "./assets/images/tools-icon.png",
        skills: [
            {skill: "Git & GitHub", percentage: "90%"},
            {skill: "Visual Studio", percentage: "92%"},
            {skill: "IIS", percentage: "76%"},
            {skill: "Microsoft Azure", percentage: "75%"},
            {skill: "Swagger", percentage: "90%"}
        ],
    },

    {
        title: "Soft Skills",
        icon: "./assets/images/softskills-icon.png",
        skills: [
            {skill: "Problem Solving", percentage: "80%"},
            {skill: "Attention to Detail", percentage: "92%"},
            {skill: "Collaboration", percentage: "76%"},
            // {skill: "Postman", percentage: "64%"}
        ],
    } 
];

export const experience = [
    {
        company: "Elutions Inc",
        title: "Software Engineer",
        date: "July 2023 - Present",
        responsibilities: [
            "Architected and led the execution of scalable, enterprise-level applications using C#, integrating with ASP .Net Core, and SQL Server to construct resilient and performant services, thereby enhancing backend functionality.",
            "Engineered a robust ASP.Net Core API capable of handling a substantial data influx of 40 requests per second, that integrates a FAST API for predictive value retrieval, with 0.5% error rate ensuring seamless communication between the client and the server.",
            "Implemented authentication and authorization mechanisms for secure communication with APIs, such as JWTtokens or OAuth2.",
            "Facilitated efficient team collaboration within Agile framework and code maintainability by enforcing Git strategies with GitHub, conducting thorough code reviews, and standardizing the coding practices, which curbed inconsistency and non-conformity in code development.",
            "Optimized database performance by strategically partitioning oversized tables and implementing a view-based approach for data retrieval, significantly reducing query response times.",
            "Designed and implemented database schemas, tables, views, stored procedures, and triggers to support application requirements.",
            "Pioneered the implementation of load balancing mechanisms to the system infrastructure, enhancing system performance by optimizing resource utilization and ensuring a more resilient, scalable, and uninterrupted service."
        ],
    },

    {
        company: "Imperium Data",
        title: "Application Developer Intern",
        date: "Jan 2023 - May 2023",
        responsibilities: [
            "Developed efficient front-end systems driving complex web applications using React, JavaScript, NPM, HTML, CSS, and ES6.",
            "Built and deployed React application that embeds Power BI into a web application allowing only authenticated employers to view authorised reports.",
            "Designed, developed and deployed React web applications using AWS services such as EC2, S3, RDS, Elastic Load Balancer.",
            "Created automated build and release CI/CD pipelines leveraging Jenkins to deploy react applications to app service and docker.",
            "Implemented internal dashboard in Power BI replacing existing premium software resulting in saving 1000’s of dollars in monthly recurring expenses."
        ],
    },

    
    {
        company: "Tata Consultancy Services",
        title: "Software Engineer",
        date: "July 2019 - July 2021",
        responsibilities: [
            "Worked in a cross-functional hybrid team of 9 members from Microsoft and TCS to create efficient, customised web application solutions using Angular, .NET Core, SQL, Microsoft Azure following Agile methodology.",
            "As a UI developer, implemented several functionalities with Angular Modules, Forms, Components, Events, Router, DOM, HTTP Request.",
            "Rest APIs were designed and developed utilizing .Net Core MVC Framework and incorporating C# features like Collection Framework, Exception Handling, logging, Multi-Threading, and Entity Framework.",
            "Followed Layered architecture to perform CRUD (Create, Read, Update, Delete) operations on ASP.NET Core Web applications, integrating POCO. Applied dependency inversion principle, DRY (Don’t Repeat Yourself), DDD (Domain Driven Design), TDD (Test Driven Design), and various design patterns.",
            "Developed .Net Core components such as Controller, Validator, Resource Mapping using annotations and attributes to handle requests, created custom view templates and conducted Unit and Integration tests employing xUnit and Mocking (Moq).",
            "Established Git repositories, built and deployed web apps in Azure leveraging App Services, Function Apps, Azure DevOps, Key Vault, Blob storage, Azure SQL, and streamlined the process with CI/CD pipelines and other essential cloud services.",
            "Independently orchestrated the transition of the Leaderboard application to the Azure cloud, adopting Platform as a Service (PaaS) model, and effectively utilizing Azure SQL, Data Factory, Azure DevOps, GitHub.",
            "Debugged web services by root cause analysis, addressing issues such as Error Handling and Parsing, validated solutions through testing with Swagger, Postman.",
            "Performed UI and API performance testing, load and regression testing, Identified and addressed performance issues proactively before release while determining the appropriate types of tests needed."
        ],
    },

    {
        company: "Actifio",
        title: "Software Engineer Intern",
        date: "April 2018 - June 2018",
        responsibilities: [
            "Developed an end-to-end application using JavaScript, Angular, CSS, Java, HTML for Robot Framework automation tool that decreases manual testing time by 15%."
        ],
    }

];

// export const links = [ 
//     {
//         id: 1,
//         child: (
//             <>
//                 LinkedIn <FaLinkedin size={30}/>
//             </>
//         ),
//         href: 'https://www.linkedin.com/in/amarnath-pamidi/',
//         style: 'rounded-tr-md'
//     },
//     {
//         id: 2,
//         child: (
//             <>
//                 GitHub <FaGithub size={30}/>
//             </>
//         ),
//         href: 'https://github.com/amarnath98/',
//     },
//     {
//         id: 3,
//         child: (
//             <>
//                 Mail <HiOutlineMail size={30}/>
//             </>
//         ),
//         href: 'mailto:amarnath.pamidi@gmail.com',
//     },
//     {
//         id: 4,
//         child: (
//             <>
//                 Resume <BsFillPersonLinesFill size={30}/>
//             </>
//         ),
//         href: '/assets/files/AmarnathPamidi-Resume.pdf',
//         style: 'rounded-br-md',
//         download: true,
//     },
// ];

// const tech = [
//     {
//         id: 1,
//         src: "/assets/images/c#.jpg",
//         title: 'C#',
//         style: 'shadow-green-400',
//         link: ''
//     },
//     {
//         id: 2,
//         src: microsoftsqlserver,
//         title: 'SQL',
//         style: 'shadow-red-400',
//         link: ''
//     },
//     {
//         id: 3,
//         src: cplus,
//         title: 'C++',
//         style: 'shadow-blue-300',
//         link: ''
//     },
//     {
//         id: 4,
//         src: python,
//         title: 'Python',
//         style: 'shadow-yellow-300',
//         link: ''
//     },
//     {
//         id: 5,
//         src: javascript,
//         title: 'JavaScript',
//         style: 'shadow-yellow-500',
//         link: ''
//     },
//     {
//         id: 6,
//         src: css,
//         title: 'CSS',
//         style: 'shadow-blue-500',
//         link: ''

//     },
//     {
//         id: 7,
//         src: html,
//         title: 'HTML',
//         style: 'shadow-orange-500',
//         link: ''
//     },
//     {
//         id: 8,
//         src: node,
//         title: 'NodeJS',
//         style: 'shadow-lime-600',
//         link: ''
//     },
//     {
//         id: 9,
//         src: reactImage,
//         title: 'React',
//         style: 'shadow-blue-600',
//         link: ''
//     },
//     {
//         id: 10,
//         src: tailwind,
//         title: 'Tailwind',
//         style: 'shadow-sky-400',
//         link: ''
//     },
//     {
//         id: 11,
//         src: github,
//         title: 'GitHub',
//         style: 'shadow-gray-400',
//         link: ''
//     },
//     {
//         id: 12,
//         src: anaconda,
//         title: 'Anaconda',
//         style: 'shadow-green-700',
//         link: ''
//     },
//     {
//         id: 13,
//         src: jupyter,
//         title: 'Jupyter Notebooks',
//         style: 'shadow-orange-300',
//         link: ''
//     },
//     {
//         id: 14,
//         src: powershell,
//         title: 'Powershell',
//         style: 'shadow-blue-400',
//         link: ''
//     },
//     {
//         id: 15,
//         src: tortoisesvn,
//         title: 'Tortoise SVN',
//         style: 'shadow-gray-400',
//         link: ''
//     },
//     {
//         id: 16,
//         src: excel,
//         title: 'Microsoft Excel',
//         style: 'shadow-green-400',
//         link: ''
//     },
//     {
//         id: 17,
//         src: powerautomate,
//         title: 'Microsoft Power Automate',
//         style: 'shadow-cyan-400',
//         link: ''
//     },
//     {
//         id: 18,
//         src: vs,
//         title: 'Microsoft Virtual Studio',
//         style: 'shadow-purple-400',
//         link: ''
//     },
//     {
//         id: 19,
//         src: vscode,
//         title: 'Microsoft Virtual Code',
//         style: 'shadow-blue-400',
//         link: ''
//     },
//     {
//         id: 20,
//         src: chatgpt,
//         title: 'OpenAI and ChatGPT',
//         style: 'shadow-gray-500',
//         link: ''
//     },
//     {
//         id: 21,
//         src: jira,
//         title: 'Jira',
//         style: 'shadow-blue-700',
//         link: ''
//     },
//   ]
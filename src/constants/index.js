export const myProjects = [
  {
    id: 1,
    title: "AI-Powered Fitness Application",
    description:
      "A scalable multi-microservices fitness platform leveraging NLP pipelines for personalized workout plans and asynchronous communication.",
    subDescription: [
      "Architected a scalable multi-microservices platform with a carefully designed stateless authentication flow using JWT and Keycloak to support horizontal scalability.",
      "Integrated Gemini API to generate personalized workout plans using prompt-engineered NLP pipelines and validated response consistency.",
      "Implemented asynchronous communication using RabbitMQ to decouple services and reduce request latency during concurrent traffic by around 50%.",
      "Resolved memory exhaustion by migrating from Docker to Podman, applying per-container memory limits, and enabling lazy initialization to reduce peak RAM usage by nearly 30%.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/fitness-app.jpg",
    tags: [
      {
        id: 1,
        name: "Java",
        path: "/assets/logos/java.gif",
      },
      {
        id: 2,
        name: "Spring Boot",
        path: "/assets/logos/springboot.svg",
      },
      {
        id: 3,
        name: "Podman",
        path: "/assets/logos/podman.svg",
      },
      {
        id: 4,
        name: "Keycloak",
        path: "/assets/logos/keycloak.png",
      },
    ],
  },
  {
    id: 2,
    title: "Cause List Converter",
    description:
      "An AI-powered full-stack pipeline that converts unstructured Indian High Court cause list PDFs into formatted multi-sheet Excel workbooks.",
    subDescription: [
      "Engineered a pipeline extracting 12 structured fields across dynamically detected legal section types with 100% parsing accuracy.",
      "Designed a chunking algorithm using PDFBox that splits PDFs at legal headers, enabling reliable structured extraction via Gemini 2.5 Flash.",
      "Resolved Gemini free-tier rate limiting by implementing a thread-safe round-robin API key pool, cutting average processing time by 40%.",
      "Persisted data to PostgreSQL via Spring Data JPA with Flyway migrations and built a React frontend with live polling and a Recharts dashboard.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/cause-list.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "TypeScript",
        path: "/assets/logos/typescript.png",
      },
      {
        id: 3,
        name: "Java",
        path: "/assets/logos/java.gif",
      },
      {
        id: 4,
        name: "Spring Boot",
        path: "/assets/logos/springboot.svg",
      },
    ],
  },
  {
    id: 3,
    title: "Expense Tracker",
    description:
      "A secure CLI finance manager utilizing advanced cryptography for zero-plaintext binary persistence.",
    subDescription: [
      "Engineered a secure CLI finance manager supporting CRUD operations, substring search, and monthly records.",
      "Architected a zero-plaintext binary persistence layer utilizing AES-256-CBC combined with PBKDF2 (100,000 iterations) and dynamic 16-byte salting.",
      "Resolved critical CLI buffer overflow crashes and plaintext memory leaks by migrating to strictly bounds-checked fgets.",
      "Engineered custom float validation logic to eliminate 100% of malicious input crashes and reduce unprotected memory footprint to 0 bytes.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/expense-tracker.jpg",
    tags: [
      {
        id: 1,
        name: "C",
        path: "/assets/logos/C.svg",
      },
      {
        id: 2,
        name: "AES Encryption",
        path: "/assets/logos/encryption.png",
      },
      {
        id: 3,
        name: "OpenSSL",
        path: "/assets/logos/openssl.svg",
      },
    ],
  },
  // {
  //   id: 4,
  //   title: "C++ Game Engine",
  //   description:
  //     "A lightweight C++ game engine designed for 2D and 3D game development.",
  //   subDescription: [
  //     "Built a powerful rendering engine using OpenGL and C++.",
  //     "Developed a physics engine with collision detection and particle effects.",
  //     "Implemented a scripting system for easy game customization.",
  //     "Optimized performance with multi-threading and efficient memory management.",
  //   ],
  //   href: "",
  //   logo: "",
  //   image: "/assets/projects/game-engine.jpg",
  //   tags: [
  //     {
  //       id: 1,
  //       name: "C++",
  //       path: "/assets/logos/cplusplus.svg",
  //     },
  //     {
  //       id: 2,
  //       name: "C#",
  //       path: "/assets/logos/csharp.svg",
  //     },
  //     {
  //       id: 3,
  //       name: "Git",
  //       path: "/assets/logos/git.svg",
  //     },
  //     {
  //       id: 4,
  //       name: "Microsoft",
  //       path: "/assets/logos/microsoft.svg",
  //     },
  //   ],
  // },
  // {
  //   id: 5,
  //   title: "WordPress Custom Theme",
  //   description:
  //     "A fully customizable WordPress theme optimized for performance and SEO.",
  //   subDescription: [
  //     "Developed a responsive WordPress theme using HTML5, CSS3, and JavaScript.",
  //     "Integrated Tailwind CSS for modern styling and UI enhancements.",
  //     "Optimized SEO and page speed using Vite.js for fast builds.",
  //     "Implemented custom widgets and plugin compatibility for extended functionality.",
  //   ],
  //   href: "",
  //   logo: "",
  //   image: "/assets/projects/wordpress-theme.jpg",
  //   tags: [
  //     {
  //       id: 1,
  //       name: "WordPress",
  //       path: "/assets/logos/wordpress.svg",
  //     },
  //     {
  //       id: 2,
  //       name: "HTML5",
  //       path: "/assets/logos/html5.svg",
  //     },
  //     {
  //       id: 3,
  //       name: "CSS3",
  //       path: "/assets/logos/css3.svg",
  //     },
  //     {
  //       id: 4,
  //       name: "Vite.js",
  //       path: "/assets/logos/vitejs.svg",
  //     },
  //   ],
  // },
  // {
  //   id: 6,
  //   title: "Online Learning Platform",
  //   description:
  //     "A web application that allows users to enroll in courses, watch video lectures, and take quizzes.",
  //   subDescription: [
  //     "Built using Blazor WebAssembly for a seamless SPA experience.",
  //     "Implemented video streaming with Azure Media Services.",
  //     "Added a quiz system with dynamic question generation and real-time grading.",
  //     "Integrated Stripe API for secure payment processing.",
  //   ],
  //   href: "",
  //   logo: "",
  //   image: "/assets/projects/elearning.jpg",
  //   tags: [
  //     {
  //       id: 1,
  //       name: "Blazor",
  //       path: "/assets/logos/blazor.svg",
  //     },
  //     {
  //       id: 2,
  //       name: "Azure",
  //       path: "/assets/logos/azure.svg",
  //     },
  //     {
  //       id: 3,
  //       name: "Stripe",
  //       path: "/assets/logos/stripe.svg",
  //     },
  //     {
  //       id: 4,
  //       name: "TailwindCSS",
  //       path: "/assets/logos/tailwindcss.svg",
  //     },
  //   ],
  // },
];

export const mySocials = [
  {
    name: "X",
    href: "https://x.com/PushkarShinde16",
    icon: "/assets/socials/x.png",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/pushkar-shinde-636973221/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/pushkarshinde__",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "Sergeant",
    job: "National Cadet Corps",
    date: "June 2020 - Aug 2023",
    contents: [
      "Assumed a mentoring role during the CATC (2021) at my unit 3 Maharashtra Engineers Company Nagpur, imparting knowledge on firing principles to Junior Division cadets and delivering a live demonstration of map reading.",
      "Commanded a 10-member team during an army attachment camp at BEG Pune (2022), achieving the accolade of 'The Most Active Team' in recognition of exemplary teamwork and overall performance.",
    ],
  },
  {
    title: "CS Student",
    job: "NIT Allahabad",
    date: "Aug 2024 - June 2027",
    contents: [
      "Pursuing a Master of Computer Applications with a current CPI of 8.15.",
      "Acting as a lead at the Application Club, mentoring junior students and guiding them through skill development and technical challenges.",
    ],
  },
  // {
  //   title: "Freelance Developer",
  //   job: "Self-Employed",
  //   date: "2025-Present",
  //   contents: [
  //     "Created a personal portfolio using Three.js, React, Vite, and WebAPI to showcase technical expertise.",
  //     "Continuously enhancing technical skills and expanding expertise in modern web development and back-end technologies.",
  //   ],
  // },
];
export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];

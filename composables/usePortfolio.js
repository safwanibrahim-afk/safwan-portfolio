export const usePortfolio = async (listedOnly = false) => {
    const portfolio = useState('portfolio', () => [
        {
            id: 1,
            title: 'Fashion Social App',
            lead: 'AI-Powered Social Network & Marketplace',
            type: 'Full-Stack / AI',
            slug: 'fashion-app',
            role: 'Founder & Full-Stack Developer',
            completed: 'In Progress',
            description: `A comprehensive social media and e-commerce platform designed specifically for fashion designers and creators. The application aims to bridge the gap between wardrobe management, outfit inspiration, and creator networking.

The core feature is an AI-driven outfit generator that analyzes a user's personal wardrobe and generates tailored outfit suggestions based on real-time weather, current seasons, specific celebrity styles, and niche fashion genres. Beyond generation, the platform fosters a thriving creator community through a rich social feed for posting videos and images, direct messaging for networking, and a dedicated shopping center for fashion entrepreneurs to monetize their designs.`,
            cover: '/images/project-fashion.png',
            featuredImage: '/images/project-fashion.png',
            videoWebm: '', 
            videoMP4: '',
            listed: true,
            pageContent: [] 
        },
        {
            id: 2,
            title: 'Study Session',
            lead: 'Full-Stack Student Matching Platform',
            type: 'AWS / Backend',
            slug: 'study-session',
            role: 'Full-Stack Developer',
            completed: '2025',
            description: `The Study Groups platform is a web-based application designed to address the inefficiency of peer-to-peer learning connections in academic environments. This system aims to enhance collaborative learning by intelligently matching students across different course sections and institutions based on shared courses, learning preferences, academic goals, and availability. The primary objective is to create a supportive academic community, improving learning outcomes through structured study group coordination.

The design encompasses a user-friendly interface with core components including user registration, intelligent matching algorithms, group scheduling, profile management, and integrated communication tools. Key features include search and filtering capabilities, integration with calendar applications, and support for both physical and virtual meeting spaces.

The system leverages modern web development frameworks to ensure responsive design across desktop and mobile devices, supported by a robust backend database architecture. The architecture is designed for scalability, supporting growth from individual institutional deployment to inter-institutional collaboration. Security measures protect user data, while interoperability with institutional systems and external tools ensures seamless functionality.`,
            cover: '/images/project-study.jpg',
            featuredImage: '/images/project-study.jpg',
            videoWebm: '',
            videoMP4: '',
            listed: true,
            pageContent: []
        },
        {
            id: 3,
            title: 'Airline Management',
            lead: 'C++ Object-Oriented System',
            type: 'C++ / Data Structures',
            slug: 'airline-management',
            role: 'Backend Engineer',
            completed: '2025',
            description: `Engineered a comprehensive C++ application applying object-oriented design patterns and modular classes to streamline passenger management and flight logistics.

The system features a custom-built linked list data structure designed from scratch to optimize flight route management, ensuring efficient memory usage and fast traversal times for complex routes. Additionally, the application implements robust error handling covering 15+ edge cases alongside comprehensive input validation to prevent system crashes and ensure data integrity during user interaction.`,
            cover: '/images/project-airline.jpg',
            featuredImage: '/images/project-airline.jpg',
            videoWebm: '',
            videoMP4: '',
            listed: true,
            pageContent: []
        }
    ]);

    if (listedOnly) {
        return ref(portfolio.value.filter(item => item["listed"]));
    }
    return portfolio;
}
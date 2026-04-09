export const skills = [
    { icon: 'fab fa-html5', name: 'HTML5' },
    { icon: 'fab fa-css3-alt', name: 'CSS3' },
    { icon: 'fab fa-js-square', name: 'JavaScript' },
    { icon: 'fab fa-node-js', name: 'Node.js' },
    { icon: 'fab fa-react', name: 'React' },
    { icon: 'fab fa-git-alt', name: 'Git' },
    { icon: 'fab fa-github', name: 'Github' },
    { icon: 'fab fa-java', name: 'Java' },
    { icon: 'fas fa-code', name: 'Svelte' },
    { icon: 'fab fa-docker', name: 'Docker' },
    { icon: 'devicon-csharp-plain colored', name: 'C#' },
    { icon: 'fas fa-desktop', name: 'WPF' },
    { icon: 'fas fa-mobile-alt', name: 'Kotlin' }
];

export const experiences = [
    {
        icon: 'fas fa-globe',
        title: 'Website Development',
        description: 'Creating responsive and modern web applications'
    },
    {
        icon: 'fas fa-mobile-alt',
        title: 'App Development',
        description: 'Building feature-rich mobile and desktop applications'
    },
    {
        icon: 'fas fa-server',
        title: 'Backend & Hosting',
        description: 'Server configuration and cloud deployment solutions'
    }
];

export const stats = [
    { number: '10', suffix: '+', label: 'Projects' },
    { number: '8.91', suffix: '', label: 'Current GPA' },
    { number: 'B2', suffix: '', label: 'English Skills' }
];

export const projects = [
    {
        id: 1,
        title: 'Programming Forum & Online Judge',
        description:
            'A programming platform built on a client-server model, with a structured backend and separated AI and judging services for handling code execution and intelligent features',
        role: 'Full-Stack Developer',
        image: 'images/project/project1.png',
        alt: 'Programming Forum & Online Judge',
        technologies: ['Svelte', 'Node.js', 'PostgreSQL', 'Docker', 'Python'],
        github: '#',
        demo: '#'
    },
    {
        id: 2,
        title: 'Wedding Management App',
        description:
            'A desktop system for managing wedding operations, built with a simple two-tier architecture to handle bookings, services, food, and reporting efficiently.',
        role: 'Full-Stack Developer',
        image: 'images/project/project2.png',
        alt: 'Wedding Management App',
        technologies: ['WPF', 'C#', 'MySQL', 'Entity Framework'],
        github: '#',
        demo: '#'
    },
    {
        id: 3,
        title: 'Chatting App',
        description:
            'A real-time messaging app using a cloud-based architecture, focusing on instant communication and synchronized data across users.',
        role: 'Developer',
        image: 'images/project/project3.png',
        alt: 'Chatting App',
        technologies: ['Kotlin', 'Firebase', 'Android Studio'],
        github: '#',
        demo: '#'
    }
];

export const videos = [
    {
        id: 1,
        title: 'IT008 Circuit Simulation Demo',
        description: 'Electrical circuit simulation application',
        embedUrl: 'https://www.youtube.com/embed/trLv04DJvjI?si=qFAdimmMVyPTT649"'
    },
    {
        id: 2,
        title: 'Project #2 Demo',
        description: 'Technical deep dive into architecture and coding decisions',
        embedUrl: ''
    },
    {
        id: 3,
        title: 'Project #3 Demo',
        description: 'User experience showcase and live demonstration',
        embedUrl: ''
    }
];

export const navigation = [
    { label: 'Home', href: '#home', page: 'index.html' },
    { label: 'About', href: '#about', page: 'index.html' },
    { label: 'Projects', href: 'projects.html', page: 'projects.html' },
    { label: 'Contacts', href: '#contact', page: 'index.html' }
];

export const socialLinks = [
    {
        icon: 'fab fa-github',
        title: 'GitHub',
        url: '#'
    },
    {
        icon: 'fab fa-linkedin',
        title: 'LinkedIn',
        url: '#'
    },
    {
        icon: 'fab fa-twitter',
        title: 'Twitter',
        url: '#'
    },
    {
        icon: 'fas fa-envelope',
        title: 'Email',
        url: '#'
    }
];

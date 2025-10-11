export interface Project {
    title: string;
    description: string
    technologies: string[];
    githubLink?: string; // Make optional
    demoLink?: string; // Make optional
    image: string;
}

export interface Blog {
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    slug: string;
}
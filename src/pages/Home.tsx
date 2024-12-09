import {
    ArrowRight, Brain, Users,
    Building2, GraduationCap, Shield,
    ExternalLink, Presentation
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './styles/pages.css';
import './styles/Home.css';

// Sample data for upcoming workshops
const upcomingWorkshops = [
    {
        title: "Introduction to AI in Ecological Research",
        date: "Winter 2025",
        type: "Workshop",
        capacity: "15 participants",
        status: "Registration Closed - Coming Soon"
    },
    {
        title: "Introduction to AI in Population Genetics",
        date: "Winter 2025",
        type: "Seminar",
        capacity: "15 participants",
        status: "Registration Closed - Coming Soon"
    }
];

const Home = () => {
    return (
        <div className="page-container">
            {/* Hero Section */}
            <header className="hero">
                <div className="max-w-4xl mx-auto px-4">
                    <h1 className="hero-title animate-fade-in">
                        Helping biologists use AI to explore and protect the natural world
                    </h1>
                    <p className="hero-description animate-fade-in [animation-delay:200ms]">
                        Join our upcoming workshops and be part of the first wave of biologists
                        bridging the gap between natural sciences and artificial intelligence.
                    </p>
                    <div className="flex justify-center gap-4 animate-fade-in [animation-delay:400ms]">
                        <Link
                            to="/workshops"
                            className="btn-base btn-primary"
                        >
                            View Upcoming Workshops <Presentation size={20}/>
                        </Link>
                        <Link
                            to="/about"
                            className="btn-base btn-secondary"
                        >
                            Learn More <ArrowRight size={20}/>
                        </Link>
                    </div>
                </div>
            </header>

            {/* Upcoming Programs Section */}
            <section className="section section-alt">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl font-fraunces font-bold text-center text-primary-dark mb-4 animate-fade-in">
                        Launching Spring 2025
                    </h2>
                    <p className="text-center font-inter text-text-muted mb-12 max-w-2xl mx-auto animate-fade-in [animation-delay:200ms]">
                        Be among the first to participate in our hands-on workshops
                    </p>
                    <div className="grid md:grid-cols-2 gap-8">
                        {upcomingWorkshops.map((workshop, index) => (
                            <div
                                key={workshop.title}
                                className={`program-card animate-fade-in`}
                                style={{ animationDelay: `${(index + 2) * 200}ms` }}
                            >
                                <div className="program-type">
                                    {workshop.type} • {workshop.date}
                                </div>
                                <h3 className="program-title">
                                    {workshop.title}
                                </h3>
                                <div className="program-details">
                                    {workshop.capacity}
                                </div>
                                <div className="program-status">
                                    {workshop.status}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Approach */}
            <section className="section">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl font-fraunces font-bold text-center text-primary-dark mb-16 animate-fade-in">
                        Our Approach
                    </h2>
                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            {
                                icon: Brain,
                                title: "Field-Specific Learning",
                                description: "Resources tailored to biological research contexts—from fieldwork to lab analysis.",
                                example: "Hands-on workshops for practical applications"
                            },
                            {
                                icon: Shield,
                                title: "Responsible AI Practice",
                                description: "Focus on ethical considerations, bias awareness, and research integrity.",
                                example: "Ethics-first curriculum design"
                            },
                            {
                                icon: Users,
                                title: "Community Building",
                                description: "Connect with fellow researchers while building practical AI skills.",
                                example: "Interactive workshops and discussions"
                            }
                        ].map(({icon: Icon, title, description, example}, index) => (
                            <div
                                key={title}
                                className="approach-card animate-fade-in"
                                style={{ animationDelay: `${(index + 1) * 200}ms` }}
                            >
                                <div className="approach-icon">
                                    <Icon className="text-primary-dark" size={32}/>
                                </div>
                                <h3 className="approach-title">{title}</h3>
                                <p className="approach-description">{description}</p>
                                <div className="text-sm font-inter text-text-muted">
                                    {example}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Learning Paths */}
            <section className="section section-alt">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl font-fraunces font-bold text-center text-primary-dark mb-4 animate-fade-in">
                        Find Your Learning Path
                    </h2>
                    <p className="text-center font-inter text-text-muted mb-12 max-w-2xl mx-auto animate-fade-in [animation-delay:200ms]">
                        Resources and workshops tailored to your experience level
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: GraduationCap,
                                title: "Students & Early Career",
                                description: "Start your journey in applying AI to biological research",
                                features: ["Foundational concepts", "Hands-on tutorials", "Beginner-friendly workshops"],
                                path: "/paths/early-career"
                            },
                            {
                                icon: Brain,
                                title: "Researchers & Faculty",
                                description: "Integrate AI methods into your research and teaching",
                                features: ["Research applications", "Teaching resources", "Advanced workshops"],
                                path: "/paths/researchers"
                            },
                            {
                                icon: Building2,
                                title: "Institutions",
                                description: "Develop AI literacy programs at your organization",
                                features: ["Program planning", "Curriculum design", "Implementation support"],
                                path: "/paths/institutions"
                            }
                        ].map(({icon: Icon, title, description, features, path}, index) => (
                            <Link
                                key={path}
                                to={path}
                                className="path-card hover-lift animate-fade-in"
                                style={{ animationDelay: `${(index + 2) * 200}ms` }}
                            >
                                <Icon className="text-primary-dark mb-6" size={32}/>
                                <h3 className="path-title">{title}</h3>
                                <p className="path-description">{description}</p>
                                <ul className="path-features">
                                    {features.map((feature) => (
                                        <li key={feature} className="mb-1">• {feature}</li>
                                    ))}
                                </ul>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="cta-section animate-fade-in">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="cta-title">
                        Join Our Initial Programs
                    </h2>
                    <p className="cta-description max-w-2xl mx-auto">
                        Be part of our founding cohort as we launch our first workshops
                        designed specifically for biological sciences.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link
                            to="/workshops"
                            className="btn-base cta-button-light"
                        >
                            View Workshops <ArrowRight size={24}/>
                        </Link>
                        <Link
                            to="/about"
                            className="btn-base cta-button-outline"
                        >
                            About Us <ExternalLink size={24}/>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
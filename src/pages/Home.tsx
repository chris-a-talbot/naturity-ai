import {
    ArrowRight, Sprout, Brain, Users, School,
    Building2, GraduationCap, Shield, Instagram,
    Twitter, Github, ExternalLink, BookOpen,
    Library, Presentation
} from 'lucide-react';
import { Link } from 'react-router-dom';
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
        <div className="min-h-screen bg-gradient-to-b from-background-alt to-background">
            {/* Hero Section */}
            <header className="mx-auto py-24 text-center animate-fade-in">
                <div className="max-w-4xl mx-auto px-4">
                    <h1 className="text-6xl font-fraunces font-bold text-primary-dark mb-8">
                        Helping biologists use AI to explore and protect the natural world
                    </h1>
                    <p className="text-xl mb-8 text-text-muted">
                        Join our upcoming workshops and be part of the first wave of biologists
                        bridging the gap between natural sciences and artificial intelligence.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link
                            to="/workshops"
                            className="bg-primary hover:bg-primary-light text-white px-6 py-3 rounded-lg inline-flex items-center gap-2 text-lg font-familjen font-medium"
                        >
                            View Upcoming Workshops <Presentation size={20}/>
                        </Link>
                        <Link
                            to="/about"
                            className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-lg inline-flex items-center gap-2 text-lg font-familjen font-medium transition-colors"
                        >
                            Learn More <ArrowRight size={20}/>
                        </Link>
                    </div>
                </div>
            </header>

            {/* Upcoming Programs Section */}
            <section className="py-20 bg-background-alt">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl font-fraunces font-bold text-center text-primary-dark mb-4">
                        Launching Spring 2025
                    </h2>
                    <p className="text-center font-inter text-text-muted mb-12 max-w-2xl mx-auto">
                        Be among the first to participate in our hands-on workshops
                    </p>
                    <div className="grid md:grid-cols-2 gap-8">
                        {upcomingWorkshops.map((workshop, index) => (
                            <div
                                key={workshop.title}
                                className={`bg-background rounded-xl p-6 shadow-sm animate-fade-in delay-${index + 1}`}
                            >
                                <div className="mb-2 text-accent-dark font-familjen">
                                    {workshop.type} • {workshop.date}
                                </div>
                                <h3 className="text-xl font-familjen font-semibold mb-3 text-primary-dark">
                                    {workshop.title}
                                </h3>
                                <div className="text-text-muted font-inter mb-2">
                                    {workshop.capacity}
                                </div>
                                <div className="text-primary font-inter font-medium">
                                    {workshop.status}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Approach */}
            <section className="py-20 bg-background">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl font-fraunces font-bold text-center text-primary-dark mb-16">
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
                                className={`p-8 bg-background rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 animate-fade-in delay-${index + 1}`}
                            >
                                <div className="w-16 h-16 mb-6 bg-accent rounded-full flex items-center justify-center">
                                    <Icon className="text-primary-dark" size={32}/>
                                </div>
                                <h3 className="text-2xl font-familjen font-semibold mb-4 text-primary-dark">{title}</h3>
                                <p className="text-text font-inter mb-4">{description}</p>
                                <div className="text-sm font-inter text-text-muted">
                                    {example}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Learning Paths */}
            <section className="py-20 bg-background-alt">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl font-fraunces font-bold text-center text-primary-dark mb-4">
                        Find Your Learning Path
                    </h2>
                    <p className="text-center font-inter text-text-muted mb-12 max-w-2xl mx-auto">
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
                                className={`block p-8 rounded-xl bg-background shadow-sm hover:shadow-md hover:-translate-y-1 transition-all animate-fade-in delay-${index + 1}`}
                            >
                                <Icon className="text-primary-dark mb-6" size={32}/>
                                <h3 className="text-xl font-familjen font-semibold mb-4 text-primary-dark">{title}</h3>
                                <p className="text-text font-inter mb-4">{description}</p>
                                <ul className="text-sm text-text-muted font-inter">
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
            <section className="py-24 bg-primary-dark text-text-light">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-fraunces font-bold mb-8">
                        Join Our Initial Programs
                    </h2>
                    <p className="text-xl font-inter opacity-90 mb-10 max-w-2xl mx-auto">
                        Be part of our founding cohort as we launch our first workshops
                        designed specifically for biological sciences.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link
                            to="/workshops"
                            className="bg-text-light text-primary-dark px-8 py-4 rounded-lg inline-flex items-center gap-2 text-lg font-familjen font-medium hover:bg-accent-light"
                        >
                            View Workshops <ArrowRight size={24}/>
                        </Link>
                        <Link
                            to="/about"
                            className="border-2 border-text-light text-text-light px-8 py-4 rounded-lg inline-flex items-center gap-2 text-lg font-familjen font-medium hover:bg-text-light hover:text-primary-dark transition-colors"
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
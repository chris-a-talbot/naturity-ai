import { ArrowRight, Sprout, Brain, Users, School, Building2, GraduationCap, Shield, Instagram, Twitter, Github } from 'lucide-react';import { Link } from 'react-router-dom';
import './styles/Home.css';

const Home = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-background-alt to-background">
            {/* Hero Section */}
            <header className="mx-auto py-24 text-center animate-fade-in">
                <div className="max-w-3xl mx-auto px-4">
                    <h1 className="text-5xl font-bold text-primary-dark mb-8">
                        Ethical AI for Natural Sciences
                    </h1>
                    <p className="text-xl text-text mb-6">
                        From high school students to seasoned researchers, we're empowering biologists with responsible
                        AI literacy for productivity and innovation
                    </p>
                    <Link
                        to="/learn"
                        className="hero-link bg-primary text-text-light px-8 py-4 rounded-lg inline-flex items-center gap-2 text-lg font-medium"
                    >
                        Start Your Journey <ArrowRight size={20}/>
                    </Link>
                </div>
            </header>

            {/* Features Section */}
            <section className="py-20 bg-background">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-primary-dark mb-16 animate-fade-in">
                        Our Core Values
                    </h2>
                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            {
                                icon: Sprout,
                                title: "Domain Expertise",
                                description: "Specialized resources for ecology, evolutionary biology, and other natural sciences"
                            },
                            {
                                icon: Shield,
                                title: "Ethical AI Practice",
                                description: "Promoting responsible AI use that reduces bias, prevents errors, and enhances research integrity"
                            },
                            {
                                icon: Users,
                                title: "Inclusive Learning",
                                description: "Making AI literacy accessible to everyone in biology, from students to senior researchers"
                            }
                        ].map(({icon: Icon, title, description}, index) => (
                            <div
                                key={title}
                                className={`feature-card p-8 text-center bg-background rounded-xl animate-fade-in delay-${index + 1}`}
                            >
                                <div
                                    className="feature-icon-container w-16 h-16 mx-auto mb-6 bg-accent rounded-full flex items-center justify-center">
                                    <Icon className="text-primary-dark" size={32}/>
                                </div>
                                <h3 className="text-2xl font-semibold mb-4 text-primary-dark">{title}</h3>
                                <p className="text-text">{description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Resources Section */}
            <section className="py-20 bg-background-alt">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-primary-dark mb-8 animate-fade-in">
                        Resources for Every Stage
                    </h2>
                    <p className="text-center text-text-muted mb-16 max-w-2xl mx-auto">
                        Whether you're just starting out or leading groundbreaking research, we provide tailored
                        resources for your journey in biological sciences
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: GraduationCap,
                                title: "Early Learning",
                                description: "Foundational AI concepts for high school and undergraduate biology students",
                                path: "/resources/students"
                            },
                            {
                                icon: School,
                                title: "Educational Tools",
                                description: "Ethical AI integration guides and curriculum resources for biology educators",
                                path: "/resources/educators"
                            },
                            {
                                icon: Brain,
                                title: "Research Excellence",
                                description: "Advanced AI applications in ecology and evolutionary biology research",
                                path: "/resources/researchers"
                            },
                            {
                                icon: Building2,
                                title: "Institutional Support",
                                description: "Supporting organizations in implementing ethical AI practices in biological research",
                                path: "/resources/organizations"
                            }
                        ].map(({icon: Icon, title, description, path}, index) => (
                            <Link
                                key={path}
                                to={path}
                                className={`resource-card p-8 rounded-xl bg-background animate-fade-in delay-${index + 1}`}
                            >
                                <Icon className="text-primary-dark mb-6" size={32}/>
                                <h3 className="text-xl font-semibold mb-4 text-primary-dark">{title}</h3>
                                <p className="text-text">{description}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-24 bg-primary-dark text-text-light">
                <div className="max-w-4xl mx-auto px-4 text-center animate-fade-in">
                    <h2 className="text-4xl font-bold mb-8">
                        Shape the Future of Biological Research
                    </h2>
                    <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                        Join our community dedicated to advancing ethical AI practices in ecology and evolutionary
                        biology. Together, we can enhance research while ensuring accuracy, reducing bias, and promoting
                        diversity.
                    </p>
                    <Link
                        to="/learn"
                        className="cta-button bg-text-light text-primary-dark px-8 py-4 rounded-lg inline-flex items-center gap-2 text-lg font-medium"
                    >
                        Join Our Community <ArrowRight size={24}/>
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-background-dark text-text-light py-12">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-12">
                        <div>
                            <h3 className="text-xl font-semibold mb-4">NaturityAI</h3>
                            <p className="opacity-80">
                                Advancing ethical AI practices in natural sciences
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Contact</h3>
                            <p className="opacity-80">info@naturity.ai</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                            <div className="flex space-x-6">
                                <a
                                    href="https://www.instagram.com/naturityai"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="footer-link opacity-80 hover:opacity-100 transition-opacity"
                                    aria-label="Follow us on Instagram"
                                >
                                    <Instagram size={24}/>
                                </a>
                                <a
                                    href="https://x.com/naturityai"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="footer-link opacity-80 hover:opacity-100 transition-opacity"
                                    aria-label="Follow us on X (formerly Twitter)"
                                >
                                    <Twitter size={24}/>
                                </a>
                                <a
                                    href="https://github.com/naturityai"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="footer-link opacity-80 hover:opacity-100 transition-opacity"
                                    aria-label="Visit our GitHub"
                                >
                                    <Github size={24}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;
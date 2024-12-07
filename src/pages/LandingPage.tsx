import { ArrowRight, Sprout, Brain, Users, BookOpen } from 'lucide-react';

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-background-alt to-background">
            {/* Hero Section */}
            <header className="mx-auto py-16 text-center">
                <div className="max-w-3xl mx-auto px-4">
                    <h1 className="text-5xl font-bold text-primary-dark mb-6">
                        Where AI Meets Natural Science
                    </h1>
                    <p className="text-xl text-text-muted mb-8">
                        Empowering biologists, ecologists, and researchers with AI literacy for the next generation of scientific discovery
                    </p>
                    <button className="bg-primary text-background px-6 py-3 rounded-lg hover:bg-primary-dark inline-flex items-center gap-2">
                        Get Started <ArrowRight size={20} />
                    </button>
                </div>
            </header>

            {/* Features Section */}
            <section className="py-16 bg-background">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-text mb-12">
                        Why Choose NaturityAI?
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-6 text-center">
                            <div className="w-16 h-16 mx-auto mb-4 bg-accent-light rounded-full flex items-center justify-center">
                                <Sprout className="text-primary" size={32} />
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-text">Ecological Focus</h3>
                            <p className="text-text-muted">
                                Specialized AI tools and training tailored for biological and ecological research
                            </p>
                        </div>
                        <div className="p-6 text-center">
                            <div className="w-16 h-16 mx-auto mb-4 bg-accent-light rounded-full flex items-center justify-center">
                                <Brain className="text-primary" size={32} />
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-text">AI Literacy</h3>
                            <p className="text-text-muted">
                                Comprehensive education from basic concepts to advanced applications in natural sciences
                            </p>
                        </div>
                        <div className="p-6 text-center">
                            <div className="w-16 h-16 mx-auto mb-4 bg-accent-light rounded-full flex items-center justify-center">
                                <Users className="text-primary" size={32} />
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-text">Community</h3>
                            <p className="text-text-muted">
                                Connect with fellow researchers and students passionate about AI in biology
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Programs Section */}
            <section className="py-16 bg-background-alt">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-text mb-12">
                        Our Programs
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-background p-6 rounded-lg shadow-md">
                            <BookOpen className="text-primary mb-4" size={32} />
                            <h3 className="text-xl font-semibold mb-2 text-text">For Students</h3>
                            <ul className="space-y-2 text-text-muted">
                                <li>• Introduction to AI in Biology</li>
                                <li>• Hands-on Projects</li>
                                <li>• Mentorship Opportunities</li>
                            </ul>
                        </div>
                        <div className="bg-background p-6 rounded-lg shadow-md">
                            <Brain className="text-primary mb-4" size={32} />
                            <h3 className="text-xl font-semibold mb-2 text-text">For Researchers</h3>
                            <ul className="space-y-2 text-text-muted">
                                <li>• Advanced AI Applications</li>
                                <li>• Research Collaboration</li>
                                <li>• Tool Development</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-text mb-6">
                        Join the Future of Biological Research
                    </h2>
                    <p className="text-xl text-text-muted mb-8 max-w-2xl mx-auto">
                        Whether you're a high school student or an established researcher, NaturityAI has the resources you need to integrate AI into your biological studies.
                    </p>
                    <button className="bg-primary text-background px-8 py-4 rounded-lg hover:bg-primary-dark inline-flex items-center gap-2 text-lg">
                        Start Learning Today <ArrowRight size={24} />
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-primary-dark text-background py-8">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-lg font-semibold mb-4">NaturityAI</h3>
                            <p className="text-accent-light">
                                Bridging the gap between artificial intelligence and natural sciences
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Contact</h3>
                            <p className="text-accent-light">info@naturityai.org</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                            <div className="space-x-4">
                                <a href="#" className="text-accent-light hover:text-background">Twitter</a>
                                <a href="#" className="text-accent-light hover:text-background">LinkedIn</a>
                                <a href="#" className="text-accent-light hover:text-background">GitHub</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
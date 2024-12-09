import {
    Mail,
    Github,
    Scale,
    Rocket
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './styles/pages.css';
import './styles/About.css';

const About = () => {
    return (
        <div className="page-container">
            {/* Hero Section */}
            <header className="about-hero">
                <div className="max-w-4xl mx-auto px-4">
                    <h1 className="about-hero-title animate-fade-in">
                        From DNA to Deep Learning
                    </h1>
                    <p className="about-hero-description animate-fade-in delay-1">
                        Empowering biologists to innovate with AI while ensuring ethical and sustainable practices
                    </p>
                </div>
            </header>

            {/* Vision Section */}
            <section className="vision-section">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="vision-title">
                        Our Vision
                    </h2>
                    <div className="vision-content">
                        <p className="mb-6">
                            The integration of AI in biological sciences presents both unprecedented
                            opportunities and significant responsibilities. As a computational biologist
                            at the University of Michigan, I've experienced firsthand how AI can
                            dramatically accelerate research, enhance learning, and drive innovation.
                        </p>
                        <p className="mb-6">
                            However, this power must be balanced with responsibility. The rapid adoption
                            of AI tools without proper understanding can perpetuate systemic biases,
                            compromise research integrity, and overlook environmental impacts. True AI
                            literacy in biology means mastering both sides of this equation.
                        </p>
                        <p className="mb-6">
                            This is why NaturityAI exists—to help biologists harness AI's full potential
                            while building the critical understanding needed to use it ethically and
                            effectively. Our approach combines practical skill development with a strong
                            foundation in responsible AI practices.
                        </p>
                    </div>
                </div>
            </section>

            {/* Dual Approach Section */}
            <section className="approach-section">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="approach-header">
                        Our Dual Approach
                    </h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Innovation Side */}
                        <div className="approach-side">
                            <div className="approach-icon-header">
                                <Rocket className="w-16 h-16 text-primary-dark mx-auto mb-4"/>
                                <h3 className="approach-side-title">
                                    Accelerating Innovation
                                </h3>
                            </div>
                            <div className="space-y-6">
                                <div className="approach-item">
                                    <h4 className="approach-item-title">
                                        Enhanced Productivity
                                    </h4>
                                    <p className="approach-item-description">
                                        Streamline research workflows and accelerate discovery through
                                        AI-powered tools and automation
                                    </p>
                                </div>
                                <div className="approach-item">
                                    <h4 className="approach-item-title">
                                        Faster Learning
                                    </h4>
                                    <p className="approach-item-description">
                                        Leverage AI to enhance understanding and master new concepts
                                        more efficiently
                                    </p>
                                </div>
                                <div className="approach-item">
                                    <h4 className="approach-item-title">
                                        Advanced Analysis
                                    </h4>
                                    <p className="approach-item-description">
                                        Unlock deeper insights from biological data through
                                        AI-enhanced analysis methods
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Responsibility Side */}
                        <div className="approach-side">
                            <div className="approach-icon-header">
                                <Scale className="w-16 h-16 text-primary-dark mx-auto mb-4"/>
                                <h3 className="approach-side-title">
                                    Ensuring Responsibility
                                </h3>
                            </div>
                            <div className="space-y-6">
                                <div className="approach-item">
                                    <h4 className="approach-item-title">
                                        Ethical Practice
                                    </h4>
                                    <p className="approach-item-description">
                                        Develop frameworks to prevent bias and ensure inclusive,
                                        equitable research practices
                                    </p>
                                </div>
                                <div className="approach-item">
                                    <h4 className="approach-item-title">
                                        Environmental Impact
                                    </h4>
                                    <p className="approach-item-description">
                                        Prioritize sustainable AI practices that support environmental
                                        conservation goals
                                    </p>
                                </div>
                                <div className="approach-item">
                                    <h4 className="approach-item-title">
                                        Academic Integrity
                                    </h4>
                                    <p className="approach-item-description">
                                        Maintain rigorous scientific standards while integrating
                                        AI-powered methods
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Section */}
            <section className="leadership-section">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="leadership-title">
                        Leadership
                    </h2>
                    <div className="max-w-2xl mx-auto">
                        <div className="leader-card">
                            <img
                                src="/api/placeholder/400/400"
                                alt="Chris Talbot"
                                className="leader-image"
                            />
                            <h3 className="leader-name">
                                Chris Talbot
                            </h3>
                            <p className="leader-role">Founder & CEO</p>
                            <div className="leader-bio">
                                <p>
                                    Computational biologist specializing in population genetics at the
                                    University of Michigan. B.S. in Ecology & Evolutionary Biology.
                                </p>
                                <p>
                                    Passionate about helping fellow scientists harness AI's potential
                                    while building the critical understanding needed for ethical and
                                    effective implementation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="contact-section">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="contact-title">
                        Get in Touch
                    </h2>
                    <p className="contact-description">
                        Let's discuss how to advance your research with AI while maintaining ethical excellence
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <a
                            href="mailto:chris@naturity.ai"
                            className="contact-button contact-button-primary"
                        >
                            <Mail size={20}/> Email Chris
                        </a>
                        <a
                            href="https://github.com/NaturityAI"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-button contact-button-secondary"
                        >
                            <Github size={20}/> GitHub
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
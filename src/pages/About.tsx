import {
    Dna, Shield, Scale, Mail,
    Github, Users, GraduationCap,
    LineChart, Database, Rocket
} from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-background-alt to-background">
            {/* Hero Section */}
            <header className="mx-auto py-24 text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h1 className="text-6xl font-fraunces font-bold text-primary-dark mb-8">
                        From DNA to Deep Learning
                    </h1>
                    <p className="text-xl mb-8 text-text-muted font-inter">
                        Empowering biologists to innovate with AI while ensuring ethical and sustainable practices
                    </p>
                </div>
            </header>

            {/* Vision Section */}
            <section className="py-20 bg-background">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-4xl font-fraunces font-bold text-primary-dark mb-8">
                        Our Vision
                    </h2>
                    <div className="prose prose-lg text-text font-inter">
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
            <section className="py-20 bg-background-alt">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl font-fraunces font-bold text-center text-primary-dark mb-16">
                        Our Dual Approach
                    </h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Innovation Side */}
                        <div className="space-y-8">
                            <div className="text-center mb-12">
                                <Rocket className="w-16 h-16 text-primary-dark mx-auto mb-4"/>
                                <h3 className="text-2xl font-familjen font-semibold text-primary-dark">
                                    Accelerating Innovation
                                </h3>
                            </div>
                            <div className="space-y-6">
                                <div className="p-6 bg-background rounded-xl shadow-sm">
                                    <h4 className="font-familjen font-semibold mb-2 text-primary-dark">
                                        Enhanced Productivity
                                    </h4>
                                    <p className="text-text font-inter">
                                        Streamline research workflows and accelerate discovery through
                                        AI-powered tools and automation
                                    </p>
                                </div>
                                <div className="p-6 bg-background rounded-xl shadow-sm">
                                    <h4 className="font-familjen font-semibold mb-2 text-primary-dark">
                                        Faster Learning
                                    </h4>
                                    <p className="text-text font-inter">
                                        Leverage AI to enhance understanding and master new concepts
                                        more efficiently
                                    </p>
                                </div>
                                <div className="p-6 bg-background rounded-xl shadow-sm">
                                    <h4 className="font-familjen font-semibold mb-2 text-primary-dark">
                                        Advanced Analysis
                                    </h4>
                                    <p className="text-text font-inter">
                                        Unlock deeper insights from biological data through
                                        AI-enhanced analysis methods
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Responsibility Side */}
                        <div className="space-y-8">
                            <div className="text-center mb-12">
                                <Scale className="w-16 h-16 text-primary-dark mx-auto mb-4"/>
                                <h3 className="text-2xl font-familjen font-semibold text-primary-dark">
                                    Ensuring Responsibility
                                </h3>
                            </div>
                            <div className="space-y-6">
                                <div className="p-6 bg-background rounded-xl shadow-sm">
                                    <h4 className="font-familjen font-semibold mb-2 text-primary-dark">
                                        Ethical Practice
                                    </h4>
                                    <p className="text-text font-inter">
                                        Develop frameworks to prevent bias and ensure inclusive,
                                        equitable research practices
                                    </p>
                                </div>
                                <div className="p-6 bg-background rounded-xl shadow-sm">
                                    <h4 className="font-familjen font-semibold mb-2 text-primary-dark">
                                        Environmental Impact
                                    </h4>
                                    <p className="text-text font-inter">
                                        Prioritize sustainable AI practices that support environmental
                                        conservation goals
                                    </p>
                                </div>
                                <div className="p-6 bg-background rounded-xl shadow-sm">
                                    <h4 className="font-familjen font-semibold mb-2 text-primary-dark">
                                        Academic Integrity
                                    </h4>
                                    <p className="text-text font-inter">
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
            <section className="py-20 bg-background">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-fraunces font-bold text-center text-primary-dark mb-16">
                        Leadership
                    </h2>
                    <div className="max-w-2xl mx-auto">
                        <div className="text-center">
                            <img
                                src="/api/placeholder/400/400"
                                alt="Chris Talbot"
                                className="w-48 h-48 rounded-full mx-auto mb-6 object-cover"
                            />
                            <h3 className="text-2xl font-familjen font-semibold mb-2 text-primary-dark">
                                Chris Talbot
                            </h3>
                            <p className="text-text-muted font-inter mb-6">Founder & CEO</p>
                            <div className="text-text font-inter space-y-4">
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
            <section className="py-20 bg-background-alt">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-fraunces font-bold text-primary-dark mb-8">
                        Get in Touch
                    </h2>
                    <p className="text-xl mb-12 text-text-muted font-inter">
                        Let's discuss how to advance your research with AI while maintaining ethical excellence
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <a
                            href="mailto:chris@naturity.ai"
                            className="bg-primary hover:bg-primary-light text-white px-6 py-3 rounded-lg inline-flex items-center gap-2 font-familjen font-medium"
                        >
                            <Mail size={20}/> Email Chris
                        </a>
                        <a
                            href="https://github.com/NaturityAI"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-lg inline-flex items-center gap-2 font-familjen font-medium transition-colors"
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
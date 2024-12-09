import React from 'react';
import {
    Users, Calendar, BookOpen, Share2, Award, ArrowRight,
    Trophy, TestTube, GitBranch, MessageSquare, BarChart2, Radio,
    Hash, MessageCircle, GraduationCap, BookMarked, Puzzle, Waypoints
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './styles/Home.css';

const Community = () => {
    const communityPlatforms = [
        {
            title: "Discord Server",
            description: "Join our vibrant Discord community for real-time discussions, collaboration, and support",
            icon: <MessageSquare className="w-8 h-8 text-primary" />,
            link: "#discord",
            features: [
                "AI Discussion Channels",
                "Code Help & Reviews",
                "Research Groups",
                "Community Events"
            ]
        },
        {
            title: "Events & Workshops",
            description: "Stay updated with workshops, webinars, and collaborative research sessions",
            icon: <Calendar className="w-8 h-8 text-primary" />,
            link: "#events",
            features: [
                "Live Workshops",
                "Research Presentations",
                "Guest Speaker Series",
                "AI Hackathons"
            ]
        },
        {
            title: "Online Community",
            description: "Learn together through our learning leaderboard, project showcase, and study groups",
            icon: <Users className="w-8 h-8 text-primary" />,
            link: "#study-groups",
            features: [
                "Peer Learning",
                "Project Teams",
                "Paper Discussion",
                "Code Reviews"
            ]
        }
    ];

    const discordChannels = [
        {
            title: "Research Hub",
            description: "Connect with researchers and join ongoing computational biology projects",
            icon: <TestTube className="w-8 h-8 text-primary-dark" />,
            channels: ["#research-projects", "#paper-discussions", "#collaborations"]
        },
        {
            title: "Learning Center",
            description: "Access learning resources and get help with AI concepts and implementation",
            icon: <GraduationCap className="w-8 h-8 text-primary-dark" />,
            channels: ["#beginners", "#advanced-topics", "#tutorials"]
        },
        {
            title: "Code Corner",
            description: "Share code, get reviews, and collaborate on biological AI tools",
            icon: <GitBranch className="w-8 h-8 text-primary-dark" />,
            channels: ["#code-help", "#project-showcase", "#tools-libs"]
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-background-alt to-background">
            {/* Hero Section */}
            <header className="mx-auto py-24 text-center animate-fade-in">
                <div className="max-w-4xl mx-auto px-4">
                    <h1 className="text-6xl font-fraunces font-bold text-primary-dark mb-8">
                        Join Our Research Community
                    </h1>
                    <p className="text-xl mb-8 text-text-muted font-inter">
                        Connect with fellow researchers, share knowledge, and advance the intersection of AI and biological sciences
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link
                            to="#discord"
                            className="bg-primary hover:bg-primary-light text-white px-6 py-3 rounded-lg inline-flex items-center gap-2 text-lg font-familjen font-medium"
                        >
                            Join Discord <MessageSquare size={20}/>
                        </Link>
                        <Link
                            to="#calendar"
                            className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-lg inline-flex items-center gap-2 text-lg font-familjen font-medium transition-colors"
                        >
                            View Events <Calendar size={20}/>
                        </Link>
                    </div>
                </div>
            </header>

            {/* Community Platforms */}
            <section className="py-20 bg-background">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl font-fraunces font-bold text-center text-primary-dark mb-16">
                        Connect & Learn Together
                    </h2>
                    <div className="grid md:grid-cols-3 gap-12">
                        {communityPlatforms.map((item, index) => (
                            <div
                                key={index}
                                className={`p-8 bg-background rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 animate-fade-in delay-${index + 1}`}
                            >
                                <div className="w-16 h-16 mb-6 bg-accent rounded-full flex items-center justify-center">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-familjen font-semibold mb-4 text-primary-dark">
                                    {item.title}
                                </h3>
                                <p className="text-text font-inter mb-4">
                                    {item.description}
                                </p>
                                <ul className="text-sm text-text-muted font-inter">
                                    {item.features.map((feature, i) => (
                                        <li key={i} className="mb-1 flex items-center gap-2">
                                            <Radio size={12} className="text-primary" /> {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Discord Channels */}
            <section className="py-20 bg-background-alt">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl font-fraunces font-bold text-center text-primary-dark mb-16">
                        Discord Community
                    </h2>
                    <div className="grid md:grid-cols-3 gap-12">
                        {discordChannels.map((item, index) => (
                            <div
                                key={index}
                                className={`p-8 bg-background rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 animate-fade-in delay-${index + 1}`}
                            >
                                <div className="w-16 h-16 mb-6 bg-accent rounded-full flex items-center justify-center">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-familjen font-semibold mb-4 text-primary-dark">
                                    {item.title}
                                </h3>
                                <p className="text-text font-inter mb-4">
                                    {item.description}
                                </p>
                                <ul className="text-sm text-text-muted font-inter">
                                    {item.channels.map((channel, i) => (
                                        <li key={i} className="mb-1 flex items-center gap-2">
                                            <Hash size={12} className="text-primary" /> {channel}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-24 bg-primary-dark text-text-light">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-fraunces font-bold mb-8">
                        Start Collaborating Today
                    </h2>
                    <p className="text-xl font-inter opacity-90 mb-10 max-w-2xl mx-auto">
                        Join our community of biologists and researchers using AI to push the boundaries of biological research.
                    </p>
                    <Link
                        to="#discord"
                        className="bg-text-light text-primary-dark px-8 py-4 rounded-lg inline-flex items-center gap-2 text-lg font-familjen font-medium hover:bg-accent-light"
                    >
                        Join Discord <MessageSquare size={24}/>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Community;
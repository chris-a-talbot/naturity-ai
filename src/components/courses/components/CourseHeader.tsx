import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    ArrowLeft,
    BookOpen,
    Clock,
    Star,
    UserCheck
} from 'lucide-react';
import { ParticleCanvas } from './ParticleCanvas';

interface CourseMetadataItem {
    icon: React.ElementType;
    text: string;
}

interface CourseHeaderProps {
    title: string;
    description: string;
    icon: React.ElementType;
    duration: string;
    moduleCount: number;
    level: string;
    enrolledCount: number;
}

export const CourseHeader: React.FC<CourseHeaderProps> = ({
                                                              title,
                                                              description,
                                                              icon: CourseIcon,
                                                              duration,
                                                              moduleCount,
                                                              level,
                                                              enrolledCount,
                                                          }) => {
    const navigate = useNavigate();

    const metadata: CourseMetadataItem[] = [
        { icon: Clock, text: duration },
        { icon: BookOpen, text: `${moduleCount} Modules` },
        { icon: Star, text: level },
        { icon: UserCheck, text: `${enrolledCount.toLocaleString()} Enrolled` }
    ];

    return (
        <header className="bg-background-dark relative overflow-hidden">
            <ParticleCanvas />
            <div className="max-w-6xl mx-auto px-4 py-12 relative">
                {/* Back Button */}
                <button
                    onClick={() => navigate('/learn')}
                    className="flex items-center gap-2 text-accent-light hover:text-text-light transition-colors mb-8 group"
                >
                    <ArrowLeft
                        size={20}
                        className="group-hover:-translate-x-1 transition-transform duration-300"
                    />
                    <span className="font-familjen">Back to Courses</span>
                </button>

                {/* Header Content */}
                <div className="flex items-start gap-8">
                    {/* Course Icon */}
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-secondary-light to-primary p-0.5">
                        <div className="w-full h-full rounded-2xl bg-background-dark flex items-center justify-center">
                            <CourseIcon className="text-secondary-light" size={32} />
                        </div>
                    </div>

                    {/* Course Info */}
                    <div className="flex-1">
                        <h1 className="text-5xl mb-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary font-fraunces">
                            {title}
                        </h1>
                        <p className="text-lg text-accent-light mb-6 max-w-2xl font-inter">
                            {description}
                        </p>

                        {/* Metadata Badges */}
                        <div className="flex flex-wrap gap-6 text-sm">
                            {metadata.map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-2 bg-background-dark/50 px-4 py-2 rounded-full text-accent-light backdrop-blur-sm"
                                >
                                    <item.icon size={16} className="text-secondary-light" />
                                    <span className="font-inter">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
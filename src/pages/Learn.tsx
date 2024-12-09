import React, { useState } from 'react';
import {
    BookOpen,
    Brain,
    ChevronRight,
    Shield,
    PlayCircle,
    Star,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Type definitions
interface Course {
    id: string;
    title: string;
    description: string;
    progress: number;
    modules: number;
    icon: React.ComponentType<any>;
    level: string;
}

interface CoursePath {
    id: string;
    title: string;
    description: string;
    courses: Course[];
}

// Updated course data with new structure
const coursePaths: CoursePath[] = [
    {
        id: 'core-courses',
        title: 'Core Courses',
        description: 'Essential knowledge for using AI in biology',
        courses: [
            {
                id: 'biology-meets-ai',
                title: 'Biology Meets AI: A Primer',
                description: 'Get started with the fundamentals of AI in biological research',
                progress: 0,
                modules: 5,
                icon: Brain,
                level: 'beginner'
            },
            {
                id: 'ai-tools',
                title: 'AI Tools for Biological Research',
                description: 'Master the essential AI tools for modern biological research',
                progress: 0,
                modules: 6,
                icon: BookOpen,
                level: 'intermediate'
            },
            {
                id: 'teaching-biology',
                title: 'Teaching Biology with AI',
                description: 'Learn to integrate AI tools into biology education effectively',
                progress: 0,
                modules: 4,
                icon: Star,
                level: 'intermediate'
            },
            {
                id: 'responsible-ai',
                title: 'Responsible AI in Biology',
                description: 'Navigate ethical considerations and best practices for AI in biological research',
                progress: 0,
                modules: 4,
                icon: Shield,
                level: 'intermediate'
            }
        ]
    }
];

const Learn = () => {
    const navigate = useNavigate();
    const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

    const handleStartCourse = (courseId: string) => {
        if (courseId === 'biology-meets-ai') {
            navigate('/courses/prompt-engineering');
        }
        // Add navigation logic for other courses here
    };

    const renderProgressBar = (progress: number) => (
        <div className="w-full h-2 bg-accent-light rounded-full overflow-hidden">
            <div
                className="h-full bg-primary transition-all duration-300"
                style={{ width: `${progress}%` }}
            />
        </div>
    );

    interface CourseCardProps {
        course: Course;
    }

    const CourseCard: React.FC<CourseCardProps> = ({ course }) => (
        <div
            className="p-6 rounded-xl bg-background hover:shadow-lg cursor-pointer transition-all duration-300 relative"
            onClick={() => setSelectedCourse(course)}
        >
            <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                    <course.icon className="text-primary" size={24}/>
                </div>
                <div className="flex-1">
                    <h3 className="text-xl font-familjen font-semibold text-primary-dark mb-2">
                        {course.title}
                    </h3>
                    <p className="text-text-muted font-inter mb-4">
                        {course.description}
                    </p>
                    <div className="flex items-center gap-4 mb-3">
                        <span className="text-sm font-inter text-text-muted">
                            {course.modules} modules
                        </span>
                        <span className="flex items-center gap-1 text-sm font-inter text-primary">
                            <PlayCircle size={14}/> Start learning
                        </span>
                    </div>
                    {renderProgressBar(course.progress)}
                </div>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-b from-background-alt to-background">
            {/* Header */}
            <header className="pt-16 pb-12 text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h1 className="text-5xl font-fraunces font-bold text-primary-dark mb-6">
                        Your Learning Journey
                    </h1>
                    <p className="text-xl text-text-muted font-inter mb-8">
                        Master the fundamentals of AI in biological research and education
                    </p>
                </div>
            </header>

            {/* Learning Paths */}
            <section className="pb-20">
                <div className="max-w-6xl mx-auto px-4">
                    {coursePaths.map((path) => (
                        <div key={path.id} className="mb-16">
                            <div className="mb-8">
                                <h2 className="text-3xl font-fraunces font-bold text-primary-dark mb-2">
                                    {path.title}
                                </h2>
                                <p className="text-text-muted font-inter">
                                    {path.description}
                                </p>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                {path.courses.map((course) => (
                                    <CourseCard key={course.id} course={course} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Course Progress Overview */}
            <section className="mb-16">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="bg-primary-dark rounded-xl p-8 text-white">
                        <div className="flex items-center gap-4 mb-6">
                            <Star className="text-accent" size={32} />
                            <div>
                                <h2 className="text-2xl font-familjen font-semibold mb-1">
                                    Your Progress
                                </h2>
                                <p className="text-accent-light font-inter">
                                    Continue your learning journey
                                </p>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-background/10 rounded-lg p-4">
                                <div className="text-4xl font-familjen font-bold mb-2">0</div>
                                <div className="text-sm font-inter text-accent-light">
                                    Courses Completed
                                </div>
                            </div>
                            <div className="bg-background/10 rounded-lg p-4">
                                <div className="text-4xl font-familjen font-bold mb-2">0</div>
                                <div className="text-sm font-inter text-accent-light">
                                    Modules Completed
                                </div>
                            </div>
                            <div className="bg-background/10 rounded-lg p-4">
                                <div className="text-4xl font-familjen font-bold mb-2">0h</div>
                                <div className="text-sm font-inter text-accent-light">
                                    Learning Time
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Course Modal */}
            {selectedCourse && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
                    <div className="bg-background rounded-xl p-8 max-w-2xl w-full">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                                <selectedCourse.icon className="text-primary" size={24} />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-2xl font-familjen font-semibold text-primary-dark mb-2">
                                    {selectedCourse.title}
                                </h2>
                                <p className="text-text-muted font-inter mb-4">
                                    {selectedCourse.description}
                                </p>
                                <div className="bg-background-alt rounded-lg p-4 mb-6">
                                    <h3 className="font-familjen font-semibold text-primary-dark mb-2">
                                        Course Details
                                    </h3>
                                    <ul className="space-y-2 text-text-muted font-inter">
                                        <li className="flex items-center gap-2">
                                            <BookOpen size={16} />
                                            {selectedCourse.modules} Modules
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Star size={16} />
                                            {selectedCourse.level}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end gap-4">
                            <button
                                onClick={() => setSelectedCourse(null)}
                                className="px-4 py-2 text-text-muted font-inter hover:text-text"
                            >
                                Close
                            </button>
                            <button
                                onClick={() => handleStartCourse(selectedCourse.id)}
                                className="bg-primary text-white px-6 py-2 rounded-lg font-familjen font-medium hover:bg-primary-light flex items-center gap-2"
                            >
                                Start Course <ChevronRight size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Learn;
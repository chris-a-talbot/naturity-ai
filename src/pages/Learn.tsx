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
import './styles/Learn.css';

// Type definitions remain the same
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

// Course data remains the same
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
    };

    const renderProgressBar = (progress: number) => (
        <div className="progress-bar-container">
            <div
                className="progress-bar"
                style={{ width: `${progress}%` }}
            />
        </div>
    );

    interface CourseCardProps {
        course: Course;
    }

    const CourseCard: React.FC<CourseCardProps> = ({ course }) => (
        <div
            className="course-card animate-fade-in"
            onClick={() => setSelectedCourse(course)}
        >
            <div className="course-card-content">
                <div className="icon-container">
                    <course.icon className="text-primary" size={24}/>
                </div>
                <div className="course-info">
                    <h3 className="course-title">
                        {course.title}
                    </h3>
                    <p className="course-description">
                        {course.description}
                    </p>
                    <div className="course-meta">
                        <span className="module-count">
                            {course.modules} modules
                        </span>
                        <span className="start-learning">
                            <PlayCircle size={14}/> Start learning
                        </span>
                    </div>
                    {renderProgressBar(course.progress)}
                </div>
            </div>
        </div>
    );

    return (
        <div className="page-container">
            <header className="learn-header">
                <div className="header-content">
                    <h1 className="header-title animate-fade-in delay-1">
                        Your Learning Journey
                    </h1>
                    <p className="header-description animate-fade-in delay-2">
                        Master the fundamentals of AI in biological research and education
                    </p>
                </div>
            </header>

            <section className="learning-paths">
                <div className="container">
                    {coursePaths.map((path) => (
                        <div key={path.id} className="path-section animate-slide-in">
                            <div className="path-header">
                                <h2 className="path-title">
                                    {path.title}
                                </h2>
                                <p className="path-description">
                                    {path.description}
                                </p>
                            </div>
                            <div className="courses-grid">
                                {path.courses.map((course) => (
                                    <CourseCard key={course.id} course={course} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="progress-overview">
                <div className="container">
                    <div className="progress-card">
                        <div className="progress-header">
                            <Star className="text-accent" size={32} />
                            <div>
                                <h2 className="progress-title">
                                    Your Progress
                                </h2>
                                <p className="progress-subtitle">
                                    Continue your learning journey
                                </p>
                            </div>
                        </div>
                        <div className="stats-grid">
                            {['Courses', 'Modules', 'Learning Time'].map((stat, index) => (
                                <div key={stat} className="stat-card">
                                    <div className="stat-value">0{stat === 'Learning Time' ? 'h' : ''}</div>
                                    <div className="stat-label">
                                        {stat} Completed
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {selectedCourse && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="icon-container">
                                <selectedCourse.icon className="text-primary" size={24} />
                            </div>
                            <div className="modal-title-content">
                                <h2 className="modal-title">
                                    {selectedCourse.title}
                                </h2>
                                <p className="modal-description">
                                    {selectedCourse.description}
                                </p>
                                <div className="course-details">
                                    <h3 className="details-title">
                                        Course Details
                                    </h3>
                                    <ul className="details-list">
                                        <li>
                                            <BookOpen size={16} />
                                            {selectedCourse.modules} Modules
                                        </li>
                                        <li>
                                            <Star size={16} />
                                            {selectedCourse.level}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="modal-actions">
                            <button
                                onClick={() => setSelectedCourse(null)}
                                className="btn-secondary"
                            >
                                Close
                            </button>
                            <button
                                onClick={() => handleStartCourse(selectedCourse.id)}
                                className="btn-primary"
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
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const BioNav = () => {
    const [expandedSections, setExpandedSections] = useState(new Set());
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [visibleItems, setVisibleItems] = useState<string[]>([]);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<any[]>([]);
    const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
    const navigate = useNavigate();

    const createParticle = useCallback((startX: number, startY: number, pathLength: number) => ({
        x: startX,
        y: startY,
        speed: 0.5 + Math.random() * 0.5,
        progress: 0,
        pathLength,
        size: 1.5 + Math.random() * 2,
        hue: 140 + Math.random() * 20,
        velocityX: 0,
        velocityY: 0
    }), []);

    const handleMouseMove = useCallback((e: React.MouseEvent) => {
        const rect = canvasRef.current?.getBoundingClientRect();
        if (rect) {
            setMousePos({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            });
        }
    }, []);

    const handleMouseLeave = useCallback(() => {
        setMousePos({ x: -1000, y: -1000 });
    }, []);

    const toggleSection = useCallback((id: string) => {
        setExpandedSections(prev => {
            const next = new Set(prev);
            if (next.has(id)) {
                next.delete(id);
            } else {
                next.clear();
                next.add(id);
            }
            return next;
        });
    }, []);

    const navItems = [
        {
            id: 'home',
            name: 'Home',
            path: '/',
            priority: 1
        },
        {
            id: 'about',
            name: 'About',
            path: '/about',
            priority: 5
        },
        {
            id: 'learn',
            name: 'Learn',
            path: '/learn',
            priority: 2
        },
        {
            id: 'resources',
            name: 'Resources',
            path: '/resources',
            priority: 3,
            children: [
                { id: 'students', name: 'For Students', path: '/resources/students' },
                { id: 'researchers', name: 'For Researchers', path: '/resources/researchers' },
                { id: 'educators', name: 'For Educators', path: '/resources/educators' },
                { id: 'organizations', name: 'For Organizations', path: '/resources/organizations' },
            ]
        },
        {
            id: 'community',
            name: 'Community',
            path: '/community',
            priority: 4
        },
        {
            id: 'blog',
            name: 'Blog',
            path: '/blog',
            priority: 6
        }
    ];

    useEffect(() => {
        const updateVisibleItems = () => {
            const width = window.innerWidth;
            let visibleCount = 6;

            if (width < 1280) visibleCount = 4;
            if (width < 1024) visibleCount = 3;
            if (width < 900) visibleCount = 2;
            if (width < 768) visibleCount = 0;

            const sortedItems = [...navItems]
                .sort((a, b) => a.priority - b.priority)
                .slice(0, visibleCount)
                .map(item => item.id);

            setVisibleItems(sortedItems);
        };

        updateVisibleItems();
        window.addEventListener('resize', updateVisibleItems);
        return () => window.removeEventListener('resize', updateVisibleItems);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrame: number;

        const updateCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = 80;
        };

        updateCanvasSize();
        window.addEventListener('resize', updateCanvasSize);

        if (particlesRef.current.length === 0) {
            particlesRef.current = Array(30).fill(null).map(() =>
                createParticle(
                    Math.random() * canvas.width,
                    Math.random() * canvas.height,
                    100
                )
            );
        }

        const updateParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particlesRef.current.forEach((particle) => {
                particle.progress += particle.speed;

                const dx = mousePos.x - particle.x;
                const dy = mousePos.y - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 60) {
                    const angle = Math.atan2(dy, dx);
                    const force = (60 - distance) * 0.0008;
                    particle.velocityX -= Math.cos(angle) * force;
                    particle.velocityY -= Math.sin(angle) * force;
                }

                particle.velocityX *= 0.99;
                particle.velocityY *= 0.99;
                particle.x += particle.velocityX;
                particle.y += particle.velocityY;

                particle.x += particle.speed;

                if (particle.x > canvas.width) particle.x = 0;
                if (particle.x < 0) particle.x = canvas.width;
                if (particle.y > canvas.height) particle.y = 0;
                if (particle.y < 0) particle.y = canvas.height;

                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                const gradient = ctx.createRadialGradient(
                    particle.x, particle.y, 0,
                    particle.x, particle.y, particle.size * 2
                );
                gradient.addColorStop(0, `hsla(${particle.hue}, 70%, 50%, 0.8)`);
                gradient.addColorStop(1, `hsla(${particle.hue}, 70%, 50%, 0)`);
                ctx.fillStyle = gradient;
                ctx.fill();
            });

            animationFrame = requestAnimationFrame(updateParticles);
        };

        updateParticles();

        return () => {
            cancelAnimationFrame(animationFrame);
            window.removeEventListener('resize', updateCanvasSize);
        };
    }, [createParticle, mousePos]);

    const handleNavigation = useCallback((path: string, itemId?: string) => {
        if (itemId === 'resources') {
            toggleSection(itemId);
            if (!expandedSections.has(itemId)) {
                navigate(path);
            }
        } else {
            navigate(path);
            setExpandedSections(new Set());
        }
        setIsMenuOpen(false);
    }, [navigate, toggleSection, expandedSections]);

    const getVisibleNavItems = () => navItems.filter(item => visibleItems.includes(item.id));
    const getHamburgerNavItems = () => navItems.filter(item => !visibleItems.includes(item.id));

    return (
        <div
            className="fixed top-0 w-full bg-background-dark/95 backdrop-blur-sm text-text-light z-50"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <canvas
                ref={canvasRef}
                className="absolute inset-0 pointer-events-none"
                width={window.innerWidth}
                height={80}
            />

            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center h-20 relative z-10">
                    <div className="flex-1">
                        <button
                            onClick={() => handleNavigation('/')}
                            className="relative group transition-all duration-300 transform hover:scale-105"
                        >
                            <div className="text-3xl font-bold tracking-tight bg-gradient-to-r from-primary-light to-secondary bg-clip-text text-transparent">
                                <span className="font-cabinet">Naturity</span>
                                <span className="font-familjen">AI</span>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-light/20 to-secondary/20 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
                        </button>
                    </div>

                    <div className="flex items-center justify-center space-x-6">
                        {getVisibleNavItems().map(item => (
                            <div key={item.id} className="relative">
                                <button
                                    onClick={() => {
                                        if (item.children) {
                                            toggleSection(item.id);
                                        } else {
                                            handleNavigation(item.path);
                                        }
                                    }}
                                    className={`group px-4 py-2 rounded-full transition-all duration-300 text-lg font-inter font-medium relative overflow-hidden
                                        ${expandedSections.has(item.id)
                                        ? 'bg-gradient-to-r from-primary to-primary-light text-text-light shadow-lg'
                                        : 'text-accent-light hover:text-text-light'
                                    }`}
                                >
                                    <span className="relative z-10">{item.name}</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-light/20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105" />
                                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 to-primary-light/10 rounded-full blur opacity-0 group-hover:opacity-100 transition-all duration-300" />
                                </button>

                                {item.children && expandedSections.has(item.id) && (
                                    <div className="absolute top-full left-0 mt-2 w-64 bg-background-dark/90 backdrop-blur-sm rounded-lg shadow-xl overflow-hidden border border-primary transform origin-top transition-all duration-300">
                                        {item.children.map(child => (
                                            <button
                                                key={child.id}
                                                onClick={() => handleNavigation(child.path)}
                                                className="group block w-full px-6 py-3.5 text-left text-lg font-inter font-medium text-accent-light hover:bg-primary/70 hover:text-text-light transition-all duration-300 relative overflow-hidden"
                                            >
                                                <span className="relative z-10">{child.name}</span>
                                                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-light/20 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center justify-end flex-1">
                        {getHamburgerNavItems().length > 0 && (
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="p-2 text-accent-light hover:text-text-light transition-all duration-300 transform hover:scale-110"
                                aria-label="Toggle menu"
                            >
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        )}
                    </div>
                </div>

                {isMenuOpen && getHamburgerNavItems().length > 0 && (
                    <div className="absolute top-20 left-0 right-0 bg-background-dark/95 backdrop-blur-sm border-t border-primary transform origin-top transition-all duration-300">
                        {getHamburgerNavItems().map(item => (
                            <div key={item.id}>
                                <button
                                    onClick={() => {
                                        if (item.children) {
                                            toggleSection(item.id);
                                        } else {
                                            handleNavigation(item.path);
                                        }
                                    }}
                                    className={`group w-full px-6 py-4 text-left text-lg font-inter font-medium relative overflow-hidden
                                        ${expandedSections.has(item.id)
                                        ? 'bg-primary/20 text-text-light'
                                        : 'text-accent-light hover:bg-primary/10 hover:text-text-light'
                                    }`}
                                >
                                    <span className="relative z-10">{item.name}</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary-light/10 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                                </button>

                                {item.children && expandedSections.has(item.id) && (
                                    <div className="bg-background-dark/90 border-y border-primary/20">
                                        {item.children.map(child => (
                                            <button
                                                key={child.id}
                                                onClick={() => handleNavigation(child.path)}
                                                className="group block w-full px-12 py-3 text-left text-lg font-inter font-medium text-accent-light hover:bg-primary/10 hover:text-text-light transition-all duration-300 relative overflow-hidden"
                                            >
                                                <span className="relative z-10">{child.name}</span>
                                                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary-light/10 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default BioNav;
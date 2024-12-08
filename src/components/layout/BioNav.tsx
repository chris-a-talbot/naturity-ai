import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const BioNav = () => {
    const [expandedSections, setExpandedSections] = useState(new Set());
    const canvasRef = useRef(null);
    const particlesRef = useRef([]);
    const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
    const navigate = useNavigate();

    const createParticle = useCallback((startX, startY, pathLength) => ({
        x: startX,
        y: startY,
        speed: 0.5 + Math.random() * 0.5,
        progress: 0,
        pathLength,
        size: 1.5 + Math.random() * 2,
        hue: 160 + Math.random() * 40,
        velocityX: 0,
        velocityY: 0
    }), []);

    const handleMouseMove = useCallback((e) => {
        const rect = canvasRef.current.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
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
                next.clear(); // Clear other open sections
                next.add(id);
            }
            return next;
        });
    }, []);

    const navItems = [
        {
            id: 'home',
            name: 'Home',
            path: '/'
        },
        {
            id: 'learn',
            name: 'Learn',
            path: '/learn'
        },
        {
            id: 'resources',
            name: 'Resources',
            path: '/resources',
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
            path: '/community'
        },
        {
            id: 'about',
            name: 'About',
            path: '/about'
        },
        {
            id: 'blog',
            name: 'Blog',
            path: '/blog'
        }
    ];

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrame;

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
            setExpandedSections(new Set()); // Close any open dropdowns
        }
    }, [navigate, toggleSection, expandedSections]);

    return (
        <div
            className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm text-white z-50"
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
                    <button
                        onClick={() => handleNavigation('/')}
                        className="relative group transition-transform hover:scale-105"
                    >
                        <div className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                            NaturityAI
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>

                    <div className="ml-16 flex space-x-12">
                        {navItems.map(item => (
                            <div key={item.id} className="relative">
                                <button
                                    onClick={() => {
                                        if (item.children) {
                                            toggleSection(item.id);
                                        } else {
                                            handleNavigation(item.path);
                                        }
                                    }}
                                    className={`px-6 py-2.5 rounded-full transition-all duration-300 text-lg font-bold
                                        ${expandedSections.has(item.id)
                                        ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg'
                                        : 'text-gray-300 hover:text-white'
                                    }`}
                                >
                                    {item.name}
                                </button>

                                {item.children && expandedSections.has(item.id) && (
                                    <div
                                        className="absolute top-full left-0 mt-2 w-64 bg-slate-800/90 backdrop-blur-sm rounded-lg shadow-xl overflow-hidden border border-slate-700"
                                        style={{
                                            animation: 'cellDivide 0.3s ease-out'
                                        }}
                                    >
                                        {item.children.map(child => (
                                            <button
                                                key={child.id}
                                                onClick={() => handleNavigation(child.path)}
                                                className="block w-full px-6 py-3.5 text-left text-lg font-bold text-gray-300 hover:bg-slate-700/70 hover:text-white transition-colors"
                                            >
                                                {child.name}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes cellDivide {
                    from {
                        transform: scale(0.95) translateY(-10px);
                        opacity: 0;
                    }
                    to {
                        transform: scale(1) translateY(0);
                        opacity: 1;
                    }
                }
            `}</style>
        </div>
    );
};

export default BioNav;
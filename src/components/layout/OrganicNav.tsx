import { useState, useEffect, useRef } from 'react';
import { Leaf, Brain, BookOpen, Users, Home, Menu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const OrganicNav = () => {
    const [activeNode, setActiveNode] = useState(null);
    const [isExpanded, setIsExpanded] = useState(false);
    const [hasOpened, setHasOpened] = useState(false);
    const [particlePositions, setParticlePositions] = useState([]);
    const containerRef = useRef(null);
    const navigate = useNavigate();

    const navItems = [
        { icon: Home, label: 'Home', path: '/', primary: '#2D6A4F', secondary: '#74C69D', tertiary: '#95D5B2' },
        { icon: Brain, label: 'Learn', path: '/learn', primary: '#40916C', secondary: '#74C69D', tertiary: '#95D5B2' },
        { icon: BookOpen, label: 'Resources', path: '/resources', primary: '#52B788', secondary: '#74C69D', tertiary: '#95D5B2' },
        { icon: Users, label: 'Community', path: '/community', primary: '#74C69D', secondary: '#95D5B2', tertiary: '#B7E4C7' },
        { icon: Leaf, label: 'About', path: '/about', primary: '#40916C', secondary: '#74C69D', tertiary: '#95D5B2' }
    ];

    useEffect(() => {
        if (activeNode !== null) {
            const newPositions = [...Array(20)].map(() => ({
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() * 20 + 10,
                delay: Math.random() * 2
            }));
            setParticlePositions(newPositions);
        }
    }, [activeNode]);

    useEffect(() => {
        if (!isExpanded) return;

        const container = containerRef.current;
        const crystals = container.querySelectorAll('.crystal-seed');

        crystals.forEach((crystal, index) => {
            const growCrystal = () => {
                let x, y;
                if (index === 0) {
                    x = 50;
                    y = 20;
                } else {
                    const angle = (index - 1) * (Math.PI / (crystals.length - 2));
                    x = 50 + Math.cos(angle) * 35;
                    y = 50 + Math.sin(angle) * 25;
                }
                crystal.style.setProperty('--x', `${x}%`);
                crystal.style.setProperty('--y', `${y}%`);
            };

            if (!hasOpened) {
                setTimeout(growCrystal, index * 150);
            } else {
                growCrystal();
            }

            const floatOffset = Math.random() * 2 * Math.PI;
            const animate = () => {
                const time = Date.now() / 2000;
                const floatY = Math.sin(time + floatOffset) * 10;
                crystal.style.setProperty('--float-y', `${floatY}px`);
                requestAnimationFrame(animate);
            };

            animate();
        });
    }, [isExpanded, hasOpened]);

    return (
        <div className="fixed top-0 left-0 w-full h-screen">
            <style>{`
                @keyframes pulse {
                    0%, 100% { transform: scale(1); opacity: 0.8; }
                    50% { transform: scale(1.05); opacity: 1; }
                }
                
                @keyframes float {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    50% { transform: translateY(-10px) rotate(5deg); }
                }

                @keyframes shimmer {
                    0% { background-position: -200% center; }
                    100% { background-position: 200% center; }
                }

                .crystal-seed {
                    position: absolute;
                    left: var(--x, 50%);
                    top: var(--y, 50%);
                    transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
                    transform: translateY(var(--float-y, 0));
                }

                .crystal-container {
                    transition: clip-path 0.8s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .crystal-container.expanded {
                    clip-path: circle(150% at 50% 0);
                }

                .crystal-container.collapsed {
                    clip-path: circle(0% at 50% 0);
                }

                .crystal-glow {
                    background: linear-gradient(90deg, 
                        var(--secondary) 0%, 
                        var(--tertiary) 50%,
                        var(--secondary) 100%
                    );
                    background-size: 200% 100%;
                    animation: shimmer 8s linear infinite;
                }

                .particle {
                    position: absolute;
                    pointer-events: none;
                    background: radial-gradient(circle, var(--color) 0%, transparent 70%);
                    border-radius: 50%;
                    transition: all 0.5s ease-out;
                }

                .nav-trigger:hover .menu-icon {
                    transform: scale(1.1);
                }

                .crystal-label {
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                    top: calc(100% + 1rem);
                    transition: all 0.3s ease;
                    white-space: nowrap;
                }
            `}</style>

            {/* Fixed header with menu button */}
            <div className="fixed top-0 left-0 w-full h-20 bg-background/80 backdrop-blur-lg z-50">
                <div className="h-full max-w-7xl mx-auto px-4 flex items-center justify-center relative">
                    <button
                        onClick={() => {
                            setIsExpanded(!isExpanded);
                            if (!hasOpened) setHasOpened(true);
                        }}
                        className="nav-trigger group relative bg-background/20 backdrop-blur-lg rounded-2xl p-4
                            transition-all duration-500 hover:bg-background/30 flex flex-col items-center gap-2"
                        aria-label={isExpanded ? 'Close Menu' : 'Open Menu'}
                    >
                        <div className="relative w-8 h-8 flex items-center justify-center">
                            <Menu
                                className="w-8 h-8 text-primary menu-icon transition-transform duration-300"
                            />
                        </div>
                        <span className="text-sm font-medium text-primary/90">Menu</span>
                    </button>
                </div>
            </div>

            {/* Navigation Garden */}
            <div
                ref={containerRef}
                className={`fixed inset-0 pointer-events-none z-40 ${
                    isExpanded ? 'crystal-container expanded' : 'crystal-container collapsed'
                }`}
            >
                <div className="relative w-full h-full bg-background/90 backdrop-blur-md">
                    {/* Ambient Particles */}
                    {isExpanded && particlePositions.map((particle, i) => (
                        <div
                            key={i}
                            className="particle"
                            style={{
                                '--color': navItems[activeNode !== null ? activeNode : (i % navItems.length)].secondary,
                                width: `${particle.size}px`,
                                height: `${particle.size}px`,
                                left: `${particle.x}%`,
                                top: `${particle.y}%`,
                                opacity: activeNode !== null ? 0.2 : 0.1,
                                animationDelay: `${particle.delay}s`
                            }}
                        />
                    ))}

                    {navItems.map((item, index) => (
                        <div
                            key={index}
                            className="crystal-seed"
                        >
                            <button
                                onMouseEnter={() => setActiveNode(index)}
                                onMouseLeave={() => setActiveNode(null)}
                                onClick={() => {
                                    navigate(item.path);
                                    setIsExpanded(false);
                                }}
                                style={{
                                    '--primary': item.primary,
                                    '--secondary': item.secondary,
                                    '--tertiary': item.tertiary
                                }}
                                className={`relative group transition-transform duration-500 pointer-events-auto
                                    ${activeNode === index ? 'scale-110' : 'scale-100'}`}
                            >
                                {/* Crystal Core */}
                                <div className="relative">
                                    <div
                                        className="w-20 h-20 rounded-2xl bg-gradient-to-br transition-all duration-500
                                            transform rotate-45 overflow-hidden crystal-glow"
                                        style={{
                                            backgroundColor: item.primary,
                                            boxShadow: `0 0 20px ${item.secondary}80`
                                        }}
                                    >
                                        <div
                                            className="absolute inset-0 opacity-30"
                                            style={{
                                                background: `linear-gradient(45deg, transparent 40%, ${item.tertiary})`
                                            }}
                                        />
                                    </div>

                                    {/* Icon */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <item.icon
                                            className="w-10 h-10 text-white transform transition-all duration-500
                                                group-hover:scale-110"
                                        />
                                    </div>
                                </div>

                                {/* Label */}
                                <div
                                    className="crystal-label text-lg font-medium"
                                    style={{
                                        color: item.primary,
                                        textShadow: `0 0 8px ${item.secondary}40`,
                                        opacity: activeNode === index ? 1 : 0.7,
                                        transform: `translateX(-50%) scale(${activeNode === index ? 1.1 : 1})`
                                    }}
                                >
                                    {item.label}
                                </div>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OrganicNav;
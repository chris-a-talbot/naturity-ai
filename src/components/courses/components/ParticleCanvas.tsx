// ParticleCanvas.tsx
import React, { useState, useEffect, useRef, useCallback } from 'react';

interface Particle {
    x: number;
    y: number;
    size: number;
    speed: number;
    velocityX: number;
    velocityY: number;
    hue: number;
}

interface ParticleCanvasProps {
    height?: number;
    particleCount?: number;
}

export const ParticleCanvas: React.FC<ParticleCanvasProps> = ({
                                                                  height = 80,
                                                                  particleCount = 30
                                                              }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

    const createParticle = useCallback((startX: number, startY: number): Particle => ({
        x: startX,
        y: startY,
        size: 1.5 + Math.random() * 2,
        speed: 0.5 + Math.random() * 0.5,
        velocityX: 0,
        velocityY: 0,
        hue: 160 + Math.random() * 20 // Emerald/cyan range
    }), []);

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
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

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrame: number;

        const updateCanvasSize = () => {
            const dpr = window.devicePixelRatio || 1;
            const rect = canvas.getBoundingClientRect();

            canvas.width = rect.width * dpr;
            canvas.height = height * dpr;

            ctx.scale(dpr, dpr);
            canvas.style.width = `${rect.width}px`;
            canvas.style.height = `${height}px`;
        };

        updateCanvasSize();
        window.addEventListener('resize', updateCanvasSize);

        // Initialize particles if not already done
        if (particlesRef.current.length === 0) {
            particlesRef.current = Array(particleCount).fill(null).map(() =>
                createParticle(
                    Math.random() * canvas.width,
                    Math.random() * canvas.height
                )
            );
        }

        const updateParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particlesRef.current.forEach((particle) => {
                // Mouse interaction
                const dx = mousePos.x - particle.x;
                const dy = mousePos.y - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 60) {
                    const angle = Math.atan2(dy, dx);
                    const force = (60 - distance) * 0.0008;
                    particle.velocityX -= Math.cos(angle) * force;
                    particle.velocityY -= Math.sin(angle) * force;
                }

                // Update particle position
                particle.velocityX *= 0.99;
                particle.velocityY *= 0.99;
                particle.x += particle.velocityX;
                particle.y += particle.velocityY;

                // Horizontal movement
                particle.x += particle.speed;

                // Wrap around edges
                if (particle.x > canvas.width) particle.x = 0;
                if (particle.x < 0) particle.x = canvas.width;
                if (particle.y > canvas.height) particle.y = 0;
                if (particle.y < 0) particle.y = canvas.height;

                // Draw particle
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);

                // Create gradient for glow effect
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
    }, [createParticle, mousePos, height, particleCount]);

    return (
        <canvas
            ref={canvasRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="absolute inset-0 transition-opacity duration-300"
            style={{ height }}
        />
    );
};
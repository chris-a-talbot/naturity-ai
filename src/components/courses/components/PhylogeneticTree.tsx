import React from 'react';
import { Lock } from 'lucide-react';
import { CourseNode, CourseLink } from '../CourseTemplate';
import { ParticleCanvas } from './ParticleCanvas';
import './PhylogeneticTree.css';

interface PhylogeneticTreeProps {
    nodes: CourseNode[];
    links: CourseLink[];
    onNodeClick: (node: CourseNode) => void;
}

export const PhylogeneticTree: React.FC<PhylogeneticTreeProps> = ({
                                                                      nodes,
                                                                      links,
                                                                      onNodeClick
                                                                  }) => {
    return (
        <div className="relative w-full h-[600px]">
            <ParticleCanvas height={600} particleCount={40} />

            {/* SVG Connections */}
            <svg
                width="100%"
                height="600"
                viewBox="0 0 1200 600"
                className="relative z-10"
                style={{ pointerEvents: 'none' }}
                preserveAspectRatio="xMidYMid meet"
            >
                <defs>
                    <linearGradient id="linkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#10B981" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.3" />
                    </linearGradient>
                </defs>

                {/* Connection Lines */}
                {links.map((link, index) => (
                    <g key={`link-${index}`} className="tree-connection">
                        <path
                            d={`M ${link.source.x} ${link.source.y} 
                  Q ${(link.source.x + link.target.x) / 2} ${link.source.y}, 
                    ${link.target.x} ${link.target.y}`}
                            stroke="url(#linkGradient)"
                            strokeWidth="3"
                            fill="none"
                            className="tree-path"
                        />
                        <path
                            d={`M ${link.source.x} ${link.source.y} 
                  Q ${(link.source.x + link.target.x) / 2} ${link.source.y}, 
                    ${link.target.x} ${link.target.y}`}
                            stroke="currentColor"
                            strokeWidth="1"
                            fill="none"
                            className="tree-path-highlight"
                        />
                    </g>
                ))}
            </svg>

            {/* Interactive Nodes */}
            <div className="absolute inset-0">
                {nodes.map((node) => (
                    <div
                        key={node.id}
                        className={`absolute transition-transform duration-300 ${
                            node.locked ? 'locked-node' : ''
                        }`}
                        style={{
                            left: `${(node.x / 1200) * 100}%`,
                            top: `${(node.y / 600) * 100}%`,
                            transform: 'translate(-50%, -50%)'
                        }}
                    >
                        <button
                            onClick={() => !node.locked && onNodeClick(node)}
                            className={`
                node group relative flex flex-col items-center
                transition-transform duration-300 hover:scale-110
                ${node.locked ? 'cursor-not-allowed' : 'cursor-pointer'}
              `}
                            disabled={node.locked}
                        >
                            {/* Node Circle */}
                            <div className={`
                w-16 h-16 rounded-full shadow-lg
                flex items-center justify-center relative overflow-hidden
                ${node.locked
                                ? 'bg-background-alt border-2 border-text-muted'
                                : 'bg-background border-2 border-secondary hover:border-primary'}
              `}>
                                {/* Hover Effect */}
                                <div className="
                  absolute inset-0 bg-gradient-to-br
                  from-secondary-light/20 to-primary-light/20
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-300
                " />

                                {/* Icon */}
                                {node.locked ? (
                                    <Lock className="text-text-muted" size={24} />
                                ) : (
                                    <node.icon className="text-secondary group-hover:text-primary transition-colors duration-300" size={24} />
                                )}
                            </div>

                            {/* Node Label */}
                            <span className="
                mt-2 px-3 py-1 rounded-full text-sm font-familjen
                bg-background/80 backdrop-blur-sm
                text-text-muted group-hover:text-text
                transition-colors duration-300
                shadow-sm
              ">
                {node.title}
              </span>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};
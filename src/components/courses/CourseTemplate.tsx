import React, { useState } from 'react';
import { ChevronRight, Lock } from 'lucide-react';
import { CourseHeader } from './components/CourseHeader';
import {CourseProgress, ProgressStats} from './components/ProgressStats';
import { PhylogeneticTree } from './components/PhylogeneticTree';
import './CourseTemplate.css';

export interface CourseNode {
    id: number;
    title: string;
    description: string;
    x: number;
    y: number;
    icon: React.ElementType;
    locked: boolean;
    size?: number;
}

export interface CourseLink {
    source: CourseNode;
    target: CourseNode;
}

export interface CourseTemplateProps {
    title: string;
    description: string;
    icon: React.ElementType;
    duration: string;
    moduleCount: number;
    level: string;
    enrolledCount: number;
    nodes: CourseNode[];
    links: CourseLink[];
    onModuleSelect?: (moduleId: number) => void;
}

const CourseTemplate: React.FC<CourseTemplateProps> = ({
                                                           title,
                                                           description,
                                                           icon,
                                                           duration,
                                                           moduleCount,
                                                           level,
                                                           enrolledCount,
                                                           nodes,
                                                           links,
                                                           onModuleSelect
                                                       }) => {
    const [selectedNode, setSelectedNode] = useState<CourseNode | null>(null);

    const handleNodeClick = (node: CourseNode) => {
        setSelectedNode(node);
        onModuleSelect?.(node.id);
    };

    return (
        <div className="min-h-screen bg-background">
            <CourseHeader
                title={title}
                description={description}
                icon={icon}
                duration={duration}
                moduleCount={moduleCount}
                level={level}
                enrolledCount={enrolledCount}
            />

            <main className="max-w-6xl mx-auto px-4 py-12">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary mb-4 font-fraunces">
                        Your Learning Evolution
                    </h2>
                    <p className="text-text-muted font-inter">
                        Follow the branches to master your skills through natural progression
                    </p>
                </div>

                <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/50 shadow-lg mb-12">
                    <PhylogeneticTree
                        nodes={nodes}
                        links={links}
                        onNodeClick={handleNodeClick}
                    />
                </div>

                <CourseProgress totalModules={moduleCount} />
            </main>

            {/* Module Selection Modal */}
            {selectedNode && (
                <div className="fixed inset-0 bg-background-dark/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
                    <div className="bg-background rounded-2xl p-8 max-w-2xl w-full shadow-2xl">
                        <div className="flex items-start gap-6 mb-6">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary-light to-primary p-0.5">
                                <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center">
                                    <selectedNode.icon className="text-secondary" size={24} />
                                </div>
                            </div>
                            <div className="flex-1">
                                <h2 className="text-2xl text-text mb-3 font-fraunces">
                                    {selectedNode.title}
                                </h2>
                                <p className="text-text-muted font-inter">
                                    {selectedNode.description}
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-end gap-4">
                            <button
                                onClick={() => setSelectedNode(null)}
                                className="px-4 py-2 text-text-muted hover:text-text font-inter transition-colors"
                            >
                                Close
                            </button>
                            <button
                                className="
                  bg-gradient-to-r from-secondary to-primary
                  hover:from-secondary-dark hover:to-primary-dark
                  text-text-light px-6 py-2 rounded-xl font-medium
                  transition-all duration-300 hover:shadow-lg
                  flex items-center gap-2 font-familjen
                "
                            >
                                Begin Module
                                <ChevronRight size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CourseTemplate;
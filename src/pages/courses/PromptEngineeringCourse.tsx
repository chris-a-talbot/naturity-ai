import React from 'react';
import { FileText } from 'lucide-react';
import CourseTemplate from '../../components/courses/CourseTemplate';
import type { CourseNode, CourseLink } from '../../components/courses/CourseTemplate';

const PromptEngineeringCourse = () => {
    const moduleOne: CourseNode = {
        id: 1,
        title: "Understanding AI Communication",
        description: "Learn the basics of how AI language models work and how to communicate with them effectively",
        x: 100,
        y: 300,
        icon: FileText,
        locked: false,
        size: 40
    };

    const moduleTwo: CourseNode = {
        id: 2,
        title: "Core Prompting Techniques",
        description: "Master fundamental techniques for crafting clear and effective prompts",
        x: 300,
        y: 200,
        icon: FileText,
        locked: false,
        size: 35
    };

    const moduleThree: CourseNode = {
        id: 3,
        title: "Scientific Writing Standards",
        description: "Apply prompting techniques to scientific writing and research tasks",
        x: 300,
        y: 400,
        icon: FileText,
        locked: true,
        size: 35
    };

    const moduleFour: CourseNode = {
        id: 4,
        title: "Final Assessment",
        description: "Put your skills to the test with real-world biological research scenarios",
        x: 500,
        y: 300,
        icon: FileText,
        locked: true,
        size: 40
    };

    const courseNodes: CourseNode[] = [
        moduleOne,
        moduleTwo,
        moduleThree,
        moduleFour
    ];

    const courseLinks: CourseLink[] = [
        {
            source: moduleOne,
            target: moduleTwo
        },
        {
            source: moduleOne,
            target: moduleThree
        },
        {
            source: moduleTwo,
            target: moduleFour
        },
        {
            source: moduleThree,
            target: moduleFour
        }
    ];

    const handleModuleSelect = (moduleId: number) => {
        // Handle module selection/navigation
        console.log(`Selected module: ${moduleId}`);
    };

    return (
        <CourseTemplate
            title="Prompt Engineering Fundamentals"
            description="Learn how to effectively communicate with AI models for biological research"
            icon={FileText}
            duration="4 hours"
            moduleCount={4}
            level="Beginner"
            enrolledCount={1234}
            nodes={courseNodes}
            links={courseLinks}
            onModuleSelect={handleModuleSelect}
        />
    );
};

export default PromptEngineeringCourse;
// src/pages/Blog.tsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Blog = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Open Substack in new tab
        window.open('https://naturityai.substack.com', '_blank');
        // Navigate back to home using React Router
        navigate('/');
    }, [navigate]);

    return (
        <div className="min-h-screen flex items-center justify-center">
            <span className="font-familjen text-primary-DEFAULT">Redirecting to blog...</span>
        </div>
    );
};

export default Blog;
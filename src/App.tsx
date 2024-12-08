// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Learn from './pages/Learn';
import Resources from './pages/Resources';
import Community from './pages/Community';
import ResourcesForStudents from './pages/ResourcesForStudents';
import ResourcesForResearchers from './pages/ResourcesForResearchers';
import ResourcesForEducators from './pages/ResourcesForEducators';
import ResourcesForOrganizations from './pages/ResourcesForOrganizations';
import Blog from "./pages/Blog"

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/learn" element={<Learn />} />
                    <Route path="/resources" element={<Resources />} />
                    <Route path="/resources/students" element={<ResourcesForStudents />} />
                    <Route path="/resources/researchers" element={<ResourcesForResearchers />} />
                    <Route path="/resources/educators" element={<ResourcesForEducators />} />
                    <Route path="/resources/organizations" element={<ResourcesForOrganizations />} />
                    <Route path="/community" element={<Community />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/blog" element={<Blog />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;

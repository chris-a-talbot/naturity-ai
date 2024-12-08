import { FC, ReactNode } from 'react';
import BioNav from './BioNav';

interface LayoutProps {
    children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen">
            <BioNav />
            <main className="pt-20">
                {children}
            </main>
        </div>
    );
};
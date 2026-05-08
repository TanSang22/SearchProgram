// src/components/Layout/MainLayout.tsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MainMenu from '../Menu/MainMenu';

interface LayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout-container">
      <Header />
      <MainMenu /> {/* Menu nằm ở đây */}
      <main className="content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
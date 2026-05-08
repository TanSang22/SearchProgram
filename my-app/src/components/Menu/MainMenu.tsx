// src/components/Menu/MainMenu.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { publicRoutes } from '../../routes/Routes'; // Import danh sách routes

const MainMenu: React.FC = () => {
  return (
    <nav className="main-menu">
      <ul>
        {publicRoutes.map((route, index) => (
          <li key={index}>
            <NavLink 
              to={route.path}
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              {route.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainMenu;
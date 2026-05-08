// src/router.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from '../components/Layout/MainLayout';
import Home from '../pages/Home';
import SearchPrograms from '../pages/SearchPrograms';
import Contact from '../pages/Contact.tsx';


export const publicRoutes = [
  { path: '/', component: Home, label: 'Trang chủ' },
  { path: '/search-programs', component: SearchPrograms, label: 'Tìm kiếm' },
  { path: '/contact', component: Contact, label: 'Liên hệ' },
];

//Định nghĩa routes là đngừ dẫn đường dẫn và component tương ứng để hiển thị khi người dùng truy cập vào đường dẫn đó. Các routes này sẽ được sử dụng trong AppRouter để cấu hình hệ thống định tuyến của ứng dụng.
const AppRouter = () => {
  return (
<Routes>
      {publicRoutes.map((route, index) => {
        const Page = route.component;
        return <Route key={index} path={route.path} element={<Page />} />;
      })}
    </Routes>
  );
};

export default AppRouter;

import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="py-5">
      <h1 className="display-5 fw-bold mb-3">Route + Main Layout + Main Menu</h1>

      <div className="card border-0 shadow-sm p-4 mb-4">
        <h5 className="mb-3">Kien truc hien tai</h5>
        <ul className="mb-0">
          <li>Header + Footer dat trong MainLayout</li>
          <li>Routes dat trong file routes/Routes.js</li>
          <li>Trang Search Detail gan vao route /programs/:slug</li>
        </ul>
      </div>

      <Link className="btn btn-primary" to="/programs/biomedical">
        Mo trang Search Detail
      </Link>
    </div>
  );
}

export default Home;

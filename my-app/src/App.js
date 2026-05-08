// src/App.js
import { BrowserRouter as Router } from 'react-router-dom';
import MainLayout from './components/Layout/MainLayout';
import AppRoutes from './routes/Routes';
import './scss/style.scss';
function App() {
  return (
    <Router>
      <MainLayout>
        <AppRoutes />
      </MainLayout>
    </Router>
  );
}

export default App;

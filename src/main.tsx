import { BrowserRouter, Route, Routes } from 'react-router';
import { createRoot } from 'react-dom/client';
import '@/index.css';
import MainPage from '@/pages/Home';
import NotFoundPage from '@/pages/NotFound';
import ProjectPage from '@/pages/Project';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/projects/:id" element={<ProjectPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);

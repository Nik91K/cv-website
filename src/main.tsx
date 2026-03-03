import { BrowserRouter, Route, Routes } from 'react-router';
import { createRoot } from 'react-dom/client';
import '@/index.css';
import MainPage from '@/pages/MainPage';
import NotFoundPage from '@/pages/NotFoundPage';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);

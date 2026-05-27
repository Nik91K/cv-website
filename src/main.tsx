import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import '@/index.css';
import MainPage from '@/pages/Home';
import NotFoundPage from '@/pages/NotFound';
import ProjectPage from '@/pages/Project';

const router = createBrowserRouter([
  { path: '/', element: <MainPage /> },
  { path: '/projects/:id', element: <ProjectPage /> },
  { path: '*', element: <NotFoundPage /> },
]);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);

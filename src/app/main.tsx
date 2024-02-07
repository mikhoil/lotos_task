import React from 'react';
import ReactDOM from 'react-dom/client';
import { MainProvider } from './providers/MainProvider.tsx';
import { RouterProvider } from './providers/RouterProvider.tsx';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MainProvider>
      <RouterProvider />
    </MainProvider>
  </React.StrictMode>,
);

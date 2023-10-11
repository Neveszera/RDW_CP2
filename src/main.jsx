import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App.jsx'
import Home from './assets/routes/Home/Home.jsx';
import Aparelhos from './assets/routes/Aparelhos/Aparelhos.jsx';
import VizualizarAparelho from './assets/routes/VisualizarAparelho/VisualizarAparelho.jsx';
import Error from './assets/routes/Error/Error.jsx'

const router = createBrowserRouter([
  {
    path: '/', element: <App />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/aparelhos', element: <Aparelhos /> },
      { path: '/aparelhos/:id', element: <VizualizarAparelho /> }
    ]
  }
]);
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
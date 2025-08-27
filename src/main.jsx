import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import '~/styles/index.css'
import App from '~/app.jsx'
import {About, Resume, Project, Contact, Edit} from '~/views'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <About /> },        // default route
      { path: "resume", element: <Resume /> },
      { path: "portofolio", element: <Project /> },
      { path: "contact", element: <Contact /> },
      { path: "edit", element: <Edit /> },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)

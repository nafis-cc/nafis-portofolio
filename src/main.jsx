import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import '~/styles/index.css'
import App from '~/app'
import {About, Resume, Project, Contact} from '~/views/pages'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <About /> },        // default route
      { path: "resume", element: <Resume /> },
      { path: "portofolio", element: <Project /> },
      { path: "contact", element: <Contact /> },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)

import { StrictMode, Component } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import '~/styles/index.css'
import App from '~/app'
import {About, Resume, Project, Contact} from '~/views/pages'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: '40px', color: '#fff', background: '#0b1120', minHeight: '100vh', fontFamily: 'monospace' }}>
          <h2 style={{ color: '#14b8a6', marginBottom: '16px' }}>Something went wrong</h2>
          <pre style={{ color: '#f87171', fontSize: '13px', whiteSpace: 'pre-wrap' }}>
            {this.state.error.message}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <About /> },
      { path: "resume", element: <Resume /> },
      { path: "portofolio", element: <Project /> },
      { path: "contact", element: <Contact /> },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </StrictMode>
)

import "~/styles/app.css"
import { Aside, Navbar } from "./components"
import { Outlet } from "react-router-dom"

function App() {
  return (
    <>
      <Aside />
      <div className="main-content">
        <Navbar />
        <section className="content-section">
          <Outlet />
        </section>
      </div>
    </>
  )
}

export default App

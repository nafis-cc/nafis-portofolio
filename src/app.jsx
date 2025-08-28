import "~/styles/app.css";
import { Aside, Navbar } from "./components";
import { Outlet } from "react-router"; // ⬅️ kalau sudah migrasi ke v7, import dari "react-router"

function App() {
  return (
    <>
      <Aside />
      <div className="main-content">
        <Navbar />
        <section style={{ scrollBehavior: "smooth" }}>
          <Outlet />
        </section>
      </div>
    </>
  );
}

export default App;

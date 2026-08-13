import { Outlet } from "react-router-dom";
import { Aside } from "~/views/shared/components";
import Navbar from "../navbars/navbar";
import { useScrollReveal } from "~/scripts/useScrollReveal";

function Layout() {
  useScrollReveal();

  return (
    <main>
      <Aside />
      <div className="main-content">
        <Navbar />
        <section className="content-section">
          <Outlet />
        </section>
      </div>
    </main>
  );
}

export default Layout;

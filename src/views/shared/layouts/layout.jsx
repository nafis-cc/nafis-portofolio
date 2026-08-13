import { Outlet } from "react-router-dom";
import { Aside } from "~/views/shared/components";
import Navbar from "../navbars/navbar";

function Layout() {
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

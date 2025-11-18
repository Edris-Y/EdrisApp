// src/layouts/MainLayout.jsx
import { Outlet, NavLink } from "react-router-dom";

function MainLayout() {
  return (
    <div>
      <header>
        <nav className="nav">
          <NavLink to="/" className="nav-link">
            Accueil
          </NavLink>
          <NavLink to="/about" className="nav-link">
            À propos
          </NavLink>
        </nav>
      </header>

      <main className="main-content">
        {/* Ici s'affichent Home / About */}
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;

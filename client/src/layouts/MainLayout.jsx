import { Outlet } from "react-router-dom";
import BottomNav from "../components/BottomNav"; // Remplace Header Mobile
import TopNav from "../components/TopNav";       // Remplace Header Desktop
import Footer from "../components/Footer";       // Votre Footer existant
import { useEffect, useState } from "react";

const MainLayout = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Sur PC : On affiche le Menu du haut (Header) */}
      {!isMobile && <TopNav />}
      
      {/* Contenu principal de la page */}
      <main className="container" style={{ flex: 1 }}>
        <Outlet />
      </main>

      {/* Footer : On l'affiche généralement sur PC. Sur mobile, il est souvent caché par le menu du bas. */}
      {!isMobile && <Footer />}

      {/* Sur Mobile : On affiche le Menu du bas */}
      {isMobile && <BottomNav />}
    </div>
  );
};

export default MainLayout;
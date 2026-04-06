import Sidebar from "./pages/admin/Sidebar";
import Header from "./pages/admin/Header";
import Content from "./pages/admin/Content";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="layout-container">
      {/* 1. La Sidebar est maintenant le premier enfant, elle prend toute la hauteur à gauche */}
      <Sidebar />

      <div className="main-wrapper">
        {/* 2. Le Header est maintenant à l'intérieur du wrapper de droite */}
        <Header />

        {/* 3. Le contenu se trouve sous le header, à droite de la sidebar */}
        <main className="content">
          <Content/>
          {/* Vos routes ou composants ici */}
        </main>
      </div>
    </div>
  );
}

export default App;
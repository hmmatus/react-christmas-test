import "./App.scss";
import NavBar from "./components/modules/navbar/Navbar";
import ChristmasHeader from "./modules/christmas/components/header/Header";
import ChristMasCatalogDisplay from "./modules/christmas/components/catalog/Catalog";
import NewRelease from "./modules/christmas/components/newRelease/NewReleaseSection";
import Footer from "./components/modules/footer/Footer";
function App() {
  return (
    <>
      <NavBar />
      <main>
        <ChristmasHeader />
        <ChristMasCatalogDisplay />
        <NewRelease />
      </main>
      <Footer />
    </>
  );
}

export default App;

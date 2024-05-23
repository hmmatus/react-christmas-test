import "./App.scss";
import NavBar from "./components/modules/navbar/Navbar";
import ChristmasHeader from "./modules/christmas/components/header/Header";
import ChristMasCatalogDisplay from "./modules/christmas/components/catalog/Catalog";
function App() {
  return (
    <>
      <NavBar />
      <main>
        <ChristmasHeader />
        <ChristMasCatalogDisplay />
      </main>
    </>
  );
}

export default App;

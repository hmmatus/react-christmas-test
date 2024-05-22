import "./App.scss";
import NavBar from "./components/modules/navbar/Navbar";
import ChristmasHeader from "./modules/christmas/components/header/Header";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <ChristmasHeader />
      </main>
    </>
  );
}

export default App;

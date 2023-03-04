import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "./App.css";

const App: React.FC = () => {
  const links = [
    { id: 1, title: "Inicio", url: "/" },
    { id: 2, title: "Planes", url: "/about" },
    { id: 3, title: "¿Qué incluye?", url: "/contact" },
    { id: 4, title: "¿Cómo funciona?", url: "/contact" },
    { id: 5, title: "FAQs", url: "/about" },
    { id: 6, title: "Empieza ahora", url: "/about" },
  ];
  const buttonText = "Empieza ahora";
  const buttonUrl = "https://ww.google.com";

  return (
    <div className="App">
      <Navbar links={links} buttonText={buttonText} buttonUrl={buttonUrl} />
      <Home />
    </div>
  );
};

export default App;

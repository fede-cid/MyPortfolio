//React-Router-Dom
import { Routes, Route } from "react-router-dom";

// Estilos
import "../styles/index.css";

//Paginas
import Inicio from "./pages/Inicio";
//Componentes
import Setting from "./pages/Setting";
import CreateEvent from "./pages/CreateEvent";
import AboutUs from "./pages/AboutUs";
import FAQ from "./pages/FAQ";
import Help from "./pages/Help";
import Contact from "./pages/Contact";
// Context Producto
import ProductoState from "./context/producto/ProductoState";
import Error from "./pages/Error";
import Proyects from "./pages/Proyects";



function App() {
  return (
    <ProductoState>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/Help" element={<Help />} />
        <Route path="/proyects" element={<Proyects />} />
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </ProductoState>
  );
}

export default App;

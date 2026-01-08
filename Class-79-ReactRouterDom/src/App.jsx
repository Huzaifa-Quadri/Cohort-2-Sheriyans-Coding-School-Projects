import Home from "./Pages/Home";
import { Routes } from "react-router-dom";
import Product from "./Pages/Product";
import { Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import ClassRoom from "./Pages/Classroom";
import Cources from "./Pages/Cources";
import About from "./Components/About";
import Bootcamp from "./Pages/Bootcamp";
import BootcampDetail from "./Pages/BootcampDetail";
import NotFound from "./Pages/NotFound";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/classroom" element={<ClassRoom />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cources" element={<Cources />} />

        {/* Dynamic Routes */}
        <Route path="/about/:id" element={<About />} />

        {/* Nested/Detail Routes */}
        <Route path="/bootcamp" element={<Bootcamp />} />
        <Route path="/bootcamp/:id" element={<BootcampDetail />} />

        {/* Not Found Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;

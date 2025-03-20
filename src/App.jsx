import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/01-mainPages/Home";
import About from "./components/01-mainPages/About";
import Portfolio from "./components/01-mainPages/Portfolio";
import Contact from "./components/01-mainPages/Contact";
import Footer from "./components/footer";
import 'normalize.css';


export default function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <main className="mx-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>

    </Router>
  );
}
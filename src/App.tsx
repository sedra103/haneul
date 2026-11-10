import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Vocabulary from "./pages/Vocabulary";
import Collection from "./pages/Collection";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vocabulary" element={<Vocabulary />} />
      <Route path="/collection" element={<Collection />} />
    </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;


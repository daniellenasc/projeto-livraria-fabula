import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar"
import { Books } from "./pages/Books"
import { PostNewBook } from "./pages/PostNewBook"
import { Contact } from "./pages/Contact"
import { Home } from "./pages/Home"
function App() {
  return (
    <div className="App">  
    <Navbar />
    <BrowserRouter>
    <Navbar />
       <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/livros" element={<Books/>}/>
          <Route path="/cadastro" element={<PostNewBook />}/>
          <Route path="/contato" element={<Contact />}/>
      </Routes>
  </BrowserRouter>
    
    </div>
  );
}
export default App;
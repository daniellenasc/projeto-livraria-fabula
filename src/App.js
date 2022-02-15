import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar"
import { Books } from "./pages/Books"
 import { PostNewBook } from "./pages/PostNewBook"
 import {EditBook } from "./pages/EditBook"
import { Contact } from "./pages/Contact"
import { Home } from "./pages/Home"
function App() {
  return (
    <div className="App">  
    <BrowserRouter>
    <Navbar />
       <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/livros" element={<Books/>}/>
         <Route path="/cadastro" element={<PostNewBook />}/>
          <Route path="/contato" element={<Contact />}/>
          <Route path="/edit-cadastro/:id" element={<EditBook />}/>
          {/* <Route path="/detalhes/:id" element={<Detalhes />}/>*/}
      </Routes>
  </BrowserRouter>
    
    </div>
  );
}
export default App;
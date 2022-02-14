import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"
import {Books} from "./pages/Books"
function App() {
  return (
    <div className="App">  
    <Navbar />
    <BrowserRouter>
       <Routes>
      <Route path="/" element={<Books/>}/>
      </Routes>
  </BrowserRouter>
    <Footer />
    </div>
  );
}
export default App;
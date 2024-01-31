import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Brackets from './Pages/brackets.js';
import Boards from './Pages/boards.js';
import Nav from './components/Nav';


function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Brackets/>} />
        <Route path="/boards" element={<Boards/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

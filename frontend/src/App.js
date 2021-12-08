import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from '../src/Components/UI/NavBar/NavBar';
import Footer from '../src/Components/UI/Footer/Footer';
import Search from '../src/Components/Views/Search/Search';
import Game from '../src/Components/Views/Game/Game';
import Home from './Components/Views/Home/Home';

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/search" element={<Search/>} />
        <Route path="/game/:slug" element={<Game/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

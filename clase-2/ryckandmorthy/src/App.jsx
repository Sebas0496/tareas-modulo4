import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import CharacterPage from "./components/pages/CharacterPage";
import EpisodesPage from "./components/pages/EpisodesPage"; 
import NotFound from "./components/pages/404";
import './App.css'

function App() {
    
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/characters'>Character</Link>
          </li>
          <li>
            <Link to='/Episodes'>Episodios</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>} />
        <Route path="/characters" element={<CharacterPage></CharacterPage>} />
        <Route path="/episodes" element={<EpisodesPage></EpisodesPage>}/>
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
    </Router>
  )
}
export default App;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './home/Home';
import About from './about/About';
import Expo from './expo/Expo';
import Blog from './blog/Blog';
import Visitante from './other/Visitante';
import Events from './other/Events';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/expo" element={<Expo />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/events" element={<Events />} />
          <Route path="/visitor" element={<Visitante />} />
        </Routes>
      </Router>

  );
}

export default App;

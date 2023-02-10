import {
  Route, Routes,
} from 'react-router-dom';

import './App.css';
import Header from './components/header/Header';

import Home from './components/Home/Home';
import About from './components/About/About';
import Mockup from './components/Mockup/mockup';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="seemore" element={<Mockup />} />
    </Routes>
  </>
);

export default App;

import {
  Route, Routes,
} from 'react-router-dom';

import './App.css';
import Header from './components/header/Header';

import Home from './components/Home/Home';
import About from './components/About/About';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
    </Routes>
  </>
);

export default App;

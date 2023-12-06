import './App.css';
import Buttons from './Buttons';
import Column1 from './Column1';
import Column2 from './Column2';
import Column3 from './Column3';
import Column4 from './Column4';
import Navbar from './Navbar'
import Table from './Table';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Buttons />} />
          <Route path="/home" element={<Table />} />
          <Route path="/Column1" element={<Column1 />} />
          <Route path="/Column2" element={<Column2 />} />
          <Route path="/Column3" element={<Column3 />} />
          <Route path="/Column4" element={<Column4 />} />

          <Route path="/Column1" element={<Column1 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

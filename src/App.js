import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import ScatterPlot from './components/ScatterPlot';
import BarGraph from './components/BarGraph';
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ScatterPlot />} />
        <Route path="/bargraph" element={<BarGraph />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

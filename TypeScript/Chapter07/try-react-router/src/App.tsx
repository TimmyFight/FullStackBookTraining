import {Routes, Route} from 'react-router-dom';
import './App.css';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';
import ScreenC from './ScreenC';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<ScreenA />} />
        <Route path="/b" element={<ScreenB />} />
        <Route path="/c/:userid" element={<ScreenC message="Message to component C" />} />
      </Routes>
    </div>
  );
}

export default App;

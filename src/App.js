import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home/Home';

import Header from './components/Sheared-Component/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path="/home" element={<Home></Home>} />
      </Routes>

    </div>
  );
}

export default App;

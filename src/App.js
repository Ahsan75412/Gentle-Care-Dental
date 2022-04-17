import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home/Home';
import ServiceDetail from './components/ServiceDetail/ServiceDetail';

import Header from './components/Sheared-Component/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>} />
        <Route path="/service/:serviceId" element={<ServiceDetail></ServiceDetail>}></Route>
       
      </Routes>

    </div>
  );
}

export default App;

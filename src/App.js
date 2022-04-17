import { Route, Routes } from 'react-router-dom';
import './App.css';
import CheckOut from './CheckOut/CheckOut';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import RequireAuth from './components/Login/RequreAuth/RequireAuth';
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
        <Route path="/login" element={<Login></Login>}></Route>

        <Route path="/checkout" element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        }></Route>
       
      </Routes>

    </div>
  );
}

export default App;

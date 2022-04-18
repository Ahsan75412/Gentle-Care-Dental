import { Route, Routes } from 'react-router-dom';
import './App.css';
import CheckOut from './CheckOut/CheckOut';
import About from './components/About/About';
import Blogs from './components/Home/Blogs/Blogs';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';
import RequireAuth from './components/Login/RequreAuth/RequireAuth';
import ServiceDetail from './components/ServiceDetail/ServiceDetail';
import Footer from './components/Sheared-Component/Footer/Footer';

import Header from './components/Sheared-Component/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>} />
        <Route path="/service/:serviceId" element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path="/about" element={<About></About>} />
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>

        <Route path="/checkout" element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        }></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
       
      </Routes>

      <Footer></Footer>

    </div>
  );
}

export default App;

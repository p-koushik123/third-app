import './App.css';
import {Routes,Route} from 'react-router-dom';
import Profileu from './components1/Profileu';
import Navbar from './components1/Navbar';
import Home from './components1/Home';
import About from './components1/About';
import Products from './components1/Products';
import Featured from './components1/Featured';
import OrderSummary from './components1/OrderSummary';
import NewProducts from './components1/NewProducts';
import Nomatch from './components1/Nomatch';
import Users from './components1/Users';
import UserDetails from './components1/UserDetails';
import { AuthProvider } from './components1/auth';
import Login from './components1/Login';
import RequireAuth from './components1/RequireAuth';
function App() {
  return (
    <>
    <AuthProvider>
     <Navbar />
     <Routes>
      <Route path="/"  element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="order-summary" element={<OrderSummary />} />
      <Route path="products" element={<Products />} >
        <Route path="featured" element={<Featured />} />
        <Route path="new" element={<NewProducts />} />
      </Route>
      <Route path="users" element={<Users />} >
        <Route path=":userId" element={<UserDetails/>} />
      </Route>
      <Route path="profileu" element={<RequireAuth><Profileu /></RequireAuth>} />
      <Route path="login" element={<Login/>} />
      <Route path="*" element={<Nomatch />} />
     </Routes>
     </AuthProvider>
    </>
  );
}

export default App;

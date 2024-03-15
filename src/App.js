import React,{useState} from "react";
//import { LoginUser } from "./LoginForm/LoginUser";
import {Route,Routes} from 'react-router-dom';
import { Navbar } from "./Navigation/Navbar";
import { About } from "./Pages/About";
import { Home } from "./Pages/Home";
import {Search} from './Pages/Search'
import {Todo} from './Pages/Todo'
import {Vegetables} from './Pages/Vegetables'
import {Groceries} from './Pages/Groceries'
import { LoginuserDetails } from "./LoginUser/LoginuserDetails";
import { Mycart } from "./Pages/Mycart";
import { Feedback } from "./Feedback/Feedback";
function App() {
  const [cart,setCart] = useState([]);
  const [price,setPrice] = useState(1);
  return (
    <div>
    {/* <LoginUser /> */}
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/about/feedback" element={<Feedback />} />
      <Route path="/search" element={<Search />} />
      <Route path="/todo" element={<Todo />} />
      <Route path="/vegetables" element={<Vegetables cart={cart} setCart={setCart} price={price} setPrice={setPrice} />} />
      <Route path="/fruits" element={<Groceries />} />
       <Route path="/singup" element={<LoginuserDetails />} />
       <Route path="/singup/home" element={<Home />} />
       <Route path="/vegetables/cartlogo" element={<Mycart price={price} />} />
      
    </Routes>
    </div>
  );
}

export default App;

import "./App.css";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Books from "./pages/Books.jsx"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { books } from "./data";
import BookInfo from "./pages/BookInfo.jsx";
import Cart from "./pages/Cart.jsx";
import React, { useEffect, useState } from "react";


function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, {...book, quantity: 1}]);
  }

  function changeQuantity(book, quantity) {
    setCart(
      cart.map((item) => 
        item.id === book.id 
        ? 
        { ...item, quantity: +quantity, }
        : item
      )
    );
  }
  
  
  function removeItem(item){
    setCart(cart.filter(book => book.id !== item.id))
  }

  useEffect(() => {
    console.log(cart)
  },[cart])

  return (
    <Router>
      <div className="App">
        <Nav></Nav>
        <Routes>
          <Route path="/" exact element={<Home></Home>} ></Route>
          <Route path="/books" exact element={ <Books books={books}></Books>} ></Route>
          <Route path="/books/:id" element={<BookInfo books={books} addToCart={addToCart}> </BookInfo> } />
          <Route path="/cart" element={<Cart books={books} cart={cart} changeQuantity={changeQuantity} removeItem={removeItem} > </Cart> } />
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
}
export default App;

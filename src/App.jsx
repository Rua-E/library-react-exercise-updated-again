import "./App.css";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Books from "./pages/Books.jsx"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { books } from "./data";
import BookInfo from "./pages/BookInfo.jsx";
import Cart from "./pages/Cart.jsx";
import React, { useState } from "react";


function App() {
  const [cart, setcart] = useState([]);

  function addToCart(book) {
    console.log('add to cart', book)
  }

  return (
    <Router>
      <div className="App">
        <Nav></Nav>
        <Routes>
          <Route path="/" exact element={<Home></Home>} ></Route>
          <Route path="/books" exact element={ <Books books={books}></Books>} ></Route>
          <Route path="/books/:id" element={<BookInfo books={books} addToCart={addToCart}> </BookInfo> } />
          <Route path="/cart" element={<Cart books={books}> </Cart> } />
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
}
export default App;

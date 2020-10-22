import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="py-3">
          <Container>
            <Route path="/" exact component={HomeScreen} />
            <Route path="/product/:id" exact component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
          </Container>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

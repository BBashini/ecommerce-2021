import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product"
import Register from "./pages/Register";
import Login from "./pages/Login"
import Cart from "./pages/Cart";


const App = () => {
  return (
  <Router basename="/ecommerce-2021">
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/products/:category">
      <ProductList />
    </Route>
    <Route path="/product/:id">
      <Product />
    </Route>
    <Route path="/cart">
      <Cart />
    </Route>
    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
     <Register />
    </Route>
  </Switch>
</Router>
  );
};

export default App;
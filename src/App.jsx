import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import HeaderComponent from "./components/HeaderComponent";
import ProductsDetalPage from "./pages/ProductDetilPage";
import ContactPage  from "./pages/ContactPage"; 

function App() {
  return (
    <Router>
      <HeaderComponent />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path ="/product" component={ProductsDetalPage}/>
        <Route exact path= "/contact" component= {ContactPage}/> 
      </Switch>
    </Router>
  );
}

export default App;

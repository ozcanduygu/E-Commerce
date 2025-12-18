import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import HeaderComponent from "./components/HeaderComponent";
import ProductsDetalPage from "./pages/ProductDetilPage";
import ContactPage  from "./pages/ContactPage"; 
import TeamPage from "./pages/TeamPage";
import AboutPage from "./pages/AboutPage";
import SignupPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import { useDispatch } from "react-redux";

function App() {
    const dispatch = useDispatch();
    dispatch({
  type: "SET_THEME",
  payload: "dark",
});

  return (
    
    <Router>
      <HeaderComponent />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path ="/product" component={ProductsDetalPage}/>
        <Route exact path= "/contact" component= {ContactPage}/> 
        <Route exact path="/team" component={TeamPage}/>
        <Route exact path="/about" component={AboutPage}/>
        <Route exact path="/signup" component={SignupPage}/>
        <Route exact path="/login" component={LoginPage} />
      </Switch>
    </Router>
  );
}

export default App;

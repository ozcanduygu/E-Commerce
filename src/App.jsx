import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import HeaderComponent from "./components/HeaderComponent";

function App() {
  return (
    <Router>

      {/* TÜM SAYFALARDA HEADER */}
      <HeaderComponent />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>

    </Router>
  );
}

export default App;

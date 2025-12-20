import { useEffect } from "react"; // 1. useEffect'i ekledik
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import HeaderComponent from "./components/HeaderComponent";
import ProductsDetalPage from "./pages/ProductDetilPage";
import ContactPage from "./pages/ContactPage";
import TeamPage from "./pages/TeamPage";
import AboutPage from "./pages/AboutPage";
import SignupPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import { useDispatch } from "react-redux";
// 2. fetchRoles aksiyonunu import et (Dosya yolunu kendi yapına göre kontrol et!)
import { fetchRoles,verifyToken } from "./store/actions/clientActions"; 
import { fetchCategories } from "./store/actions/productActions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // 3. Uygulama açıldığında bir kez çalışacak işlemler
    
    // Temayı karanlık yap
    dispatch({
      type: "SET_THEME",
      payload: "dark",
    });

    // Roller eğer store'da yoksa API'den çek
    dispatch(fetchRoles());
    
  }, [dispatch]); // Dependency array: Sadece mount anında çalışır

  useEffect(() => {
  // Temayı ayarla
  dispatch({ type: "SET_THEME", payload: "dark" });
  
  // Önce rolleri çek
  dispatch(fetchRoles());

  // SONRA: Token kontrolü yap ve kullanıcıyı otomatik giriş yaptır
  dispatch(verifyToken());
}, [dispatch]);
useEffect(() => {
  dispatch(fetchRoles());
  dispatch(verifyToken());
  dispatch(fetchCategories()); // <-- Buraya ekledik
}, [dispatch]);
  return (
    <Router>
      <HeaderComponent />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/product" component={ProductsDetalPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/team" component={TeamPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/login" component={LoginPage} />
      </Switch>
    </Router>
  );
}

export default App;
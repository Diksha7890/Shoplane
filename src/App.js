import CartPage from "./Pages/CartPage";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Electronics from "./Components/Electronics";
import Jewelery from "./Components/Jewelery";
import MensCategory from "./Components/MensCategory";
import WomensClothing from "./Components/WomensCategory";
import FavouritePage from "./Pages/Favourite_Page.jsx";
import store from "./ReduxToolkit/store";
import { Provider } from "react-redux";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products/electronics" element={<Electronics />} />
            <Route path="/products/jewelery" element={<Jewelery />} />
            <Route path="/products/mensClothing" element={<MensCategory />} />
            <Route
              path="/products/womensClothing"
              element={<WomensClothing />}
            />
            <Route path="/signupPage" element={<SignupPage />} />
            <Route path="/LoginPage" element={<LoginPage />} />
            <Route path="/CartPage" element={<CartPage />} />
            <Route path="/FavouritePage" element={<FavouritePage />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;

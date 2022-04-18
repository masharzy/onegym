import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Header from "./Pages/Shared/Header/Header";
import Checkout from "./Pages/Checkout/Checkout";
import Login from "./Pages/Auth/Login/Login";
import RequireAuth from "./Pages/Auth/RequireAuth/RequireAuth";
import Register from "./Pages/Auth/Register/Register";
import NotFound from "./Pages/Shared/NotFound/NotFound";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

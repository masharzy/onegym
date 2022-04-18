import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Header from "./Pages/Shared/Header/Header";
import Checkout from "./Pages/Checkout/Checkout";
import Login from "./Pages/Auth/Login/Login";
import RequireAuth from "./Pages/Auth/RequireAuth/RequireAuth";
import Register from "./Pages/Auth/Register/Register";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import About from "./Pages/About/About";
import Blogs from "./Pages/Blogs/Blogs";
import ResetPassword from "./Pages/Auth/ResetPassword/ResetPassword";

function App() {
  return (
    <div>
      {/* Header Component */}
      <Header />
      {/* All Routes */}
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<Home />} />
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }
        />
        {/* Blogs Route */}
        <Route path="/blogs" element={<Blogs />} />
        {/* About Route */}
        <Route path="/about" element={<About />} />
        {/* Register Route */}
        <Route path="/register" element={<Register />} />
        {/* Login Route */}
        <Route path="/login" element={<Login />} />
        {/* Password Reset Route */}
        <Route path="/reset-password" element={<ResetPassword />} />
        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

import "./App.css";
import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import { Book } from "./Pages/Book";
import { Password_recovery } from "./Pages/password_recovery";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      {/* <div className="header">
        <p>this is header</p>
      </div> */}
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/book" element={<Book />} />
          <Route path="password_recovery" element={<Password_recovery />} />
          <Route path="Home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

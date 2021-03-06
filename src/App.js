import "./App.css";
import BooksList from "./Components/BooksList";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<BooksList />}></Route>
          <Route exact path="/Signup" element={<Signup />}></Route>
          <Route exact path="/Login" element={<Login />}></Route>
          <Route exact path="/BooksList" element={<BooksList />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

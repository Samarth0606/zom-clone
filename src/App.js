import Header from "./components/Header/Header";
import "./app.scss";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
     {/* <Home/> */}
     {/* <Header/> */}
     <Routes>
        <Route path="/" element={ <Header/> }  />
        <Route path="/signup" element={ <Signup/> }  />
        <Route path="/login" element={ <Login/> } />
     </Routes>
    </div>
  );
}

export default App;

import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from "./Login/index";
import {Header} from "./Header";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/accueil/" element= {<Header />} ></Route>
      </Routes>
    </>
  );
}

export default App;

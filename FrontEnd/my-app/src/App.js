import logo from "./logo.svg";
import "./App.css";
import Login from "./Login";
import Register from "./Register";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <main className="App">
      <Register />
    </main>
  );
}

export default App;
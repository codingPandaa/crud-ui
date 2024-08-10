import "./App.css";
import AddUsers from "./components/AddUsers";
import AllUsers from "./components/AllUsers";
import Crud from "./components/Crud";
import EditUser from "./components/EditUser";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Crud></Crud>}></Route>
        <Route path="/all" element={<AllUsers></AllUsers>}></Route>
        <Route path="/add" element={<AddUsers></AddUsers>}></Route>
        <Route path="/edit/:id" element={<EditUser></EditUser>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

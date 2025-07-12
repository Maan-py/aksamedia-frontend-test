import { Navigate, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { useState } from "react";
import { getFromLocalStorage } from "./utils";
import Navbar from "./components/Navbar";
import EditProfile from "./pages/EditProfile";
function App() {
  const [user, setUser] = useState(getFromLocalStorage());
  return (
    <>
      {user?.name && <Navbar user={user.name} setUser={setUser} />}
      <Routes>
        <Route path="/" element={user?.name ? <Home user={user.name}></Home> : <Login setUser={setUser}></Login>}></Route>
        <Route path="/login" element={user ? <Navigate to={"/"}></Navigate> : <Login setUser={setUser}></Login>}></Route>
        <Route path="/edit-profile" element={user?.name ? <EditProfile user={user} setUser={setUser}></EditProfile> : <Login setUser={setUser}></Login>}></Route>
      </Routes>
    </>
  );
}

export default App;

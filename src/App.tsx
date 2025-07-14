import { Navigate, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { useState } from "react";
import { getFromLocalStorage } from "./utils";
import Navbar from "./components/Navbar";
import EditProfile from "./pages/EditProfile";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Create from "./pages/Create";
import Update from "./pages/Update";

function App() {
  const [user, setUser] = useState(getFromLocalStorage());
  return (
    <body className="bg-blue-100">
      {user?.name && <Navbar user={user.name} setUser={setUser} />}
      <Routes>
        <Route path="/" element={user?.name ? <Home /> : <Login setUser={setUser} />}></Route>
        <Route path="/login" element={user ? <Navigate to={"/"} /> : <Login setUser={setUser} />}></Route>
        <Route path="/edit-profile" element={user?.name ? <EditProfile user={user} setUser={setUser} /> : <Login setUser={setUser} />}></Route>
        <Route path="/dashboard" element={user?.name ? <Dashboard /> : <Login setUser={setUser} />}></Route>
        <Route path="/dashboard/create" element={user?.name ? <Create /> : <Login setUser={setUser} />}></Route>
        <Route path="/dashboard/update/:id" element={user?.name ? <Update /> : <Login setUser={setUser} />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </body>
  );
}

export default App;

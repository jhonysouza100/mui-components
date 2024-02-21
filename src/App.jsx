import { Container } from "@mui/material";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";


const navLinks = [
  {title: "Home", path: "/"},
  {title: "Login", path: "/login"},
  {title: "Register", path: "/register"},
]

function App() {
  return (
    <>
      <NavBar navLinks={navLinks} />
      <Container maxWidth="md" sx={{mt: 10}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
//FILE TO CENTRALIZE COMPONENT EXPORTS

//Import components
import NavLogo from "./components/navbar/NavLogo";
import NavLink from "./components/navbar/NavLink";
import NavSearch from "./components/navbar/NavSearch";
import NavToggle from "./components/navbar/NavToggle";
import DropdownLink from "./components/navbar/DropdownLink";

//Export components
export {NavLogo, NavLink, NavSearch, NavToggle, DropdownLink};

//Import containers
import Navbar from "./containers/Navbar";
import Footer from "./containers/Footer";
import Input from "./containers/Input";

//Export containers
export {Navbar, Footer, Input};

//Import page components
import Home from "./pages/Home";
import Algorithm from "./pages/Algorithm";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";

//Export page components
export {Home, Algorithm, About, SignIn, SignUp, NotFound};

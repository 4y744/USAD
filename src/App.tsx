//Import React hooks
import { useState } from "react";

//Import React Router hooks
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Import Firebase hooks
import { auth } from "./firebase"
import { User, onAuthStateChanged, signOut } from "firebase/auth";

//Import components


//Import containers
import {Navbar, Footer} from "./exports";

//Import page components
import { Home, About, Algorithm, NotFound, SignIn, SignUp } from "./exports"

//DEPRECATED!!! REMOVE!!!
import Register from "./pages/Register";
import Login from "./pages/Login";

//Import i18n hooks
import './locale/config';


export default function App()
{
  const [currentUser, setCurrentUser] = useState<User>();

  onAuthStateChanged(auth, (user) => {
    setCurrentUser(user!);
  })

  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="about" element={<About/>}/>
              <Route path="algorithm/:id" element={<Algorithm/>}></Route>
              <Route path="*" element={<NotFound/>}></Route>
            </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

/*
TODO: ADD TO NAVBAR
          <Register/>
          <Login />
          <div>Logged in user: {currentUser?.email}</div>
          <button onClick={async () => {await signOut(auth)}}>Sign out</button>
*/
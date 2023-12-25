//Import React hooks
import { useState } from "react";
import { Suspense } from "react";
//Import React Router hooks
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Import Firebase hooks
import { auth } from "./firebase"
import { User, onAuthStateChanged, signOut } from "firebase/auth";

//Import components


//Import containers
import { Navbar, Footer, Loading } from "./exports";

//Import page components
import { HomePage, AboutPage, AlgorithmPage, NotFoundPage, SignInPage, SignUpPage } from "./exports"

//Import i18n hooks
import './locale/config';


export default function App() {
  const [currentUser, setCurrentUser] = useState<User>();

  onAuthStateChanged(auth, (user) => {
    setCurrentUser(user!);
  })

  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="algorithm/:id" element={<AlgorithmPage />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
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
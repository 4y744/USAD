//Import React hooks
import { useState } from "react";

//Import React Router hooks
import { BrowserRouter } from "react-router-dom";

//Import components
import { RouterContainer } from "./libs/routes";

//Import containers
import { Navbar, Sidebar, Footer, Loading } from "./libs/exports";

//Import i18n hooks
import './locale/config';


export const App = () => {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <div className="md:ml-14 md:mb-0 md:mt-14 mt-16">
          <RouterContainer/>
          <Footer/>
        </div>
        <Sidebar/>
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
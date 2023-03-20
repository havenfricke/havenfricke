import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login.jsx";
import '../utils/hideNavOnScroll'
import './styles/Navbar.scss'

export function Navbar() {



  return (
    <nav id="navbar" className="container-fluid bg-dark px-3 shadow-lg">

      <div className="row d-flex justify-content-between align-items-center">
        {/* <div className="col-0"> */}
          {/* <img src="src\assets\img\void.gif" height="100"/> */}
        {/* </div> */}
  
  
        
          <div className="col-9">
          <Link to={''} className="btn text-light lighten-40 px-2 selectable text-uppercase">
              Home
          </Link>
          <Link to={'portfolio'} className="btn text-light lighten-40 px-2 selectable text-uppercase">
              Portfolio
          </Link>
          <Link to={'contact'} className="btn text-light lighten-40 px-2 selectable text-uppercase">
              Contact
          </Link>
          </div>
          
      

      </div>
       

       
        

      
        

    </nav >
  )
}
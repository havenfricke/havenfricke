import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login.jsx";
import '../utils/hideNavOnScroll'
import './styles/Navbar.scss'

export function Navbar() {



  return (
    <nav id="navbar" className="container-fluid bg-dark px-3 shadow-lg">
      <h1 aria-hidden="true" className="d-none">Haven Fricke</h1>
      <div className="row d-flex justify-content-between align-items-center">
        {/* <div className="col-0"> */}
          {/* <img src="src\assets\img\void.gif" height="100"/> */}
        {/* </div> */}

  
        
          <div className="col-12">
          <Link to={''} className="btn text-light lighten-40 px-2 selectable text-uppercase navRedux">
              <span className="shadow-text">Home</span>
          </Link>
          <Link to={'portfolio'} className="btn text-light lighten-80 px-2 selectable text-uppercase navRedux">
              <span className="shadow-text">Portfolio</span>
          </Link>
          <Link to={'contact'} className="btn text-light lighten-80 px-2 selectable text-uppercase navRedux">
              <span className="shadow-text">Contact</span>
          </Link>
          <Link to={'demo'} className="btn text-light lighten-80 px-2 selectable text-uppercase navRedux">
              <span className="shadow-text" >Demo</span>
          </Link>
          </div>
          
      

      </div>
       

       
        

      
        

    </nav >
  )
}
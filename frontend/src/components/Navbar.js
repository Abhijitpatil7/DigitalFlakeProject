import React from "react";
import {Link } from "react-router-dom";

class Navbar extends React.Component {

 

  render() {
    return (
      <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top" >
        <Link className="navbar-brand" to="#" style={{color:"	yellowgreen", marginLeft: "20px" }}>
         DigitalFlake Portal
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/showcategory" style={{color:"	yellowgreen"}}>
              Show Category
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/showproduct" style={{color:"	yellowgreen"}}>
             Show Product
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/addproduct" style={{color:"	yellowgreen"}}>
              Add Product
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/addcategory" style={{color:"	yellowgreen"}}>
              Add Category
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/" style={{color:"	yellowgreen"}} onClick={ JSON.stringify(localStorage.removeItem('token'))}>
             Logout
              </Link>
            </li>
            
          </ul>
        </div>
      </nav>
     <h3>Welcome to Home Page
     </h3> 
     </>

    );
  }
}

export default Navbar;

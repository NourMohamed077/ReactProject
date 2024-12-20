import 'bootstrap/dist/css/bootstrap.min.css'; 
import "bootstrap/dist/js/bootstrap.bundle";
import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark" style={{background: '#091057'}}>
      <div className="container-fluid">
        <a className="navbar-brand"><img src="https://static.vecteezy.com/system/resources/previews/011/015/345/non_2x/security-concept-secure-information-3d-render-personal-data-free-png.png" height="50"></img></a>
        <a className="navbar-brand">Berimbolo Security</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" href="/">Home</a>
            <a className="nav-link active" href="/Products">Products</a>
            <a className="nav-link active" href="/Shopping-Cart">Shopping Cart</a>
            <a className="nav-link active" href="/About-Us">About Us</a>
            <a className="nav-link active" href="/Contact-Us">Contact Us</a>
          </div>
        </div>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
          <button className="btn btn-primary" type="submit">Search</button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
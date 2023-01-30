import React, { useEffect, useState } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import { Link } from "react-router-dom";

export const NavView = () => {
  const [nomUser,setnomUser]=useState('');
  useEffect(()=>{
      setnomUser(localStorage.getItem("U"));
  },[])
  const logOut = async (e)=>{
    localStorage.clear();       
};
  return (

    <nav className="navbar navbar-inverse">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-nav" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link className="navbar-brand" to="/View/Home"><i className="fa fa-home"></i> HomePage</Link>
        
        </div>
        <div className="collapse navbar-collapse menu_bar" id="app-nav">
        <ul className="nav navbar-nav navbar-left">
            <li>
              <Link to="/View/MaterielsView">Material</Link>
            </li>
            
            <li>
              <Link to="/View/FournituresView">Fourniture</Link>
            </li>
                    
          </ul>
        
          <ul className="nav navbar-nav navbar-right">
            
            <li><Link to="/View/Profile">Mon Profile</Link></li>
            <li><Link to="/" onClick={(e)=>logOut()}>Déconnexion</Link></li>
                    
          </ul>
          
        </div>
      </div>
    </nav>

  )
}

export default NavView
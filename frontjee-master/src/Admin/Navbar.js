import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../node_modules/bootstrap/dist/js/bootstrap'


export const Navbar = () => {
    const logOut = async (e)=>{
        localStorage.clear();       
};
const [nomUser,setnomUser]=useState('');
useEffect(()=>{
   setnomUser(localStorage.getItem('U'));
},[])
const handleClick = () => {
    const url = "http://localhost:9090/download-csv";
    window.location.href = url;
};
const handleClick2 = () => {
    const url = "http://localhost:9090/pdf";
    window.location.href = url;
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
                    <Link className="navbar-brand" to="/Admin/AdminHome">Home</Link>
                </div>
                <div className="collapse navbar-collapse" id="app-nav">
                    <ul className="nav navbar-nav">
                        <li><Link to="/Admin/Membres">Membres</Link></li>
                        <li><Link to="/Admin/Materiels">Matérièls</Link></li>
                        <li><Link to="/Admin/Fournitures">Fournitures</Link></li>  
                        <li><Link to="/Admin/DemandesMateriel">Demmande Materiels</Link></li> 
                        <li><Link to="/Admin/DemandesFrn">Demmande fourniturs</Link></li>                      
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        
                                <li><Link onClick={handleClick2}>pdf</Link></li>
                                <li><Link onClick={handleClick}>csv</Link></li>
                                <li><Link to="/Admin/AdminEdit">Edit Profile</Link></li>
                                <li><Link to="/" onClick={(e)=>logOut()}>Déconnexion</Link></li>                         
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
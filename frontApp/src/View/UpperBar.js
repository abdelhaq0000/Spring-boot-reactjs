import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../front.css'
import { Link } from "react-router-dom";

export const UpperBar = () => {
    const logOut = async (e)=>{
        localStorage.clear();       
};
    return (
        <div className="upper-bar">
            <div className="container">
                <div className="btn-group my-info">
                    <span className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                        Enseignant
                        <span style={{ marginLeft: "8px" }} className="caret"></span>
                    </span>
                    <ul className="dropdown-menu">
                        <li><Link to="/View/Profile">Mon Profile</Link></li>
                        <li><Link to="/" onClick={(e)=>logOut()}>Déconnexion</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default UpperBar
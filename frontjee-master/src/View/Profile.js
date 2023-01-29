import React, { useEffect, useState } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import NavView from './NavView'
import MesMat from './MesMat'
import UpperBar from "./UpperBar";
import axios from 'axios'
export const Profile = () => {
    const [user,setUser]=useState('');
    const [nom,setnome]=useState('');
    const [email,setEmail]=useState('');
    const [fullName,setFulname]=useState('');
    const [CIN,setCIN]=useState('');
    const [type,setType]=useState('');
    const [grade,setgrade]=useState('');
    const [tele,setTele]=useState('');
    const [NB,setNB]=useState('');

    useEffect(() => {
        loadUser();
        console.log(nom);
	}, []);
    const loadUser = async ()=>{
        const res = await axios.get(`http://localhost:9090/user/${localStorage.getItem("idU")}`);
        console.log(res.data)
        setnome(res.data.userName);
        setEmail(res.data.email);
        setCIN(res.data.cin)
        setFulname(res.data.fullName)
        setNB(res.data.numeroBureau)
        setgrade(res.data.grade)
        setTele(res.data.tele)
        setType(res.data.typeUser);
        console.log(localStorage.getItem("idU"))
        
        
    }
    return (
        <>
            <NavView />
            <div class="information block">
                <div class="container">
                    <h1 class="text-center">Mon Profile</h1>
                    <div class="panel panel-primary">
                        <div class="panel-heading">Mes Informations</div>
                        <div class="panel-body">
                            <ul>
                                <li>
                                    <i class="fa fa-unlock-alt fa-fw"></i>
                                    <span style={{ width: "20%" }}>Nom d'utilisateur</span> :{nom}
                                </li>
                                <li>
                                    <i class="fa fa-envelope fa-fw"></i>
                                    <span style={{ width: "20%" }}>Email</span> : {email}
                                </li>
                                <li>
                                    <i class="fa fa-user fa-fw"></i>
                                    <span style={{ width: "20%" }}>Nom & Prénom</span> : {fullName}
                                </li>
                                <li>
                                    <i class="fa fa-address-card fa-fw"></i>
                                    <span style={{ width: "20%" }}>CIN</span> : {CIN}
                                </li>
                                <li>
                                    <i class="fa fa-male fa-fw"></i>
                                    <span style={{ width: "20%" }}>Type</span> : {type}
                                </li>
                                <li>
                                    <i class="fa fa-graduation-cap fa-fw"></i>
                                    <span style={{ width: "20%" }}>Grade</span> : {grade}
                                </li>
                                <li>
                                    <i class="fa fa-phone fa-fw"></i>
                                    <span style={{ width: "20%" }}>Téléphone</span> : {tele}
                                </li>
                                <li>
                                    <i class="fa fa-building fa-fw"></i>
                                    <span style={{ width: "20%" }}>Numéro de Bureau</span> : {NB}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <MesMat />
        </>
    )
}

export default Profile
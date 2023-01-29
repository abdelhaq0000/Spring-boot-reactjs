import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

export default function AdminEdit() {
    const {id}=useParams()

    let navigate=useNavigate();
    const [user,setuser]=useState({
            idU: "",
            email: "",
            grade: "",
            mdp: "",
            r: "",
            dataInscription: "",
            statu: 0,
            typeUser: "",
            role: [
              {
                idR: 4,
                rolename: "",
                roleDescription: ""
              }
            ],
            fullName: "",
            userName: "",
            numeroBureau: "",
            cin: "",
            tele: ""
          }
     )

    

    const{userName,email,mdp,fullName,tele,numeroBureau}=user
    const onInputChange=(e)=>{
            setuser({...user,[e.target.name]:e.target.value})
    }
    
    const loadUser=async(e)=>{
        const result = await axios.get(`http://localhost:9090/user/4`);
        result.data.mdp="";
        setuser(result.data);
    }

    useEffect(()=>{
        console.log(user)
        loadUser();
    },[])
    const onSubmit=async(e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:9090/updateUser/{id}?id=${4}`,user)
        navigate("/Admin/Membres")
     
     };
    return (
        <>
            <Navbar />
            <div className="container">
                <h1 className="text-center">Editer Mes Infos</h1>
                <form onSubmit={(e) => onSubmit(e)} className="form-horizomtal">
                    <div className="form-group form-group-lg">
                        <label className="col-sm-2 control-label">Username</label>
                        <div className="col-sm-10 col-md-9">
                            <input type="text" value={userName} name="userName" className="form-control"
                                required="required" autoComplete="off"
                                placeholder="Username"
                                onChange={(e) => onInputChange(e)} />
                        </div>
                    </div>
                    <div className="form-group form-group-lg">
                        <label className="col-sm-2 control-label">Password</label>
                        <div className="col-sm-10 col-md-9">
                            <input type="password" value={mdp} name="mdp"
                                className="password form-control" autoComplete="new-password"
                                required="required" placeholder="Saisir un password compléxe"
                                onChange={(e) => onInputChange(e)} />
                            <i className="show-pass fa fa-eye fa-1x"></i>
                        </div>
                    </div>
                    <div className="form-group form-group-lg">
                        <label className="col-sm-2 control-label">Email</label>
                        <div className="col-sm-10 col-md-9">
                            <input type="email" value={email} name="email" className="form-control"
                                required="required" placeholder="Email"
                                onChange={(e) => onInputChange(e)} />
                        </div>
                    </div>
                    <div className="form-group form-group-lg">
                        <label className="col-sm-2 control-label">Nom & Prenom</label>
                        <div className="col-sm-10 col-md-9">
                            <input type="text" value={fullName} name="fullName" className="form-control"
                                required="required" placeholder="Nom et Prenom"
                                onChange={(e) => onInputChange(e)} />
                        </div>
                    </div>
                    <div className="form-group form-group-lg">
                        <label className="col-sm-2 control-label">Téléphone</label>
                        <div className="col-sm-10 col-md-9">
                            <input type="text" value={tele} name="tele" className="form-control"
                                required="required" placeholder="Numéro de Téléphone"
                                onChange={(e) => onInputChange(e)} />
                        </div>
                    </div>
                    <div className="form-group form-group-lg">
                        <label className="col-sm-2 control-label">Bureau</label>
                        <div className="col-sm-10 col-md-9">
                            <input type="text" value={numeroBureau} name="numeroBureau" className="form-control"
                                required="required" placeholder="Numéro de Bureau"
                                onChange={(e) => onInputChange(e)} />
                        </div>
                    </div>

                    <div className="form-group form-group-lg">
                        <div className="col-sm-offset-2 col-sm-9">
                            <input type="submit" value="Edit" className="btn btn-primary btn-lg" />
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

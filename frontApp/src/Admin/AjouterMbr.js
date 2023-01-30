import React, { useState } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'

export const AjouterMbr = () => {

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

    

    const{userName,email,mdp,cin,fullName,typeUser,grade,tele,numeroBureau}=user
    const onInputChange=(e)=>{
            setuser({...user,[e.target.name]:e.target.value})
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:9090/save", user)
        navigate("/Admin/Membres")

    };

    return (
        <>
            <Navbar />
            <div className="container">
                <h1 className="text-center">Ajouter un Membre</h1>
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
                        <label className="col-sm-2 control-label">CIN</label>
                        <div className="col-sm-10 col-md-9">
                            <input type="text" value={cin} name="cin" className="form-control"
                                required="required" placeholder="CIN"
                                onChange={(e) => onInputChange(e)} />
                        </div>
                    </div>

                    <div className="form-group form-group-lg">
                        <label className="col-sm-2 control-label">Type</label>
                        <div className="col-sm-10 col-md-9">
                            <select name="typeUser" value={typeUser} className="form-control" required onChange={(e) => onInputChange(e)}>
                                <option value="Enseignant">Enseignant</option>
                                <option value="Téchnicien">Téchnicien</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group form-group-lg">
                        <label className="col-sm-2 control-label">Grade</label>
                        <div className="col-sm-10 col-md-9">
                            <select name="grade" value={grade} className="form-control" required onChange={(e) => onInputChange(e)} >
                                <option value="pa">Enseignant(PA)</option>
                                <option value="ph">Enseignant(PH)</option>
                                <option value="pes">Enseignant(PES)</option>
                                <option value="1ier">Téchnicien(1ier)</option>
                                <option value="2eme">Téchnicien(2eme)</option>
                                <option value="3eme">Téchnicien(3eme)</option>
                                <option value="4eme">Téchnicien(4eme)</option>
                            </select>
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
                            <input type="submit" value="ajouter" className="btn btn-primary btn-lg" />
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AjouterMbr
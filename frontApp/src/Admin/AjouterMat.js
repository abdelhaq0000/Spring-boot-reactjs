import React,{useState,useEffect} from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export const AjouterMat = () => {

    let navigate=useNavigate();
    const [materiel,setMateriel]=useState({
        dateAcquisition:"",
        numeroInventaire:"",
        type:"",
          }
     )

    const{dateAcquisition,numeroInventaire,type}=materiel
    const onInputChange=(e)=>{
            setMateriel({...materiel,[e.target.name]:e.target.value})
    };
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:9090/addMateriel", materiel)
        navigate("/Admin/Materiels")

    };
    return (
        <>
            <Navbar />
            <div className="container">
                <h1 className="text-center">Ajouter Un Matérièl</h1>
                <form className="form-horizomtal"onSubmit={(e) => onSubmit(e)}>
                    <div className="form-group form-group-lg">
                        <label className="col-sm-2 control-label">Nom</label>
                        <div className="col-sm-10 col-md-8">
                            <input type="text" name="nomMat" className="form-control" required="required" placeholder="Le Nom du Matérièl" />
                        </div>
                    </div>
                    <div className="form-group form-group-lg">
                        <label className="col-sm-2 control-label">Le Numéro d'Inventaire</label>
                        <div className="col-sm-10 col-md-8">
                            <input type="text" value={numeroInventaire} name="numeroInventaire" onChange={(e) => onInputChange(e)} className="form-control" required="required" placeholder="Le Numéro d'Inventaire" />
                        </div>
                    </div>
                    <div className="form-group form-group-lg">
                        <label className="col-sm-2 control-label">Type</label>
                        <div className="col-sm-10 col-md-8">
                            <input type="text" value={type} name="type" onChange={(e) => onInputChange(e)} className="form-control" required="required" placeholder="Le type du matérièl" />
                        </div>
                    </div>
                    <div className="form-group form-group-lg">
                        <label className="col-sm-2 control-label">Date d'aquisition</label>
                        <div className="col-sm-10 col-md-8">
                            <input type="date" value={dateAcquisition} name="dateAcquisition" onChange={(e) => onInputChange(e)} className="form-control" placeholder="La Date d'Aquisition" />
                        </div>
                    </div>
                    <div className="form-group form-group-lg">
                        <div className="col-sm-offset-2 col-sm-10">
                            <input type="submit" value="Ajouter" className="btn btn-primary btn-lg" />
                        </div>
                    </div>
                </form >
            </div >
        </>
    )
}

export default AjouterMat
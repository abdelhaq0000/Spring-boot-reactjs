import React ,{useState,useEffect} from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
export const AjouterFrn = () => {
    let navigate=useNavigate();
    const [fourniture,setFournitures]=useState({
        nomber:"",
        type:""
          }
     )

    const{nomber,type}=fourniture
    const onInputChange=(e)=>{
            setFournitures({...fourniture,[e.target.name]:e.target.value})
    };
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:9090/addFourniture", fourniture)
        navigate("/Admin/Fournitures")

    };
    return (
        <>
            <Navbar />
            <div className="container">
                <h1 className="text-center">Ajouter une Fourniture</h1>
                <form className="form-horizomtal" onSubmit={(e) => onSubmit(e)} >
                    <div className="form-group form-group-lg">
                        <label className="col-sm-2 control-label">Nom</label>
                        <div className="col-sm-10 col-md-8">
                            <input type="text" value={type}  onChange={(e) => onInputChange(e)} name="type" className="form-control" required="required" placeholder="Nom de la fourniture" />
                        </div>
                    </div>
                    <div className="form-group form-group-lg">
                        <label className="col-sm-2 control-label">Quantité</label>
                        <div className="col-sm-10 col-md-8">
                          <input type="number" min="1"  onChange={(e) => onInputChange(e)} value={nomber} name="nomber" placeholder="Quantite" style={{ marginRight: "3px" }} />
                            </div>
                    </div>
                    
                    <div className="form-group form-group-lg">
                        <div className="col-sm-offset-2 col-sm-10">
                            <input type="submit" value="Ajouter"  className="btn btn-primary btn-lg" />
                        </div>
                    </div>
                </form >
            </div >
        </>
    )
}

export default AjouterFrn
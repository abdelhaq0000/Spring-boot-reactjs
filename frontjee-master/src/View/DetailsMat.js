import React, { useEffect, useState } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import { Link, useParams,useNavigate } from "react-router-dom";
import NavView from "./NavView";
import UpperBar from "./UpperBar";
import axios from "axios";
import Alert from '@mui/material/Alert';

export const DetailsMat = () => {
    let navigate=useNavigate();
    const [idU,setIdU]=useState('');
    const [type,setType]=useState('');
    const [numeroInventaire,setNumeroInventaire]=useState();
    const [dateAcquisition,setDateAcquisition]=useState();
    const {idM} = useParams('');
    const loadMateriels = async () => {
		const result = await axios.get(`http://localhost:9090/materiel/${idM}`);
		console.log(result.data);
		setType(result.data.type);
        setNumeroInventaire(result.data.numeroInventaire);
        setDateAcquisition(result.data.dateAcquisition);
	};
    useEffect(()=>{
            setIdU(localStorage.getItem('idU'));
            console.log(idM);
            console.log(idU);
            loadMateriels();

    },[])
    const onSubmit = async (e) => {
        e.preventDefault();
        const res= await axios.post(`http://localhost:9090/demmandeMateriel/${idU}/${idM}`);
        navigate("/View/Home");

    };
    
    return (
        <>
            <NavView />
            <div className="container">
                <h1 className="text-center">{type}</h1>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 item-info">
                        <h2>{type}</h2>
                        <ul className="list-unstyled">
                            <li>
                                <i className="fa fa-number fa-fw"></i>
                                <span>Numéro D'inventaire</span> : {numeroInventaire}
                            </li>
                            <li>
                                <i className="fa fa-calender fa-fw"></i>
                                <span>Date D'aquisition</span> : {dateAcquisition}
                            </li>
                            
                        </ul>
                        <form onSubmit={(e) => onSubmit(e)}>
                            <button type="submit" className="btn btn-info">Demander</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailsMat
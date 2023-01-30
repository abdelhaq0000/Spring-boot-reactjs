import React,{useEffect,useState} from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import NavView from "./NavView";
import UpperBar from "./UpperBar";
import { Link, useParams,useNavigate } from "react-router-dom";
import axios from "axios";
import { width } from "@mui/system";

export const DetailsFrn = () => {
    let navigate=useNavigate();
    const [idU,setIdU]=useState('');
    const [type,setType]=useState('');
    const [Quantite,setQuatite]=useState('');
    const {idF} = useParams('');
    const [Q,setQ]=useState({q:''});
    const loadFournitures = async () => {
		const result = await axios.get(`http://localhost:9090/fourniture/${idF}`);
		console.log(result.data);
        setType(result.data.type);
        setQuatite(result.data.nomber);
	};
    useEffect(()=>{
        loadFournitures();
            console.log(idF);

    },[])
    const {q}=Q;
    const onInputChange=(e)=>{
        setQ({...Q,[e.target.name]:e.target.value})
}
    const onSubmit = async (e) => {
        e.preventDefault();
        
       const res =  await axios.post(`http://localhost:9090/demmandeFourniture/${localStorage.getItem('idU')}/${idF}/${Q.q}`);
        console.log(res);
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
                                <i className="fa fa-check fa-fw"></i>
                                <span>Type</span> : {type}
                            </li>
                            <li>
                                <i className="fa fa-tag fa-fw"></i>
                                <span>Quantité</span> : {Quantite}
                            </li>
                        </ul>
                        <form onSubmit={(e) => onSubmit(e)}>
                            <input type="number" required onChange={(e) => onInputChange(e)} value={q} name="q" min="1" max={Quantite} placeholder="Quantite" style={{ marginRight: "10px",width: "200px" }} />
                            <button type="submit" className="btn btn-info">Demander</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailsFrn
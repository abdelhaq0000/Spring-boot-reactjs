import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import axios from 'axios';

export default function DemandesMateriel() {

    const [Demmandes, setDemmandes] = useState([]);
	//recherche
	const [SearchTerm, setSearchTerm] = useState("");

	useEffect(() => {
		loadDemmmandes();
	}, []);

	const loadDemmmandes = async () => {
		const result = await axios.get('http://localhost:9090/demmandsMateriel');
		console.log(result.data);
		setDemmandes(result.data);
	};
    const deletDemande = async (idM) => {
		const res=await axios.delete(`http://localhost:9090/deletDemande/${idM}`)
        console.log(res.data);
		loadDemmmandes();
	}
    const affecter = async (idM,idU,idD)=>{
        console.log(idM);
        console.log(idU);
        const result = await axios.put(`http://localhost:9090/affecterMateriel/{idU}/{idM}?idM=${idU}&idU=${idM}`)
        deletDemande(idD);
        console.log(result.data);
    }
    
    
    return (
        <>
            <Navbar />
            <div className="container" style={{width: "98%"}}>
                <h1 className="text-center">Gérer les Demandes</h1>
                <div className="form-outline" style={{ paddingBottom: '10px' }}>
					<input type="search" id="form1" placeholder="Search..." className="form-control" aria-label="Search" onChange={(event) => { setSearchTerm(event.target.value); }} />
				</div>
                <div className="table-responsive">
                    <table className="main-table text-center table table-bordered">
                        <tr>
                            <td>#ID</td>
                            <td>Date de demande</td>
                            <td>Nom d'utilisateur</td>
                            <td>Matérièls</td>
                            <td>numero d'inventaire</td>
                            <td>Control</td>
                        </tr>
                        

                            {Demmandes.filter((val) => {
							if (SearchTerm == "") return val
							else if (val.user.fullName.toLowerCase().includes(SearchTerm.toLowerCase())) {
								return val
							}
						}).map(i=>(
                                <tr>
                             <td>{i.idD}</td>
                             <td>{i.dateDemmandeMateriel}</td>
                             <td>{i.user.fullName}</td>
                             <td>{i.materiel.type}</td>
                             <td>{i.materiel.numeroInventaire}</td>
                             <td>
                                 <Link style={{ margin: "5px" }} onClick={() => affecter(i.user.idU,i.materiel.idM,i.idD)} className='btn btn-success'><i className='fa fa-edit'></i>  Affécter</Link>
                                 <Link  style={{ margin: "5px" }} onClick={() => deletDemande(i.idD)} className='confirm-demande btn btn-danger'><i className='fa fa-times'></i>  Supprimer</Link>
                             </td>
                             </tr>  
                            ))
                            }
                    </table>
                </div>
            </div>
        </>
    )
}

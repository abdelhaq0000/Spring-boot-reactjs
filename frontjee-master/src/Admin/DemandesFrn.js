import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import axios from 'axios';

export default function DemandesFrn() {

    const [Demmandes, setDemmandes] = useState([]);
	//recherche
	const [SearchTerm, setSearchTerm] = useState("");

	useEffect(() => {
		loadDemmmandes();
	}, []);

	const loadDemmmandes = async () => {
		const result = await axios.get('http://localhost:9090/demmandsFourniture');
		console.log(result.data);
		setDemmandes(result.data);
	};
    const deletDemande = async (idDF) => {
		const res=await axios.delete(`http://localhost:9090/deletDemandeFrn/${idDF}`)
        console.log(res.data);
		loadDemmmandes();
	}
    const affecter = async (idU,idDF,q)=>{
        console.log(idU);
        console.log(idDF);
        console.log(q)
        const result = await axios.put(`http://localhost:9090/affecterFouniture/{idU}/{idF}/{Q}?idF=${idDF}&idU=${idU}&Q=${q}`)
        deletDemande(idDF);
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
                            <td>Fourniture</td>
                            <td>Quantité</td>
                            <td>Control</td>
                        </tr>
                        

                            {Demmandes.filter((val) => {
							if (SearchTerm == "") return val
							else if (val.user.fullName.toLowerCase().includes(SearchTerm.toLowerCase())) {
								return val
							}
						}).map(i=>(
                                <tr>
                             <td>{i.idDF}</td>
                             <td>{i.dateDemmandeFourniture}</td>
                             <td>{i.user.fullName}</td>
                             <td>{i.fourniture.type}</td>
                             <td>{i.q}</td>
                             <td>
                                 <Link style={{ margin: "5px" }} onClick={() => affecter(i.user.idU,i.idDF,i.q)} className='btn btn-success'><i className='fa fa-edit'></i>  Affécter</Link>
                                 <Link  style={{ margin: "5px" }} onClick={() => deletDemande(i.idDF)} className='confirm-demande btn btn-danger'><i className='fa fa-times'></i>  Supprimer</Link>
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

import  {React, useState ,useNavigate,useEffect} from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Navbar'
import { Link, useParams } from "react-router-dom";
import axios from 'axios'

export const Materiels = () => {
   

    //les membres
	const [Materiels, setMateriels] = useState([]);

	const { id } = useParams();
    const [SearchTerm, setSearchTerm] = useState("");

	useEffect(() => {
		loadMateriels();
	}, []);

	const loadMateriels = async () => {
		const result = await axios.get('http://localhost:9090/materiels');
		console.log(result.data);
		setMateriels(result.data);
	};

	const deletMateriel = async (id) => {
		await axios.delete(`http://localhost:9090/deletMateriel/${id}`)
		loadMateriels()
	}



    return (
        <>
            <Navbar />
            <div className="container" style={{width: "90%"}}>
                <h1 className="text-center">Gérer les Matérièls</h1>
                <form className='form-horizontal' style={{ paddingBottom: '10px' }}>
                    <input onChange={(e) => setSearchTerm(e.target.value)} type='search' placeholder='Search...' className='form-control' />
                </form>
                <div className="table-responsive">
                    <table border={1} className="main-table manage_members text-center table table-bordered">
                        <tr>
                            <td>#ID</td>
                            <td>Nom</td>
                            <td>Numéro d'inventaire</td>
                            <td>Date d'aquisition</td>
                            <td>Date d'afféctation</td>
                            <td>Employer</td>
                            <td>#ID Employer</td>
                            
                            <td colSpan={2}>Control</td>
                        </tr>
                        {Materiels.filter((val) => {
							if (SearchTerm == "") return val
							else if (val.type.toLowerCase().includes(SearchTerm.toLowerCase())) {
								return val
							}
						}).map(member => (
							<tr>
                                <td>{member.idM}</td>
                                <td>{member.type}</td>
                                <td>{member.numeroInventaire}</td>
                                <td>{member.dateAcquisition}</td>
                                <td>{member.dateAffectation && member.dateAffectation|| '-'}</td>
                                <td >{member.user && member.user.fullName || '-'}</td>
                                <td >{member.user && member.user.idU || '-'}</td>

								<td><Link style={{ margin: "5px" }} to={`/Admin/editMat/${member.idM}`} className='btn btn-success btn-sm'><i className='fa fa-edit'></i>  Edit</Link></td>
								<td><Link style={{ margin: "5px" }} id="active'" className='confirm btn btn-danger btn-sm' onClick={() => deletMateriel(member.idM)}><i className='fa fa-times'></i>  Supprimer</Link></td>
							</tr>))
						}
                    </table >
                </div >
                <Link to="/Admin/AjouterMat" className="btn btn-md btn-primary"><i className="fa fa-plus"></i>  Nouvel Matérièl</Link>
            </div >
        </>
    )
}

export default Materiels
import React, { useState, useEffect} from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Link, useParams,useNavigate } from "react-router-dom";
import axios from 'axios'
import Navbar from './Navbar'

export const Fournitures = () => {

    
    //les membres
	const [Fournitures, setFournitures] = useState([]);

	const { id } = useParams();
    const [SearchTerm, setSearchTerm] = useState("");

	useEffect(() => {
		loadFournitures();
	}, []);

	const loadFournitures = async () => {
		const result = await axios.get('http://localhost:9090/fourniturs');
		console.log(result.data);
		setFournitures(result.data);
	};

	const deletFournitures = async (id) => {
		await axios.delete(`http://localhost:9090/deletFourniture/${id}`)
		loadFournitures()
	}

    return (
        <>
            <Navbar />
            <div className="container" style={{width: "70%"}}>
                <h1 className="text-center">Gérer les Fournitures</h1>
                <form className='form-horizontal' style={{ paddingBottom: '10px' }}>
                    <input onChange={(e) => setSearchTerm(e.target.value)} type='search' placeholder='Search...' className='form-control' />
                </form>
                <div className="table-responsive">
                    <table border={1} className="main-table manage_members text-center table table-bordered">
                        <tr>
                            <td>#ID</td>
                            <td>Type</td>
                            <td>nomber</td>
                            <td >Control</td>
                        </tr>
                        {Fournitures.filter((val) => {
							if (SearchTerm == "") return val
							else if (val.type.toLowerCase().includes(SearchTerm.toLowerCase())) {
								return val
							}
						}).map(member => (
							<tr>
								<td>{member.idF}</td>
								<td>{member.type}</td>
								<td>{member.nomber}</td>
								{/* <td>{member.user.idU}</td> */}
								<td><Link style={{ margin: "5px" }} to={`/Admin/editFrn/${member.idF}`} className='btn btn-success btn-sm'><i className='fa fa-edit'></i>  Edit</Link>
								<Link style={{ margin: "5px" }} id="active'" className='confirm btn btn-danger btn-sm' onClick={() => deletFournitures(member.idF)}><i className='fa fa-times'></i>  Supprimer</Link></td>
							</tr>))
						}
                    </table >
                </div >
                <Link to="/Admin/AjouterFrn" className="btn btn-md btn-primary"><i className="fa fa-plus"></i>  Nouvelle Fourniture</Link>
            </div >
        </>
    )
}

export default Fournitures
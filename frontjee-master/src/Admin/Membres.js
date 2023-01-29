
import React, { useEffect, useState } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Link, useParams,useNavigate } from "react-router-dom";
import axios from 'axios'
import Navbar from './Navbar';

export const Membres = () => {

	const navigat0 = useNavigate();
    
    useEffect (()=>{
        const token=localStorage.getItem('jwtToken')
        if(token){
            navigat0("/Admin/Membres");
        }else{
            navigat0("/");
        }
      },[])

	//les membres
	const [Users, setUsers] = useState([]);
	//recherche
	const [SearchTerm, setSearchTerm] = useState("");

	const { id } = useParams();

	useEffect(() => {
		loadUsers();
	}, []);

	const loadUsers = async () => {
		const result = await axios.get('http://localhost:9090/users');
		console.log(result.data);
		setUsers(result.data);
	};

	const deletUser = async (id) => {
		await axios.delete(`http://localhost:9090/deletUser/${id}`)
		loadUsers()
	}

	


	return (
		<>
			<Navbar />
			<div className='container' style={{width: "98%"}}>
				<h1 className='text-center'>Gérer les Membres</h1>
				<div className="form-outline" style={{ paddingBottom: '10px' }}>
					<input type="search" id="form1" placeholder="Search..." className="form-control" aria-label="Search" onChange={(event) => { setSearchTerm(event.target.value); }} />
				</div>
				<div className="table-responsive">
					<table  className="main-table manage_members text-center table table-bordered"  border={1} >
						<tr>
							<td>#ID</td>
							<td>Username</td>
							<td>Email</td>
							<td>CIN</td>
							<td>Nom & Prenom</td>
							<td>Type</td>
							<td>Grade</td>
							<td>Téléphone</td>
							<td>Numéro de Bureau</td>
							<td colSpan={2}>Control</td>
						</tr>

						{Users.filter((val) => {
							if (SearchTerm == "") return val
							else if (val.userName.toLowerCase().includes(SearchTerm.toLowerCase())) {
								return val
							}
						}).map(member => (
							<tr>
								<td>{member.idU}</td>
								<td>{member.userName}</td>
								<td>{member.email}</td>
								<td>{member.cin}</td>
								<td>{member.fullName}</td>
								<td>{member.typeUser}</td>
								<td>{member.grade}</td>
								<td>{member.tele}</td>
								<td>{member.numeroBureau}</td>
								<td><Link style={{ margin: "5px" }} className='btn btn-success btn-sm' to={`/Admin/editMbr/${member.idU}`} ><i className='fa fa-edit'></i>  Edit</Link></td>
								<td><Link style={{ margin: "5px" }} id="active'" className='confirm btn btn-danger btn-sm' onClick={() => deletUser(member.idU)}><i className='fa fa-times'></i>  Supprimer</Link></td>
							</tr>))
						}
					</table>
				</div>
				<Link to="/Admin/AjouterMbr" className="btn btn-primary btn-md"><i class="fa fa-plus"></i>  Nouvel Membre</Link>
			</div>
		</>
	)
}


export default Membres
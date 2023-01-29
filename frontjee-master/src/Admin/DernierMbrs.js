import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
export const DernierMbrs = () => {
    const [Users, setUsers] = useState([]);
    

	const loadUsers = async () => {
		const result = await axios.get('http://localhost:9090/getLastInsert');
		console.log(result.data);
		setUsers(result.data);
	};
    useEffect(() => {
		loadUsers();
	}, []);
    return (
        <div className="col-sm-12">
            <div className="panel panel-default">
                <div className="panel-heading">
                    <i className="fa fa-users"></i> Les 2 Dérniers Membres
                    <span className="toggle-info pull-right">
                        <i className="fa fa-plus fa-lg"></i>
                    </span>
                </div>
                <div className="panel-body">
                    <ul className="list-unstyled latest-users">
                        {Users.map(member => (
                            <li>
                                {member.fullName}
                            <Link to={`/Admin/editMbr/${member.idU}`}>
                                <span className="btn btn-success pull-right"><i className="fa fa-edit"></i> Edit</span>
                            </Link>
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default DernierMbrs
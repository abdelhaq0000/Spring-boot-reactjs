import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

export const LastSupplies = () => {
    const [Fournitures, setFournitures] = useState([]);
    

	const loadFournitures = async () => {
		const result = await axios.get('http://localhost:9090/getLastInsertFourniture');
		console.log(result.data);
		setFournitures(result.data);
	};
    useEffect(() => {
		loadFournitures();
	}, []);
    return (
        <div className="col-sm-12">
            <div className="panel panel-default">
                <div className="panel-heading">
                    <i className="fa fa-users"></i> Les 2 Dérnières Fournitures
                    <span className="toggle-info pull-right">
                        <i className="fa fa-plus fa-lg"></i>
                    </span>
                </div>
                <div className="panel-body">
                    <ul className="list-unstyled latest-users">
                    {Fournitures.map(member => (
                            <li>
                                {member.type}
                            <Link to={`/Admin/editFrn/${member.idF}`}>
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

export default LastSupplies
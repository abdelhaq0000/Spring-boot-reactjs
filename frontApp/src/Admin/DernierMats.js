import React ,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

export const DernierMats = () => {
    const [Materiels, setMateriels] = useState([]);
    

	const loadMateriels = async () => {
		const result = await axios.get('http://localhost:9090/getLastInsertMateriel');
		console.log(result.data);
		setMateriels(result.data);
	};
    useEffect(() => {
		loadMateriels();
	}, []);
    return (
        <div className="col-sm-12">
            <div className="panel panel-default">
                <div className="panel-heading">
                    <i className="fa fa-users"></i> Les 2 Dérniers Matérièls
                    <span className="toggle-info pull-right">
                        <i className="fa fa-plus fa-lg"></i>
                    </span>
                </div>
                <div className="panel-body">
                    <ul className="list-unstyled latest-users">
                    {Materiels.map(member => (
                            <li>
                                {member.type}
                            <Link to={`/Admin/editMat/${member.idM}`}>
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

export default DernierMats
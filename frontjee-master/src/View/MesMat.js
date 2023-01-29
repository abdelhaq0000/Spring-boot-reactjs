import React,{useState,useEffect} from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import { Link,useParams } from "react-router-dom";
import axios from 'axios'

export const MesMat = () => {
     //les membres
	const [Materiels, setMateriels] = useState([]);

	const { id } = useParams();
    const [SearchTerm, setSearchTerm] = useState("");

	useEffect(() => {
        console.log("hi")
		loadMateriels();
	}, []);

	const loadMateriels = async () => {
		const result = await axios.get(`http://localhost:9090/materielOfUser/${localStorage.getItem('idU')}`);
		console.log(result.data);
		setMateriels(result.data);
	};
    return (
        <div className="my_ads block" id="my_ads">
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading">Mes Matérièls</div>
                    <div className="panel-body">
                    {Materiels.filter((val) => {
							if (SearchTerm == "") return val
							else if (val.userName.toLowerCase().includes(SearchTerm.toLowerCase())) {
								return val
							}
						}).map(member => (
                <div className="column">
                    <div className="col-sm-6 col-md-3">
                        <div className="thumbnail item-box">
                            <span className="price-tag">{member.numeroInventaire}</span>
                            <div className="caption">
                                <h3><Link to={`/View/DetailsMat/${member.idM}`}>{member.type}</Link></h3>
                            
                                <button className="btn btn-info btn-md"><Link to={`/View/DetailsMat/${member.idM}`} style={{ color: 'white', textDecoration: 'none' }}>Plus de Détails</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MesMat
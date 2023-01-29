import  {React, useState ,useNavigate,useEffect} from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import NavView from "./NavView";
import UpperBar from "./UpperBar";
import { Link, useParams } from "react-router-dom";
import axios from 'axios'

export const FournituresView = () => {
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
    return (
        <>
            <NavView />
            <div style={{ marginTop: "10px" }} className="container">
                <form className='form-horizontal' style={{ paddingBottom: '10px' }}>
                <input type="search" id="form1" placeholder="Search..." className="form-control" aria-label="Search" onChange={(event) => { setSearchTerm(event.target.value); }} />
                </form>
                {Fournitures.filter((val) => {
							if (SearchTerm == "") return val
							else if (val.type.toLowerCase().includes(SearchTerm.toLowerCase())) {
								return val
							}
						}).map(member => (
                <div className="column">
                    <div className="col-sm-6 col-md-3">
                        <div className="thumbnail item-box">
                            <span className="price-tag">{member.nomber}</span>
                            <div className="caption">
                                <h3><Link to={`/View/DetailsFrn/${member.idF}`}>{member.type}</Link></h3>
                            
                                <button className="btn btn-info btn-md"><Link to={`/View/DetailsFrn/${member.idF}`} style={{ color: 'white', textDecoration: 'none' }}>Plus de Détails</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
                        ))}
            </div >
        </>
    )
}

export default FournituresView
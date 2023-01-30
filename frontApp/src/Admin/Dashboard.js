import React, { useEffect, useState } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom'
import { Sync } from '@material-ui/icons'
import axios from 'axios'
import { useNavigate} from 'react-router-dom'
export const Dashboard = () => {
    const navigate = useNavigate();

    useEffect (()=>{
      const token=localStorage.getItem('jwtToken')
      if(!token){
          navigate("/");
      }else {
            const abdelhaq= localStorage.getItem('role');
            console.log(abdelhaq);
    }
    },[])

const [numberMateriel,setnumberMateriel]=useState('');
const [numberFourniture,setnumberFourniture]=useState('');
const [numberUsers,setnumberUsers]=useState('');
const [numberDemmande,setnumberDemmande]=useState('');
 useEffect(()=>{
      axios.get("http://localhost:9090/nomberAllmateriel").then(m=>setnumberMateriel(m.data));
      axios.get("http://localhost:9090/nomberDemandeMateriel").then(m=>setnumberDemmande(m.data));
      axios.get("http://localhost:9090/nomberFournitur").then(f=>setnumberFourniture(f.data));
      axios.get("http://localhost:9090/nomberUser").then(u=>setnumberUsers(u.data));
 },[])


    return (
        <div className="home-stats text-center">
            <div className="container text-center" >
                <h1>Dashboard</h1>
                <div className="row">
                    <div style={{ marginBottom: '10px' }} className="col-sm-6 col-md-3">
                        <div className="stat st-members">
                            <div className="info">
                                Membres
                                <span><Link to="/Admin/Membres">{numberUsers}</Link></span>
                            </div>
                        </div>
                    </div>
                    <div style={{ marginBottom: '10px' }} className="col-sm-6 col-md-3">
                        <div className="stat st-pending">
                            <div className="info">
                                Demandes
                                <span><Link to="/Admin/Demandes">{numberDemmande}</Link></span>
                            </div>
                        </div>
                    </div>
                    <div style={{ marginBottom: '10px' }} className="col-sm-6 col-md-3">
                        <div className="stat st-items">
                            <div className="info">
                                Matérièls
                                <span><Link to="/Admin/Materiels">{numberMateriel}</Link></span>
                            </div>
                        </div>
                    </div>
                    <div style={{ marginBottom: '10px' }} className="col-sm-6 col-md-3">
                        <div className="stat st-comments">
                            <div className="info">
                                Fournitures
                                <span><Link to="/Admin/Fournitures">{numberFourniture}</Link></span>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    )
}

export default Dashboard
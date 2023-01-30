import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './backend.css'
import './backend'
import React, { useEffect, useState } from 'react'
import { render } from '@testing-library/react'
import axios from 'axios';
import { useNavigate,Navigate } from 'react-router-dom'
import { createContext } from 'react'

export const nomUser= createContext('nomuser')
export const Login = () => {

    const navigat0 = useNavigate();
    const [role,setRole]=useState('');
    useEffect (()=>{
        const token=localStorage.getItem('jwtToken')
        const role=localStorage.getItem('role')
        console.log(role)
        console.log(token)
        if(token){
            if (role === "Admin") {
                navigat0("/Admin/AdminHome");
            }
            if(role==="ensignant"){
                navigat0("/View/Home");
            }
            if(role==="technicient"){
                navigat0("/View/Home");
            }
            if(role==="ensignRole"){
                navigat0("/View/Home");
            }
            if(role==="thecRole"){
                navigat0("/View/Home");
            }
        }else{
            navigat0("/");
        }

      },[])

      
    const [uerName, setUerName] = useState('');
    const [userPassword, setuserPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:9090/authenticate', { uerName, userPassword });
            // console.log(res.data);
            localStorage.setItem('jwtToken', res.data.jwtToken); // save the JWT in local storage
            axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.jwtToken}`; // set the Authorization header to include the JWT
            // console.log(res?.data?.user?.role[0]?.rolename);
            localStorage.setItem("role",res?.data?.user?.role[0]?.rolename);
            let dt = res?.data?.user?.role[0]?.rolename;
            setRole(localStorage.getItem("role"));
            localStorage.setItem("U",res?.data?.user?.fullName)
            localStorage.setItem("idU",res?.data?.user?.idU);
            localStorage.setItem('user',res?.data?.user)
            if (dt === "Admin"  ) {
                // console.log("authenticate succes");
                navigate("/Admin/AdminHome");
                // return <Navigate to="/Dashboard" />
            }if(role===""){
                navigate("/");
            }if(role==="ensignant" || role==="technicient" || role==="thecRole"||role==="ensignRole" ){
                navigate("/View/Home");
            }

            setError(null);
        } catch (error) {
                setError(   "you are not existe")
        }
    };
    
    return (
        <div class="container">
            <form class="login" onSubmit={handleSubmit}>
                <h1 style={{ color: "#337AB7" }} class="text-center">Login</h1>
                <input class="form-control" value={uerName}
                    onChange={(e) => setUerName(e.target.value)} type="text" name="user" placeholder="Username" autoComplete="off" />
                <input class="form-control" type="password" value={userPassword}
                    onChange={(e) => setuserPassword(e.target.value)} name="pass" placeholder="Password" autoComplete="new-password" />
                <input class="btn btn-primary btn-block"  type="submit" value="login" />
            </form>
            <h1>{error}</h1>
        </div>
    )
}

export default Login
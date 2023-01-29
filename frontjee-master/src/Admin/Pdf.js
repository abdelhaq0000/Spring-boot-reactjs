
import React, { useEffect, useState } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Link, useParams,useNavigate } from "react-router-dom";
import axios from 'axios'
import Navbar from './Navbar';

export const Pdf = () => {
    const [pdf,setPdf]=useState('')
    useEffect(() => {
		const result = await axios.get('http://localhost:9090/users');
		console.log(result.data);
		setPdf(result.data);
	}, []);
	return (
	  <div></div>	
	)
}


export default Pdf
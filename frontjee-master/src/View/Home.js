import React,{useEffect} from "react";
import NavView from "./NavView";
import UpperBar from "./UpperBar";
import { useNavigate } from "react-router-dom";
export const Home = () => {
    const navigate = useNavigate();

    useEffect (()=>{
      const token=localStorage.getItem('jwtToken')
      if(!token){
          navigate("/");
      }
    },[])
    return (
        <>
            <NavView />
            <div className="container">
                <div className="hello">

                </div>
            </div>
        </>
    )
}

export default Home
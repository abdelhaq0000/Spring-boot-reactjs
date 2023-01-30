import { Pie } from 'react-chartjs-2'
import React, { Component, useEffect, useState } from 'react'
import { ArcElement } from "chart.js"
import Chart from 'chart.js/auto'
import axios from 'axios'
Chart.register(ArcElement)
export const PieChartComponentMats = () => {
    const [types,setTypes]=useState(["hi","hello"]);
    const [nomnber,setNmber]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:9090/allTypeFourniture").then(m=>setTypes(m.data));
        axios.get("http://localhost:9090/allNomberFourniture").then(m=>setNmber(m.data));
   },[])
   
        return (
            <>
                <h3 class="text-center">Les Statistiques des Fournitures</h3>
                <Pie
                    data={{
                        labels: types,
                        datasets: [{
                            data: nomnber,
                            backgroundColor: ['#386AB7','#6A7ACFF','red','#A37AB7','blue', 'green', 'yellow', 'orange', 'purple','#337AB7','#386AB7','#337AC7','#A37AB7']
            }]
                    }}
                    height='50%'
                />
                <br />
            </>
        )
    }

export default PieChartComponentMats
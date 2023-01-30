import React from 'react'
import PieChartComponentMats from './PieChartComponentMats'
import PieChartComponentFrns from './PieChartComponentFrns'
import Navbar from './Navbar'
import { height } from '@mui/system'

export const Statistiques = () => {
    return (
        <>
            <Navbar />
            <div class='container'>
                <div style={{ margin: "30px auto" }}>
                    <div class="col-md-5" style={{ margin: "30px", boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.25)" }}>
                        <PieChartComponentMats />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Statistiques
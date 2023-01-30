import React from 'react'

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../backend.css'
import '../backend'
import Dashboard from './Dashboard'
import LastMembers from './DernierMbrs'
import PieChartComponent from './PieChartComponentMats'
import LastMaterials from './DernierMats';
import LastSupplies from './DernierFrns';
import Navbar from './Navbar';
import { height } from '@mui/system'

export const Aprincipale = () => {
    return (
        <>
            <Navbar />
            <Dashboard />
            <div style={{ marginTop: '12px' }} className="container" >
                <div class="column col-sm-6">
                    <LastMembers />
                    <LastMaterials />
                    <LastSupplies />
                </div>
                <div class="column">
                    <div class="col-sm-6" >
                        <PieChartComponent />
                    </div>
                </div>
            </div>
        </>

    )

}

export default Aprincipale
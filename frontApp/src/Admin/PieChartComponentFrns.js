import { Pie } from 'react-chartjs-2'
import React, { Component } from 'react'
import { ArcElement } from "chart.js"
import Chart from 'chart.js/auto'
Chart.register(ArcElement)

class PieChartComponentFrns extends Component {
    constructor(props) {
        super(props)
        this.state = {
            labels: ['added1', 'added2', 'added3', 'added4', 'added5', 'added6'],
            datasets: [{
                data: [100, 4000, 2850, 1200, 800, 3400],
                backgroundColor: ['red', 'blue', 'green', 'yellow', 'orange', 'purple']
            }]
        }
    }
    render() {
        return (
            <>
                <h3 class="text-center">Les Statistiques des Fournitures</h3>
                <Pie
                    data={{
                        labels: this.state.labels,
                        datasets: this.state.datasets
                    }}
                    height='50%'
                />
                <br />
            </>
        )
    }
}

export default PieChartComponentFrns
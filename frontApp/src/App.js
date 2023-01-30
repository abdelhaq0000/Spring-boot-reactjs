import './App.css';
import PieChart from './PieChartComponent';
import { React, useState } from 'react';
export const UserData = [
  {
    id: 1,
    year: 2017,
    userGain: 23798,
    userLost: 234
  }, {
    id: 2,
    year: 2018,
    userGain: 89798,
    userLost: 24
  }, {
    id: 3,
    year: 2019,
    userGain: 93098,
    userLost: 2304
  }, {
    id: 4,
    year: 2020,
    userGain: 40798,
    userLost: 2234
  }, {
    id: 5,
    year: 2021,
    userGain: 73798,
    userLost: 2094
  },
]


function App() {

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [{
      label: "Users Gained",
      data: UserData.map((data) => data.userGain),
      backgroundColor: ["rgba(75,192,192,1)", "#ecf0f1", "#50af95", "#f3ba2f", "#2a71d0"],
      borderColor: "black",
      borderWidth: 2,
    }]
  })

  return (
    <div class="App">
      <PieChart chartData={userData} />
    </div>
  );
}

export default App;

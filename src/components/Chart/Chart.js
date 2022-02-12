
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Charts = props=>{
    let prices = props.expenses.map(element => element.amount)
    let labels = props.expenses.map(element => element.title)

    const getRandomColor = () => {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    let colors = props.expenses.map(element => getRandomColor())

    const data = {
        labels: labels,
        datasets: [
            {
                label: '# of Votes',
                data: prices,
                backgroundColor: colors,
                borderColor: colors,
                borderWidth: 1,
            },
        ],
    }
    
    return <div className="flex justify-center items-center m-auto w-4/12">
        <Doughnut  data={data}/>
    </div>
}

export default Charts;
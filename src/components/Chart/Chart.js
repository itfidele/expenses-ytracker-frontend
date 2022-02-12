
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from "react-chartjs-2";
import ModalItem from '../Modal/ModalItem';

ChartJS.register(ArcElement, Tooltip, Legend);

const Charts = props=>{

    if(props.expenses.length ===0)
        return <div></div>;
    const prices = props.expenses.map(element => element.amount)
    const labels = props.expenses.map(element => element.title)

    const getRandomColor = () => {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    const colors = props.expenses.map(element => getRandomColor())

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
    
    return (
        <div className={props.show ===false ? 'hidden':'flex'}>
            <ModalItem show={true}>
                <div className="flex justify-center items-center m-auto w-8/12">
                    <Doughnut data={data} />
                </div>
                
            </ModalItem>
            
        </div>
    )
}

export default Charts;
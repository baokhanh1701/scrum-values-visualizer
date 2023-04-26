import React from 'react'
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2'

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

export default function Chart() {
    const scrumValuesCurrentUser = JSON.parse(localStorage.getItem('scrum-values-current-user')); 
    const data = {
        labels: ['Courage', 'Commitment', 'Focus', 'Openness', 'Respect'],
        datasets: [
            {
                label: '# of Attributes Checked',
                data: [
                    scrumValuesCurrentUser.courage, 
                    scrumValuesCurrentUser.commitment, 
                    scrumValuesCurrentUser.focus, 
                    scrumValuesCurrentUser.openness, 
                    scrumValuesCurrentUser.respect],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 3,
            },
        ],
    };
    const options = {
        scales: {
            r: {
                angleLines: {
                    display: true
                },
                suggestedMin: 0,
                suggestedMax: 5
            }
        }
    }; 
    return (
        <div>
            <Radar
                data={data}
                options={options}
            />
        </div>
    )
}

import React from 'react';

type TasksCarsType = {
    topCars: topCarsType[];
}

type topCarsType = {
    manufacturer: string
    model: string
}

export const TasksCars = (props: TasksCarsType) => {
    return (
        <table>
            {props.topCars.map((objectFromCarsArray, index) => {
                debugger
                return (
                    <tr key={index}>
                        <td>{objectFromCarsArray.manufacturer}</td>
                        <th>{objectFromCarsArray.model}</th>
                    </tr>
                )
            })}

        </table>

    )
};













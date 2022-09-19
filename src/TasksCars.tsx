import React from 'react';

type CarsArrayType = {
    topCars: Array<topCars>
}

type topCars = {
    manufacturer: string,
    model: string
}

export const TasksCars: React.FC<CarsArrayType> = (props) => {
    return (
        <div>
            <table>
                {props.topCars.map((objectCars, index) => {
                    return (
                        <tr>
                            <td key={index}>{objectCars.manufacturer} :</td>
                            <th key={index}>{objectCars.model}</th>
                        </tr>
                    )
                })}
            </table>
        </div>
    );
};










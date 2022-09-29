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
                            <div><th key ={index}>{objectCars.manufacturer} :</th></div>                            <td key={index}>{objectCars.model}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    );
};










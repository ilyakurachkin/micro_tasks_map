import React from 'react';

type NewComponentType = {
    // students: Array<StudentType>
    students: StudentType[]
}

type StudentType = {
    id: number,
    name: string,
    age: number
}

export const NewComponent = (props: NewComponentType) => {
    return (
        <ul>
            {props.students.map((objectFromStudentsArray, index) => {
                return (
                    <li key={objectFromStudentsArray.id}>
                      <span>{objectFromStudentsArray.name}</span>
                      <span> age: {objectFromStudentsArray.age}</span>
                    </li>
                )
            })}
        </ul>

    );
}
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
                return (

                    <tr>
                        <td>{objectFromCarsArray.manufacturer}</td>
                        <th>{objectFromCarsArray.model}</th>
                    </tr>
                )
            })}

        </table>

    )
};


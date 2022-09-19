import React from 'react';

type NewComponentType = {
    students: Array<StudentType>
    //students: StudentType[]---можно и так
}
type StudentType = {
    id: number,
    name: string,
    age: number
}

export const NewComponent = (props: NewComponentType) => {
    return (
        <>
            <ul>
                {props.students.map((objectStudentType, index) => {
                    return (
                        <li key={objectStudentType.id}>
                            <span>{objectStudentType.name}</span>
                            <span> age: {objectStudentType.age}</span>
                        </li>
                    )
                })}
            </ul>
        </>
    );
};
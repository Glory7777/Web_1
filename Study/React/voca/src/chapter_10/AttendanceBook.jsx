import React from "react";

const students = [
    {
        id: 1,
        name: "Glory",
    },
    {
        id: 2,
        name: "Bang",
    },
    {
        id: 3,
        name: "Kim",
    },
    {
        id: 4,
        name: "Choi",
    },
];

function AttendanceBook(props) {
    return (
        <ul>
            {students.map((student) => {
                return <li key={student.id}> {student.name}</li>;
                // <li key={`student-id-&{student.id}`}> {student.name} </li> : key를 포맷팅 된 문자열로 변경!
                // map((student, index) ->  <li key={index}> {student.name} </li> : key를 index로 변경!

            })}
        </ul>
    );
}

export default AttendanceBook;
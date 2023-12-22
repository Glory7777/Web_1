

import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

function Detail({ toDos }) {
const myId = useParams().id;
const toDo = toDos.find((toDo) => toDo.id === parseInt(myId));

return (
<>
<h1>{toDo?.text}</h1>

{/* toDo?.text는 옵셔널 체이닝(optional chaining)이라는 JavaScript의 새로운 문법 중 하나
    객체의 중첩된 속성에 접근할 때 해당 속성이 존재하지 않을 경우 오류를 방지하기 위해 도입

    toDo가 존재하면:
    toDo 객체에 text 속성이 존재하는지 확인합니다.
    만약 toDo.text가 존재한다면, 그 값을 반환합니다.
    toDo가 undefined 또는 null이면:
    이어지는 속성(text)에는 접근하지 않고 바로 undefined를 반환
*/}
<h5>Created at: {toDo?.id}</h5>
</>
);
}

function mapStateToProps(state) {
return { toDos: state };
}

export default connect(mapStateToProps)(Detail);
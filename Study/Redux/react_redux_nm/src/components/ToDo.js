import React from "react";
import { connect } from "react-redux";
// import { actionCreators } from "../store";
import { remove } from "../store";
import { Link } from "react-router-dom";

function ToDo({ text, onBtnClick, id }) {
  return (
    <li>
    {/* 툴킷 적용전
     <Link to={`/${id}`}>
        {text} <button onClick={onBtnClick}>DEL</button>
      </Link> 
      */}

     <Link to={`/${id}`}>{text}</Link>
      <button onClick={onBtnClick}>DEL</button>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    // onBtnClick: () => dispatch(remove.deleteToDo(ownProps.id))
    onBtnClick: () => dispatch(remove(ownProps.id))
  };
}

// mapDispatchToProps 함수는 Redux 스토어에 액션을 디스패치할 수 있는 함수들을 정의하는 데 사용, 이 함수는 두 개의 인자를 받음.
// 첫 인자- dispatch 함수: Redux 스토어에서 액션을 디스패치하는 함수입니다. 액션을 디스패치하면 스토어의 상태가 업데이트되고, 이에 따라 컴포넌트가 리렌더링됨
// 두 번째 인자 - ownProps 객체: 컴포넌트에 전달된 속성(props)들을 나타내는 객체 /  ownProps를 통해 현재 컴포넌트의 속성에 접근

export default connect(null, mapDispatchToProps)(ToDo);
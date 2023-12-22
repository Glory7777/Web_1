import React, { useState } from "react";
import { connect } from "react-redux";
// import { actionCreators } from "../store";
import { add } from "../store";
import ToDo from "../components/ToDo";

function Home({ toDos, addToDo }) {
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    addToDo(text);
    setText("");
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map(toDo => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
}

function mapStateToProps(state) {
  return { toDos: state};
}
// mapStateToProps 함수는 Redux 스토어의 상태를 컴포넌트의 props로 매핑

function mapDispatchToProps(dispatch) {
  return {
    // addToDo: text => dispatch(actionCreators.addToDo(text))
    addToDo: text => dispatch(add(text))
  };
}

// mapDispatchToProps 함수는 액션 생성자 함수를 컴포넌트의 props로 매핑하고, 해당 액션을 디스패치할 수 있는 함수를 제공

export default connect(mapStateToProps, mapDispatchToProps)(Home);

// connect 함수를 사용하여 Home 컴포넌트를 Redux 스토어에 연결합니다.
// mapStateToProps와 mapDispatchToProps 함수를 통해 스토어 상태 및 액션을 컴포넌트에 매핑

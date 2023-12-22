import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

const addToDo = text => {
  return {
    type: ADD,
    text
  };
};

const deleteToDo = id => {
  return {
    type: DELETE,
    id: parseInt(id)
  };
};

const reducer = (state = [], action) => {
    // reducer는 Redux에서 상태를 어떻게 업데이트할지 정의하는 함수
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE:
        return state.filter(toDo => toDo.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);
// createStore 함수를 사용하여 Redux 스토어를 생성

export const actionCreators = {
    // actionCreators : 액션 생성자로 액션을 만들어내는 함수들을 묶은 객체
    addToDo,
    deleteToDo
};


// 즉, 각각의 액션(ADD, DELETE)에 따라 상태를 어떻게 업데이트할지에 대한 규칙이 reducer 함수에 정의
// store는 이 reducer 함수를 통해 상태를 관리하고, 액션 생성자는 액션을 생성하는 함수들을 제공
export default store;


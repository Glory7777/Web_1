import { legacy_createStore  } from "redux";

const add = document.getElementById("add")
const minus = document.getElementById("minus")
const number = document.querySelector("span")

number.innerText = 0;


const ADD = "ADD"
const MINUS = "MINUS"
// ✅ string으로 바로 쓰는 대신에 const variable로 선언해서 사용하기 -> 에러 발견 용이


const countModifier = (count = 0, action) => {
  // ✅ Action : redux에서 function을 부를 때 쓰는 두 번째 parameter 혹은 argument으로 reducer와 소통하기 위한 방법, reducer와 소통하는 방법으로 Object여야 하며 그 key 이름은 항상 type임 (바꿀 수 없음)
  console.log(count, action);
  if (action.type === "ADD") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  } else {
    return count;
  }


  // 위의 if else 과 다른 방법으로 switch가 있음
//------------
// switch (action.type) {
//   case ADD:
//     return count + 1;
//   case MINUS:
//     return count - 1;
//   default:
//     return count;
// }

  // if else 대용으로 ✅ switch가 자주 쓰임
};
// data를 modify하는 함수 reducer, ✅ reducer : 현재 상태의 application과 함께 불려지는 function (+ with action) return하는 것은 application의 state가 됨

const countStore = legacy_createStore (countModifier);
// data를 저장하는 공간

const onChange = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange);
//✅ Subscribe : store 안에 있는 변화 감지 , store.subscribe(func); // store안의 변화를 감지하면   인자값으로 준 func 실행

const handleAdd = () => {
  countStore.dispatch({type: ADD});
}

const handleMinus = () => {
  countStore.dispatch({type: MINUS});
}

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);


countStore.dispatch({type : "ADD"});
countStore.dispatch({type : "ADD"});
countStore.dispatch({type : "ADD"});
countStore.dispatch({type : "ADD"});
countStore.dispatch({type : "ADD"});
countStore.dispatch({type : "MINUS"});
//✅ Reducer에게 Action을 보내는 방법 : store.dispatch({key: value});

console.log(countStore.getState());


// 바닐라로 카운트 + - 계산하기
// ------------
// let count = 0;

// number.innerText = count;

// const updateText= () => {
//   number.innerText = count;
// };

// const handleAdd = () => {
//   count = count +1
//   updateText();
// };

// const handleMinus = () => {
//   count = count - 1;
//   updateText();
// };

// add.addEventListener("click", handleAdd);
// minus.addEventListener("click", handleMinus);



// --------------- ToDo List
const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addToDo = text => {
  return {
    type: ADD_TODO,
    text
  };
};

const deleteToDo = id => {
  return {
    type: DELETE_TODO,
    id
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      const newToDoObj = { text: action.text, id: Date.now() };
      return [newToDoObj, ...state];
    case DELETE_TODO:
      const cleaned = state.filter(toDo => toDo.id !== action.id);
      return cleaned;
    default:
      return state;
  }
};

const store = legacy_createStore(reducer);

store.subscribe(() => console.log(store.getState()));

const dispatchAddToDo = text => {
  store.dispatch(addToDo(text));
};

const dispatchDeleteToDo = e => {
  const id = parseInt(e.target.parentNode.id);
  store.dispatch(deleteToDo(id));
};

const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.forEach(toDo => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "DEL";
    btn.addEventListener("click", dispatchDeleteToDo);
    li.id = toDo.id;
    li.innerText = toDo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};

store.subscribe(paintToDos);

const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
dispatchAddToDo(toDo);
};

form.addEventListener("submit", onSubmit);
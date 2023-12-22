// import { createAction, createReducer } from "@reduxjs/toolkit";
// import { createStore } from "redux";

// // const ADD = "ADD";
// // const DELETE = "DELETE";

// // const addToDo = text => {
// //   return {
// //     type: ADD,
// //     text
// //   };
// // };

// // const deleteToDo = id => {
// //   return {
// //     type: DELETE,
// //     id: parseInt(id)
// //   };
// // };
// // 툴킷 적용 전 일일이 작성




// const addToDo = createAction("ADD");
// // createAction("Action명") const addToDo = createAction("ADD"); console.log(addToDo()); // { type: "ADD", payload: undefined }
// // ADD 대신에 addToDo.type  ,   addToDo(text) ▷ payload로 값(text)을 보낸다.


// const deleteToDo = createAction("DELETE");


// const reducer = (state = [], action) => {
//     switch (action.type) {
//         case addToDo.type:
//             return [{ text: action.payload, id: Date.now() }, ...state];
//           case deleteToDo.type:
//             return state.filter(toDo => toDo.id !== action.payload);
//           default:
//             return state;
//         }
//     };

//     const store = createStore(reducer);
//     export const actionCreators = {
//       addToDo,
//       deleteToDo
//     };
//     export default store;


//----------------------------------------------------------
// // toolkit으로 createReducer 간소화된 코드

// import { createAction, createReducer, configureStore } from "@reduxjs/toolkit";

// const addToDo = createAction("ADD");
// const deleteToDo = createAction("DELETE");

// const reducer = createReducer([], {
//     [addToDo]: (state, action) => {
//       state.push({ text: action.payload, id: Date.now() });
//     },
//     [deleteToDo]: (state, action) =>
//       state.filter(toDo => toDo.id !== action.payload)
//   });

//   const store = configureStore({ reducer });

// export const actionCreators = {
//   addToDo,
//   deleteToDo
// };
// export default store;



// ----------
// createSlice 로 매우 간소화된 코드

// 초기 state, reducer 함수의 객체, "slice 이름"을 받아 리듀서 및 state에 해당하는 action crator와 action type을 자동으로 생성하는 함수입니다.
// 내부적으로는 createAction 및 createReducer를 사용하므로 Immer를 사용하여 "mutating" 불변 업데이트를 작성할 수도 있습니다.


import { configureStore, createSlice } from "@reduxjs/toolkit";

const toDos = createSlice({
    name: "toDosReducer",
    initialState: [],
    reducers: {
      add: (state, action) => {
        state.push({ text: action.payload, id: Date.now() });
      },
      remove: (state, action) => state.filter(toDo => toDo.id !== action.payload)
    }
  });

  export const { add, remove } = toDos.actions;

  export default configureStore({ reducer: toDos.reducer });
import { createSlice } from '@reduxjs/toolkit'


//use state랑 비슷
let user = createSlice({
    name : 'user',
    initialState : { name: 'kim' , age : 20 },
    reducers : {
        changeName(state){  // 1. state 수정해주는 함수만들기
            // return { name: 'park' , age : 20 }
            state.name = 'park' // immer.js 도움으로 array/ object 의 경우 직접수정해도 state 변경됨
        },
        increase(state, action){  // 1. state 수정해주는 함수만들기
           state.age += action.payload  // payload : cart에 100이라는 화물에 담은 메세지를 출력하는 문법
    },
}
})


// 2. 만든 함수 export 해야함
export let { changeName, increase } = user.actions  // distructer 문법 오른쪽 자료를 변수로 빼는 문법일뿐


export default user
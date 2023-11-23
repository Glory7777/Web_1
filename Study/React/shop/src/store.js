import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice'


// 3. 만든 함수 import 해서 사용

let cart = createSlice({
    name : 'cart',
    initialState : [ 
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
],
    reducers : {
        addCount(state, action){
            state[action.payload].count++

            // let 번호 = state.findIndex((a)=> a.id === action.payload )
            // state[번호].count++
        },
        addItem(state, action){
            state.push(action.payload)
        }
    }
})

export let { addCount, addItem } = cart.actions

export default configureStore({ //등록하기
  reducer: { 
    user : user.reducer,
    cart : cart.reducer
  }
}) 
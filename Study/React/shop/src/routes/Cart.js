import { Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { changeName, increase } from "../store/userSlice"
import { addCount } from "../store"
import { memo, useState, useMemo } from "react"



let Child = memo (function () {
    console.log('재렌더링됨')
    return <div>자식임</div>
})


function 함수() {
    return 1000000
}

function Cart(){
let result
useMemo(()=> {return 함수()}, ) // useMemo 컴포넌트 렌더링시 1회만 실행해줌


let state = useSelector((state) => {return state}) // redux store의 state 가져오는것
            // { return 생략가능}
let dispatch = useDispatch() // dispatch : store.js 로 요청보내주는 함수
let [count, setCount] = useState(0)

    return (
        <div>
            <Child count={count}></Child>
            <button onClick={()=> { setCount(count+1)}}>++</button>
            <h6>{state.user.name} {state.user.age}의 장바구니 </h6>
            <button onClick={()=>{ dispatch(increase(100))}}> 버튼 </button> 
            

            <Table>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.cart.map((a, i) =>
                            <tr key={i}>
                                <td>{state.cart[i].id}</td>
                                <td>{state.cart[i].name}</td>
                                <td>{state.cart[i].count}</td>
                                <td>
                                    <button onClick={()=>{
                                        dispatch(addCount(i)) //changeName()실행해달라고 store.js에 부탁 
                                    }}> + </button>
                                </td>
                            </tr>
                        )
                    }
             
                </tbody>
            </Table> 
        </div>
    )
}

export default Cart
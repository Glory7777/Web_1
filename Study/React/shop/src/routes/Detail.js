import { useParams } from 'react-router-dom';
import styled from 'styled-components'
import { useContext, useEffect, useState } from 'react';
import {Nav} from 'react-bootstrap'

import {Context1} from '../App'
import { useDispatch } from 'react-redux';
import { addItem } from '../store';




// Lifecycle 과 useEffect
//구버젼
//  class Detail2 extends React.Component{
//     componentDidMount(){
//         컴포넌트 mount시 여기 코드 실행
//     }
//     componentDidUpdate(){
//         컴포넌트 update시 여기 코드 실행
//     }
//     componentWillUnmount(){

//     }
//  }


function Detail(props) {

    let {재고} = useContext(Context1)  // state 사용은 2. useContext(Context)

    let {id} = useParams();
    console.log(id)
    let 찾은상품 = props.shoes.find(function(x){
        return x.id == id
    });


    let YellowBtn = styled.button`
        background : ${ props => props.bg };
        color : ${ props => props.bg == 'blue' ? 'white' : 'black' };
        padding : 10px;
        `;

        
    let [count, setCount] = useState(0)
    let [alert, setAlert] = useState(true)
    let [ tab, setTab] = useState(0)
    let dispatch = useDispatch()


    useEffect(() => {
        let 꺼낸거 = localStorage.getItem('watched')
        꺼낸거 = JSON.parse(꺼낸거)
        꺼낸거.push(찾은상품.id)

        //Set으로 바꿨다가 다시 array로 만들기
        꺼낸거 = new Set(꺼낸거)
        꺼낸거 = Array.from(꺼낸거)
        localStorage.setItem('watched', JSON.stringify(꺼낸거))
    }, [])


    // 숫자로 적지 않을 시 오류메세지 출력
    // let [num, setNum] = useState('')


    // useEffect(()=>{
    //     if (isNaN(num) == true){
    //       alert('그러지마세요')
    //     }
    //   }, [num])
    
    //   return (
    //     <input onChange={(e) => { setNum(e.target.value) }} />
    //   )
    // }

    useEffect(()=>{
         //여기적은 코드는 컴포넌트 로드 & 업데이트 마다 실행됨
    //     setTimeout(()=>{setAlert(false) }, 2000)
    // }, []);

    let a = setTimeout(()=> {
        setAlert(false) }, 2000)

    return ()=>{
        clearTimeout(a)
    }
    })
    // return 이 먼저 출력하고 그다음 let 변수쪽 실행
    // clean up function은 mount시 실행안됨 unmount시 실행됨

    return(


        <div className="container"> 
        {
            alert == true
            ?   <div className='alert alert-warning'>
                2초 이내 구매시 할인
            </div>
            : null
        }

        <div>
        <YellowBtn bg="orange">오렌지색 버튼임</YellowBtn>
        <YellowBtn bg="blue">파란색 버튼임</YellowBtn>
         </div>
            {count}
         <button onClick={()=>{ setCount(count+1) }}>버튼</button>

        <div className="row">
            <div className="col-md-6">
                <img src={"https://codingapple1.github.io/shop/shoes1.jpg"} width="100%" />
            </div>
            <div className="col-md-6 mt-4">
                <h4 className="pt-5"> {찾은상품.title} </h4>
                <p>  {찾은상품.content}</p>
                <p>  {찾은상품.price}원</p>
                <button className="btn btn-danger" onClick={()=> {
                    dispatch(addItem( {id : 1, name : 'Red Knit', count : 1}))
                }}>주문하기</button>
            </div>
            </div>

            <Nav variant="tabs"  defaultActiveKey="link0">
                <Nav.Item>
                <Nav.Link onClick={()=>{ setTab(0) }} eventKey="link0">버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link onClick={()=>{ setTab(1) }} eventKey="link1">버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link onClick={()=>{ setTab(2) }} eventKey="link2">버튼2</Nav.Link>
                </Nav.Item>
            </Nav>

            <TabContent tab={tab}/>


        </div>
        
    )
    }

    // <h4 className="pt-5"> {props.shoes[id].title} </h4>
    // <p>  {props.shoes[id].content}</p>
    // <p>  {props.shoes[id].price}</p>


function TabContent({tab}){

    let [fade, setFade] = useState('')
    let {재고} = useContext(Context1) 

        
    useEffect(()=>{
        let a = setTimeout(()=> {setFade('end')}, 100)
        
        return () =>{
            clearTimeout(a)
            setFade('')
        }
      }, [tab])

      return (
        <div className={'start ' + fade}>
          { [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab] }
        </div>
      )
      }
    //  if 구문활용
    // if (props.tab == 0){
    //     return <div>내용0</div>
    //   }
    //   if (props.tab == 1){
    //     return <div>내용1</div>
    //   }
    //   if (props.tab == 2){
    //     return <div>내용2</div>
    //   }


    //   위의 식과 동일함 
    //   function TabContent({tab}){
    //   return [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]

    export default Detail







        
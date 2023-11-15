/* eslint-disable */ // warning lint 끄는 기능

import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import React, { Component } from 'react';

function App() {
  let post = "부천 맛집";
  // let [메뉴1, a] = useState("메뉴1 추천");
  // let [메뉴2, b] = useState("메뉴2 추천");
  // let [메뉴3, c] = useState("메뉴3 추천");
  let [메뉴, 메뉴변경] = useState(["메뉴1 추천", "메뉴2 추천", "메뉴3 추천"]);

  let [글제목, 글제목변경] = useState(["공부", "파이썬", "자바"]);

  // 자주변경될 것 같은 데이터들은 state에 저장했다가 html에 {데이터바인딩}

  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [따봉후, 따봉변경후] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');
  return (
    <div className="App">

      <div className="black-nav">
        {/* JSX 문법 1. html에 class 넣을 땐 className */}
        <h4 style={{ color: "red", fontSize: "30px" }}>블로그임</h4>
        {/* JSX 문법 3. html에 style속성 넣고싶으면  */}
      </div>
      <h4> {post} </h4>
      {/* JSX 문법 2. 변수를 html에 꽂아넣을 때는 {중괄호}
          데이터 바인딩 : 변수에 있던걸 html에 꽂아넣는 작업
      */}

      <div>
      
        <button onClick={ ()=>{ setModal(!modal) } }> {글제목[0]} </button>
        { 
          modal == true ? <Modal 글제목변경={글제목변경} 글제목={글제목}/> : null
        }
      </div>


      <button onClick={()=> {
        let copy = [...글제목]
        copy.sort();
        글제목변경(copy)
      }}> 가나다 순 정렬 </button>


      <button onClick={() => {
        // 스프레드 연산자를 사용하여 글제목 배열의 복사본을 만듭니다.
        let copy = [...글제목];
        // 복사본 배열의 두 번째 요소를 업데이트합니다.
        copy[1] = '리엑트';
        // 새로운 배열로 상태를 업데이트합니다.
        글제목변경(copy);
      }}> 글 수정</button>

      {/* 
      <div className="list">
        <h4> {메뉴1} </h4>
        <p> 발행</p>
      </div>

      <div className="list">
        <h4> {메뉴2} </h4>
        <p> 발행</p>
      </div>

      <div className="list">
        <h4> {메뉴3} </h4>
        <p> 발행</p>
      </div> 
      */}

      <div>
      {메뉴.map(function(a, i){
        return (
          <div className="list" key={i}>
            <h4 onClick={()=>{
              let copy = [...따봉];
              copy[i] = copy[i]+1;
              따봉변경(copy)
              }}>{메뉴[i]} 👍{따봉[i]} </h4>
            <p> 설명 </p>
          </div>
        )
      })}
      </div>
      
      {
        글제목.map(function(a, i){
          return (
            <div className="list" key={i}>
              <h4 onClick={()=>{
                setModal(true); setTitle(i)}}> {글제목[i]}
              <span onClick={(e)=> { e.stopPropagation();
              // 상위 html로 퍼지는 이벤트 버블링을 막고싶으면 e.stopPropagation() 추가입력

                let copyR = [...따봉후];
                copyR[i] = copyR[i]+1;
                따봉변경후(copyR)
                }}> 👍 </span> {따봉후[i]} 
              </h4>
              <p> 발행</p>
              <button onClick={()=>{
                let copy = [...글제목]
                copy.splice(i, 1);
                글제목변경(copy);
              }}>삭제</button>

            </div>
          )
        })
      }



      <input onChange={(e)=> {
         입력값변경(e.target.value);
      console.log(입력값)
      }}></input>
      <button onClick={() =>{
        let copy = [...글제목];
        copy.unshift(입력값);
        글제목변경(copy)
      }}> 글발행</button>


      {
        modal == true ? <Modal title={title} 글제목={글제목}/> : null
      }




    {/* 
    Class를 이용한 옛날 React 문법 
    class Modal2 extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          nick : 'kim' ,
          age : 20
        }
      }
      render(){
        return (
          <div> 안녕 {this.state.age}
            <button onClick={()=>{
              this.setState({ age: 21})
            }}> 버튼</button>
            </div>
        )
      }
    }
   */}

    </div>
  );
}

  {/* 
      컴포넌트 만드는 법
      1. function을 이용해서 함수를 하나 만들어주고 작명합니다. 

      2. 그 함수 안에 return () 안에 축약을 원하는 HTML을 담으면 됩니다.

      3. 그럼 원하는 곳에서 <함수명></함수명> 사용하면 아까 축약한 HTML이 등장합니다.
       
    주의사항
    1. component 작명할 땐 영어대문자로 보통 작명합니다.

    2. return () 안엔 html 태그들이 평행하게 여러개 들어갈 수 없습니다.

    3. function App(){} 내부에서 만들면 안됩니다. 

    왜냐면 function App(){} 이것도 다시보니 컴포넌트 생성문법

    component 안에 component 를 만들진 않습니다. 

    4. <컴포넌트></컴포넌트> 이렇게 써도 되고 <컴포넌트/> 이렇게 써도 됩니다. 
    */}


function Modal(props) {
  return (

    <div className="modal">
        <h4>{props.글제목[props.title]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={()=> { props.글제목변경([ "열공", "파이썬", "자바"]) }}> 글수정</button>
     </div>
    
  )
}

export default App;

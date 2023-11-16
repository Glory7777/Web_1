import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container, Nav, Navbar} from 'react-bootstrap';
import bg from './img/bg.png';
import data from './data';
import {useState} from "react";
import { Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import Detail from './routes/Detail'
import axios from 'axios'



function App() {

  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();


  return (
    <div className="App">
       <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=> { navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=> { navigate('/detail')}}>Detail</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>


    {/* 
    페이지 이동버튼 만들기
    <Link to="/"> 홈 </Link>
    <Link to="/detail"> 상세페이지 </Link> 
    */}

    
      <Routes>  
      <Route path="/detail/:id" element={ <Detail shoes={shoes} /> } />
        {/* <Detail />로 감싸는 것은 React에게 이것이 컴포넌트의 인스턴스임을 알려주고, 
        React는 이를 가상 DOM에 적절히 렌더링함 */}
        <Route path="/about" element={ <About/> } >  
          <Route path="member" element={ <div>멤버들</div> } />
          <Route path="location" element={ <div>회사위치</div> } />
        </Route>


        <Route path="/event" element={<EventPage/>}>
          <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>}></Route>
          <Route path="two" element={<p>생일기념 쿠폰받기</p>}></Route>
        </Route>


        <Route path="*" element={<div> 없는 페이지</div>} />
      
    
      <Route path="/" element={ 
    <>
      <div className="main-bg" style={{ backgroundImage : 'url(' + bg + ')' }}></div>

          {/*
            <img src={process.env.PUBLIC_URL + '/logo192.png'} width="80%" />
             리액트로 만든 html 페이지를 배포할 때 경로에 배포하면 아무런 문제가 없지만 /어쩌구/ 경로에 추가 수정되어 배포된다면  
            /어쩌구/ 를 뜻하는 process.env.PUBLIC_URL 이것도 더해주면 된다 
            */}

      <div className="container"> 
        <div className="row">
        
        {/* 
        <Card shoes={shoes[1]} i={2}/>
        <Card shoes={shoes[2]} i={3}/> 
        */}

        { shoes.map((a, i) => {
            return (
              <Card shoes={shoes[i]} i={i}> </Card>
            )
          })
        }
        </div>
      </div>

      <button onClick={()=>{
      axios.get('https://codingapple1.github.io/shop/data2.json')
      .then((결과)=>{
        console.log(결과.data)
        console.log(shoes)
        let copy = [...shoes, ...결과.data];
        setShoes(copy);
      })
      .catch(()=>{
        console.log('실패함')
      })
    }}>더보기</button>

      </>
      } />

      

      </Routes>

    </div>
    
  );
}

function About(){
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}


function EventPage(){
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
} 

function Card(props){
  return (
    <div className="col-md-4">
      <img src={"https://codingapple1.github.io/shop/shoes" + (props.i+1) + ".jpg"} width="80%" />
      <h4>{ props.shoes.title }</h4>
      <p>{ props.shoes.price }</p>
    </div>
  )
}




export default App;

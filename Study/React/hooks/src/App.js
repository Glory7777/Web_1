import logo from './logo.svg';
import './App.css';
import React, {useState, useRef, useEffect } from "react" 
import { ReactDOM } from 'react';
import useInput from './component/useInput';
import useTabs from './component/useTabs';
import UseEffect  from './component/useEffect';
import UseTitle from './component/useTitle';
import UseClick from './component/useClick';
import useConfirm from './component/useConfirm';
import usePreventLeave from './component/usePreventLeave';
import useBeforeLeave from './component/useBeforeLeave';
import useFadeIn from './component/useFadeIn';
import useNetwork from './component/useNetwork';
import useScroll from './component/useScroll';
import useFullScreen from './component/useFullScreen';
import useNotification from './component/useNotification';
import useAxios from './component/useAxios';

// const useInput = initialValue => {
//   const [value, setValue] = useState(initialValue);
//   const onChange = event => {
//     console.log(event.target);
//   };
//   return {value, onChange};
// };

function App() {
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);
  // useState

  const maxLen = value => value.length <= 10 && !value.includes("@"); 
  const name = useInput("Mr.", maxLen)
  //useInput

  const content = [
    {
        tab: "Section 1",
        content : "I'm the content of the Section 1"
    },
    {
        tab: "Section 2",
        content : "I'm the content of the Section 2"
    }
]
 //useTabs

  const titleUpdater = UseTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 5000);
// useTitle

const sayHello =  () => console.log("say hello");
const title = UseClick(sayHello);
//UseClick

const deleteWorld = () => console.log( "Deleting the world...")
const abort = () => console.log("Aborted");
const confirmDelete = useConfirm("are you sure", deleteWorld, abort);
//useConfirm

const { enablePrevent, disablePrevent} = usePreventLeave()
//usePreventLeave

const begForLife = () => console.log("Pls don't leave");
useBeforeLeave(begForLife);
//useBeforeLeave

const handleNetworkChange = online => {
  console.log(online ? "We just went online" : "We are offline")
};

const onLine = useNetwork(handleNetworkChange);
//useNetwork


const fadeInH1 = useFadeIn(1, 2);
const fadeInP = useFadeIn(5, 10);
//useFadein

const {y} = useScroll();
//useScroll

const onFullS = isFull => {
  console.log(isFull ? " we are full" : "we are small");
};
const { element, triggerFull, exitFull} = useFullScreen(onFullS);
//useFullscreen

const triggerNotif = useNotification("can you get to the master?", {body: " i can do it"});
// useNotification

const {loading, data, error, refetch} = useAxios({ url : "https://jsonplaceholder.typicode.com/todos/1"});
console.log(`Loading: ${loading}\nError:${error}\nData:${JSON.stringify(data)}`);
//useAxios


  const{ currentItem, changeItem} = useTabs(0, content);
  return (
    <div className="App">
      <h1> Hello {item}</h1>
      <h2> 열심히 해보자</h2>
      <button onClick={incrementItem}> incrementItem</button>
      <button onClick={decrementItem}> decrementItem</button>
      <br></br>
      <input placeholder='Name' {...name} />
      <br></br>
      <h3>{useInput}</h3>
      <br></br>
      <br></br>
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div> {currentItem.content}</div>
      <br></br>
      <br></br>
      <h2 className="App"><UseEffect/></h2>
      <br></br>
      <br></br>
      <h1 ref={title}>Hi! Click me</h1>
      <br></br>
      <br></br>
      <div> <button onClick={confirmDelete}> Delete the world</button></div>
      <br></br>
      <br></br>
      <div> <button onClick={enablePrevent}> Protect</button></div>
      <div> <button onClick={disablePrevent}> Unprotect</button></div>

      <br></br>
      <br></br>
      <h1 {...fadeInH1}>useFadeIn</h1>
      <p {...fadeInP}>useFadeIn 5s</p>

      <br></br>
      <br></br>
      <div> <h1> {onLine ? "Online" : "Offline"}</h1></div>

      <br></br>
      <br></br>
      <div style={{ height : "250vh"}}> <h1 style={{ color: y > 500 ? "red" : "blue" }}> useScroll 테스트 </h1></div>
      <br></br>
      <br></br>
      <div style={{ height : "10vh"}}> 
        <div ref={element} > 
        <img src="data:image/jpeg;base64,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"/> use 스크린 테스트 
        <button onClick={exitFull}> exit fullScreen</button>
      </div>
      </div>
      <button onClick={triggerFull}> Make fullScreen</button>

      <br></br>
      <br></br>
      <div style={{ height : "5vh"}}>  <button onClick={triggerNotif}> Notification</button></div>

      <br></br>
      <br></br>
      <h1>useAxios</h1>
      <h2>{data && data.status} </h2>
      <h3>{loading  && "Loading"}</h3>
      <button onClick={refetch}>Refetch </button> 
    </div>  

    
  );
} // useState를 쓴 것


// class AppUgly extends React.Component{
//   state = {
//     item: 1
//   }
//   render(){
//     const{item} = this.state;
//     return (
//       <div className='App'>
//         <h1>Hello {item}</h1>
//         <h2> Class로 만든것</h2>
//         <button onClick={this.incrementItem2}> incrementItem</button>
//         <button onClick={this.decrementItem2}> decrementItem</button>
//       </div>
//     );
//   }
//   incrementItem = () => {
//     this.setState(state => {
//       return {
//         item: state.item +1
//       };
//     });
//   };

//   decrementItem = () => {
//     this.setState(state => {
//       return {
//         item: state.item - 1
//       };
//     });
//   };

// }
// ReactDOM.render(<AppUgly/>)

// class로 한것

export default App;

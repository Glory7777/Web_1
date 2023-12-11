import logo from './logo.svg';
import './App.css';
import React, {useState, useRef } from "react" 
import { ReactDOM } from 'react';
import useInput from './component/useInput';
import useTabs from './component/useTabs';
import UseEffect  from './component/useEffect';
import UseTitle from './component/useTitle';
import UseClick from './component/useClick';
import useConfirm from './component/useConfirm';
import usePreventLeave from './component/usePreventLeave';
import useBeforeLeave from './component/useBeforeLeave';

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

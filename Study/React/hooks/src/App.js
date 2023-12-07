import logo from './logo.svg';
import './App.css';
import React, {useState} from "react" 
import { ReactDOM } from 'react';
import useInput from './component/useInput';
import useTabs from './component/useTabs';

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

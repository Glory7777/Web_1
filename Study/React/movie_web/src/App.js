import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function Hello() {
  useEffect(() => {
    console.log("hi :) ");
    return ( ) => console.log ( "bye :( ");
  }, []);
  return <h1> Hello</h1>;
}

function App() {

  const[ counter, setValue] = useState(0);
  const[ keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("I run all the time");

  useEffect(() => {
    console.log( "Call the API.");
  }, []);
  useEffect(() => { 
    console.log("I run when 'keyword' changes.");
  }, [keyword]);
  useEffect(() => { 
    console.log("I run when 'counter' changes.");
  }, [counter]);
  useEffect(() => { 
    console.log("I run when 'keyword & counter' changes.");
  }, [keyword, counter]);
  // useState , useEffect

  const [showing, setShowing] = useState(false);
  const onClick2 = () => setShowing((prev) => !prev);
  // CleanUp

  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange2 = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos(currentArray => [toDo, ...currentArray])
    setToDo("");
  };
  console.log(toDos);
  // Todo list
  return (
    <div>
      
      <div>
      <h1 className={styles.title}> welcome</h1>
      <Button text={"continue"}/>
      </div>
      {/* css 입히는 연습 파트 */}

      <div>
        <input value={keyword} onChange={onChange} type="text" placeholder="Search here" />
        <h1>{counter}</h1>
        <button onClick={onClick}> click me</button>
      </div>
      {/* useState , useEffect 연습파트 */}

      <div>
        {showing ? <Hello/> : null}
        <button onClick={onClick2}> {showing ? "Hide" : "Show" } </button>
      </div>
      {/* CleanUp 연습 */}

      <div>
        <br/>
        <br/>
        <br/>
        <h1> My to Dos ({toDos.length})</h1>
        <form onSubmit={onSubmit}>
          <input
            onChange={onChange2}
            value={toDo}
            type="text"
            placeholder="Write your to do"
          />
          <button> Add To Do</button>
        </form>
        <hr/>
        <ul>
        {toDos.reverse().map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;

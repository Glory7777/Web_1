import { useEffect, useState } from "react";
import Button from "../components/Button";
import Movie from "../components/Movie";

function Home() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("I run all the time");

  useEffect(() => {
    console.log("Call the API.");
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
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };
  console.log(toDos);
  // Todo list

  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  // Coin Tracker

  const [loading2, setLoading2] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading2(false);
  };

  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  // Movie App 1
  return (
    <div>
      {/* <div>
        <h1 className={styles.title}> welcome</h1>
        <Button text={"continue"} />
      </div>
      css 입히는 연습 파트 */}

      <div>
        <input
          value={keyword}
          onChange={onChange}
          type="text"
          placeholder="Search here"
        />
        <h1>{counter}</h1>
        <button onClick={onClick}> click me</button>
      </div>
      {/* useState , useEffect 연습파트 */}

      {/* 
      <div>
        {showing ? <Hello></Hello> : null}
        <button onClick={onClick2}> {showing ? "Hide" : "Show"} </button>
      </div>
      CleanUp 연습 
      */}

      <div>
        <br />
        <br />
        <br />
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
        <hr />
        <ul>
          {toDos.reverse().map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      {/* Todo list */}
      <br />
      <br />

      <div>
        <h1> The Coins! {loading ? "" : `(${coins.length})`} </h1>
        {loading ? (
          <strong> Loading...</strong>
        ) : (
          <select>
            {coins.map((coin) => (
              <option>
                {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price}
              </option>
            ))}
          </select>
        )}
        {/* Coin Tracker */}
      </div>
      <hr />

      <div>
        {loading2 ? (
          <h1>Loading...</h1>
        ) : (
          <div>
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </div>
      <hr />
      {/* movie part 1 */}
      
    </div>
  );
}

export default Home;

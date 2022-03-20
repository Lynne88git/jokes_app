import React from "react";
import axios from "axios";
import { IJoke } from "../pages/interfaces";


const defaultJokes: IJoke[] = [];

const JokeList = () => {
  const [jokes, setJokes]: [IJoke[], (jokes: IJoke[]) => void] =
    React.useState(defaultJokes);

  const [loading, setLoading]: [boolean, (loading: boolean) => void] =
    React.useState<boolean>(true);

  const [error, setError]: [string, (error: string) => void] =
    React.useState("");

  React.useEffect(() => {
    axios
      .get<IJoke[]>("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json",
        },
        timeout: 10000,
      })
      .then((response) => {
        setJokes(response.data);
        setLoading(false);
        //console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
        setError(error);
        setLoading(false);
      });
  }, []);

  //this returns the keys
  const jokes_keys = Object.keys(jokes);
  //this returns the values
  const jokes_values = Object.values(jokes);
  {
    jokes_keys.map((key) => {
      /*code here*/
    });
  }
  {
    jokes_values.map((key) => {
      /*code here*/
    });
  }

  //console.log(jokes_keys)
  console.log(jokes_values[1]);
  return (
    <div className="App">
      {loading}
      <ul className="jokes space-y-4">
        <li className="w-96 bg-white shadow rounded">
          {jokes_values[1]}
        </li>
        
        {/* {jokes.map((joke:any) => (
          <li key={joke.id}>
            <h3>{joke.joke}</h3>
          </li>
        ))} */}
      </ul>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default JokeList;

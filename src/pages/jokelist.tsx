import React from "react";
import axios from "axios";
import { IJoke, IJokeResponse } from "../pages/interfaces";

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
      .get<IJokeResponse>("https://icanhazdadjoke.com/search?limit=10", {
        headers: {
          Accept: "application/json",
        },
        timeout: 10000,
      })
      .then((response) => {
        setJokes(response.data.results);
        setLoading(false);
        console.log(response.data.results);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      {loading}
      <ul className="jokes space-y-4">
        {jokes.map((joke) => (
          <li key={joke.id} className="w-96 bg-white shadow rounded elevation-2 bg-topaz">
            {joke.joke}
          </li>
        ))}
      </ul>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default JokeList;

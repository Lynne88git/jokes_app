import React from "react";
import axios from "axios";
import Image from "next/image";
import { IJoke, IJokeResponse } from "../pages/interfaces";
import CryingLaughing from '../../public/assets/images/crying_laughing-2.png';
import "../../styles/Home.module.css"

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
    <div className="joke-container flex-auto grid grid-flow-row-dense grid-cols-4">
      {loading}
      <div className="jokes-sidebar elevation-5">
        <h1 className="jokes-sidebar-title">
          <span>Dad</span>Jokes
        </h1>
        <Image className="joke-sidebar-img" src={CryingLaughing} alt="cryinglaughing" width="400px" height="365px"/>
        <button className="btn text-white font-bold py-2 px-4 rounded elevation-2">New Jokes</button>
      </div>
      <div className="jokes-content col-span-3">
        {jokes.map((joke) => (
          <div key={joke.id} className="bg-white mx-auto lg:mx-0 text-gray-600 font-extrabold my-0 py-5 px-8 shadow-lg">
            {joke.joke}
          </div>
        ))}
      </div>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default JokeList;

import React from "react";
import axios from "axios";
import Image from "next/image";
import { IJoke, IJokeResponse, JokeVotes } from "../pages/interfaces";
import CryingLaughing from "../../public/assets/images/crying_laughing-2.png";
import "../../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

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

  //Add handleVote method with id

  
//  class IJoke implements JokeVotes {
//    [key: string]: any;
//    votes!: number;
//    voteInt!: number;
//    id!: number;
//    joke!: string;
 
//   constructor(id: number, joke: string, votes: number, voteInt: number) {
//     id === id ? { votes } : id
//   }
  
//   }
  

  return (
    <div className="joke-container flex-auto grid grid-flow-row-dense grid-cols-4">
      {loading}
      <div className="jokes-sidebar elevation-5 rounded-lg">
        <h2 className="jokes-sidebar-title">
          <span>Dad</span> Jokes
        </h2>
        <div className="">
          <Image
            className="joke-sidebar-img"
            src={CryingLaughing}
            alt="cryinglaughing"
            width="400px"
            height="365px"
          />
        </div>
        <button className="btn text-white font-bold py-2 px-4 elevation-3 rounded-full">
          New Jokes
        </button>
      </div>
      <div className="jokes-content col-span-3 rounded-r-lg">
        {jokes.map((joke) => (
          <div
            key={joke.id}
            className="bg-white mx-auto lg:mx-0 text-gray-600 font-extrabold my-0 py-10 px-8 shadow-lg border-y"
          >
            <div className="lg:px-5 flex flex-row">
              <button>
                <FontAwesomeIcon
                  style={{ fontSize: "25px" }}
                  icon={faArrowUp}
                ></FontAwesomeIcon>
              </button>

              {(joke.votes = 0)}
              <button>
                <FontAwesomeIcon
                  style={{ fontSize: "25px" }}
                  icon={faArrowDown}
                ></FontAwesomeIcon>
              </button>
              <div className="lg:px-5">
                {joke.joke}
                {(joke.upvote = ++joke.votes)}
                {(joke.downvote = --joke.votes)}
              </div>
            </div>
          </div>
        ))}
      </div>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default JokeList;

import React from "react";
import axios from "axios";
import Image from "next/image";
import { useState, useEffect } from "react";
import { IJoke, IJokeResponse } from "../pages/interfaces";
import CryingLaughing from "../../public/assets/images/crying_laughing-2.png";
import "../../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

import Rofl from "../../public/assets/images/rofl.png";
//import joke from "./joke";
// import CryingLaughingsml from "../../public/assets/images/crying_laughing.png"
// import Laughing from "../../public/assets/images/laughing.png"
// import Grinning from "../../public/assets/images/grinning.png"
// import Expressionless from "../../public/assets/images/expressionless.png"
// import Eyeroll from "../../public/assets/images/eyeroll.png"
// import Sleeping from "../../public/assets/images/sleeping.png"

const defaultJokes: IJoke[] = [];

const JokeList = () => {
  const [jokes, setJokes]: [IJoke[], (jokes: IJoke[]) => void] =
    useState(defaultJokes);

  const [loading, setLoading]: [boolean, (loading: boolean) => void] =
    useState<boolean>(true);

  const [error, setError]: [string, (error: string) => void] =
    useState("");

  const GetApi = () => {
    const pageNo = Math.floor(Math.random() * 6) + 1;
    axios
      .get<IJokeResponse>(
        `https://icanhazdadjoke.com/search?limit=10&page=${pageNo}`,
        {
          headers: {
            Accept: "application/json",
          },
          timeout: 100000,
        }
      )
      .then((response) => {
        setJokes(response.data.results.map((joke) => ({ ...joke, votes: 0 })));
        setLoading(false);
        console.log(response.data.results);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
        setLoading(false);
      });


  };

  useEffect(() => {GetApi();}, []);



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
        <button
          className="btn text-white font-bold py-2 px-4 elevation-3 rounded-full"
          onClick={GetApi}
        >
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
              <div className="container-sm">
                <div className="flex flex-row">
                  <button
                    className="px-3"
                    onClick={() =>
                      setJokes(
                        jokes.map((j) =>
                          j.id === joke.id ? { ...j, votes: j.votes + 1 } : j,   
                         
                        )
                      )
                    }
                  >

                    <FontAwesomeIcon
                      style={{ fontSize: "25px" }}
                      icon={faArrowUp}
                    ></FontAwesomeIcon>
                  </button>

                  <div className="votes-count rounded-full elevation-2" style={{borderColor: (joke.votes >=15) ? "#4CAF50"  
                          : (joke.votes >=12) ? "#8BC34A"
                          : (joke.votes >=9) ? "#CDDC39"
                          : (joke.votes >=6) ? "#FFEB383"
                          : (joke.votes >=3) ? "#FFC107"
                          : (joke.votes >=0) ? "#FF9800"
                          : "#f44336" }}>
                  
                    
                    {joke.votes ?? 0} 

                  </div>
                  <button
                    className="px-3"
                    onClick={() =>
                      setJokes(
                        jokes.map((j) =>
                          j.id === joke.id ? { ...j, votes: j.votes - 1 } : j
                        )
                      )
                    }
                  >
                    <FontAwesomeIcon
                      style={{ fontSize: "25px" }}
                      icon={faArrowDown}
                    ></FontAwesomeIcon>
                  </button>
                </div>
              </div>
              <div className="lg:px-5">{joke.joke}</div>
              {/* {joke.votes >= 15 } */}

              <div className="container-sm ml-auto">
                <div className="flex flex-row">
                  <div className="joke-smiley rounded-full">
                    <Image
                      className="joke-sidebar-img"
                      src={Rofl}
                      alt="emoji-reaction"
                      width="400px"
                      height="400px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {error && <p className="error">{error}</p>}
    </div>
  );
};
      // const setJokes=()=>{
      //   if(votes >= 15){
      //     return "#4CAF50"
      //   }
      //   else if(votes >= 12){
      //     return "#8BC34A"
      //   }
      //   else if(votes >= 9){
      //     return "#CDDC39"
      //   }
      //   else if(votes >= 6){
      //     return "#FFEB383"
      //   }
      //   else if(votes >= 3){
      //     return "#FFC107"
      //   }
      //   else if(votes >= 0){
      //     return "#FF9800"
      //   }
      //   else {
      //     return "#f44336"
      //   }
      // }

export default JokeList;
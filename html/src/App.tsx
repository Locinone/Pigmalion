import React from "react";
//import Board from "./Components/Board";
import Button from "./Components/Button";
import Hero from "./Components/Hero";
//import Nft from "./Components/Nft";

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <h1>User1:</h1>
        <Button/>
        <Hero/>
        <h1>User2:</h1>
        <Button/>
      </div>
    );
  }
}

export default Game;

// From https://reactjs.org/tutorial/tutorial.html#declaring-a-winner
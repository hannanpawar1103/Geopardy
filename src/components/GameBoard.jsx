import React from "react";
import { Link } from "react-router-dom";
import { useClickedValues } from "../Context/ClickedValuesContext";
import gameboardbg from "../img/gameboard.jpg";
import '../App.css'

const GameBoard = () => {
  const categories = [
    "FOOTBALL",
    "YOUTUBE",
    "MEMES",
    "GEOGRAPHY",
    "GK",
    "GAMES",
  ];
  const values = ["₹200", "₹400", "₹600", "₹800", "₹1000"];
  const { clickedValues, handleClick } = useClickedValues();

  return (
    <div className="" style={{
      backgroundImage: `url(${gameboardbg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
      <div
      className="game-board custom-grid mx-auto w-full h-screen"
      
    >
      {categories.map((category) => (
        <div
          key={category}
          className="category rounded-lg bg-blue-900 text-yellow-400 border border-black flex items-center justify-center text-lg font-bold"
        >
          {category}
        </div>
      ))}
      {values.map((value) =>
        categories.map((category) => (
          <Link
            to={`/value/${category}/${value}`}
            key={`${category}-${value}`}
            className={`value ${
              clickedValues[`${category}-${value}`]
                ? "bg-red-500"    
                : "bg-blue-900"
            } text-yellow-400 border rounded-lg border-black flex items-center justify-center text-lg font-bold`}
            onClick={() => handleClick(category, value)}
          >
            {value}
          </Link>
        ))
      )}
    </div>
    </div>
  );
};

export default GameBoard;
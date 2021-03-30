import _JSXStyle from "styled-jsx/style";
import Image from "next/image";
import { useState } from 'react';
import Teammate from "./Teammate";

const BattleScreen = ({
  activeScreen,
  handleSetActiveScreen,
  name,
  playerTotal,
}) => {
  const [mainPlayerTotal, setMainPlayerTotal] = useState(0);
  const [selectedPlayer, setSelectedPlayer] = useState("");
  const [teammateLevel, setTeammateLevel] = useState(1);
  
  const handleSetSelectedPlayer = (name) => setSelectedPlayer(name);
  const handleSetTeammateLevel = (amount) => setTeammateLevel(prevLevel => prevLevel + amount)

  const handleOneShot = (amount) => {
    selectedPlayer === "main-player" &&
      setMainPlayerTotal(mainPlayerTotal => mainPlayerTotal + amount)

      selectedPlayer === "teammate" &&
      setTeammateLevel(prevLevel => prevLevel + amount)
  };

  return (
    <div className={activeScreen !== "battle-screen" ? "hide" : "show"}>
      <div className="player-wrapper">
        <button
          className="back-button"
          onClick={(event) => handleSetActiveScreen(event, "character-screen")}
        >
          &larr;
        </button>
        <button className="add-friend secondary">Add Friend</button>
        <div className="player-grid">
          <div>
            <h2>Good team: {playerTotal + mainPlayerTotal + teammateLevel}</h2>
            <h3 className="player-total text-center">{playerTotal + mainPlayerTotal}</h3>
            <div className="player-icon text-center">
              <Image src="/player.svg" width={100} height={100} />
            </div>
            <button className="text-center grid-button" onClick={() => handleSetSelectedPlayer("main-player")}>{name}</button>
          </div>
          <Teammate 
            handleSetSelectedPlayer={handleSetSelectedPlayer}
            level={teammateLevel}
          />
        </div>
      </div>
      <div>
        <h2 className="text-center">
          <span>Monster</span>
        </h2>
      </div>
      <div className="buttons">
        <div className="column column-1">
          <button
            onClick={() => handleOneShot(+1)}
          >
            +1
          </button>
          <button
            className="tertiary"
            onClick={() => handleOneShot(-1)}
          >
            -1
          </button>
        </div>
        <div className="column column-2">
          <button
            onClick={() => handleOneShot(+3)}
          >
            +3
          </button>
          <button
            className="tertiary"
            onClick={() => handleOneShot(-3)}
          >
            -3
          </button>
        </div>
        <div className="column column-3">
          <button
            onClick={() => handleOneShot(+5)}
          >
            +5
          </button>
          <button
            className="tertiary"
            onClick={() => handleOneShot(-5)}
          >
            -5
          </button>
        </div>
      </div>

      <style jsx>{`
        .player-wrapper {
          position: relative;
        }

        .back-button {
          position: absolute;
          top: 0;
          left: 0;
        }

        .add-friend {
          position: absolute;
          top: 0;
          right: 15px;
        }

        .player-grid {
          display: grid;
          grid-template-columns: repeat(1fr);
          grid-auto-rows: minmax(100px, auto);
          padding-top: 75px;
          margin-bottom: 50px;
        }

        .grid-button {
          display: block;
          margin: auto;
        }
      `}</style>
    </div>
  );
};

export default BattleScreen;

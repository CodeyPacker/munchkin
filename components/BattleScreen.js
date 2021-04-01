import _JSXStyle from "styled-jsx/style";
import Image from "next/image";
import { useState } from "react";
import Teammate from "./Teammate";
import MonsterSearch from "./MonsterSearch";

const BattleScreen = ({
  activeScreen,
  handleSetActiveScreen,
  name,
  playerTotal,
}) => {
  const [mainPlayerTotal, setMainPlayerTotal] = useState(0);
  const [selectedPlayer, setSelectedPlayer] = useState("");
  const [teammateLevel, setTeammateLevel] = useState(1);
  const [showTeammate, setShowTeammate] = useState(false);

  const handleSetSelectedPlayer = (name) => setSelectedPlayer(name);

  const handleOneShot = (amount) => {
    selectedPlayer === "main-player" &&
      setMainPlayerTotal((mainPlayerTotal) => mainPlayerTotal + amount);

    selectedPlayer === "teammate" &&
      setTeammateLevel((prevLevel) => prevLevel + amount);
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
        <button
          className="add-friend secondary"
          onClick={() => setShowTeammate(!showTeammate)}
        >
          {showTeammate ? "Remove friend" : "Add friend"}
        </button>
        <h2 className="team-total">
          Good team: {playerTotal + mainPlayerTotal + teammateLevel}
        </h2>
        <div className="player-grid">
          <div>
            <h3 className="player-total text-center">
              {playerTotal + mainPlayerTotal}
            </h3>
            <div className="player-icon text-center">
              <Image src="/player.svg" width={100} height={100} />
            </div>
            <button
              className="text-center main-player-button"
              onClick={() => handleSetSelectedPlayer("main-player")}
            >
              {name}
            </button>
          </div>
          {showTeammate && (
            <Teammate
              handleSetSelectedPlayer={handleSetSelectedPlayer}
              level={teammateLevel}
            />
          )}
        </div>
      </div>
      <div>
        <MonsterSearch />
      </div>
      <div className="buttons three-column">
        <div className="column column-1">
          <button className="one-shot-add" onClick={() => handleOneShot(+1)}>
            +1
          </button>
          <button className="tertiary" onClick={() => handleOneShot(-1)}>
            -1
          </button>
        </div>
        <div className="column column-2">
          <button className="one-shot-add" onClick={() => handleOneShot(+3)}>
            +3
          </button>
          <button className="tertiary" onClick={() => handleOneShot(-3)}>
            -3
          </button>
        </div>
        <div className="column column-3">
          <button className="one-shot-add" onClick={() => handleOneShot(+5)}>
            +5
          </button>
          <button className="tertiary" onClick={() => handleOneShot(-5)}>
            -5
          </button>
        </div>
      </div>

      <style jsx>{`
        .player-wrapper {
          position: relative;
        }

        .team-total {
          padding-top: 70px;
          text-align: center;
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
          grid-template-columns: repeat(2, 1fr);
          grid-auto-rows: minmax(100px, auto);
          margin-bottom: 50px;
        }

        .main-player-button {
          display: block;
          margin: auto;
        }

        .one-shot-add {
          margin-bottom: 20px;
        }

        .buttons button {
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export default BattleScreen;

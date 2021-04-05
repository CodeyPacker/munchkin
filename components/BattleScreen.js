import _JSXStyle from "styled-jsx/style";
import Image from "next/image";
import { useState } from "react";
import { findMatches } from "./../scripts/utils";
import { resetField } from "./../scripts/utils";
import Teammate from "./Teammate";
import MonsterSearch from "./MonsterSearch";
import Monster from "./Monster";
import ResultScreen from "../components/ResultScreen";

const BattleScreen = ({
  activeScreen,
  handleSetActiveScreen,
  name,
  playerTotal,
  setActiveBattle,
}) => {
  const [mainPlayerTotal, setMainPlayerTotal] = useState(0);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [teammateLevel, setTeammateLevel] = useState(0);
  const [showTeammate, setShowTeammate] = useState(false);
  const [selectedMonsters, setSelectedMonsters] = useState([]);
  const [matchedMonsters, setMatchedMonsters] = useState([]);
  const handleSetSelectedPlayer = (name) => setSelectedPlayer(name);

  const handleOneShot = (amount, name) => {
    if (selectedPlayer === "main-player" || selectedPlayer === "teammate") {
      handlePlayerOneShot(amount);
    } else {
      handleMonsterOneShot(amount, name);
    }
  };

  const handlePlayerOneShot = (amount) => {
    selectedPlayer === "main-player" &&
      setMainPlayerTotal((mainPlayerTotal) => mainPlayerTotal + amount);

    selectedPlayer === "teammate" &&
      setTeammateLevel((prevLevel) => prevLevel + amount);
  };

  const handleMonsterOneShot = (amount) => {
    const updatedMonsters = selectedMonsters.map((monster) => {
      if (monster.name === selectedPlayer) {
        return { ...monster, power: (monster.power += amount) };
      }
      return monster;
    });

    setSelectedMonsters(updatedMonsters);
  };

  const handleSelectedMonsters = (monsterName) => {
    const selected = matchedMonsters.find(
      (monster) => monster.name === monsterName
    );
    setSelectedMonsters((prevArr) => [...prevArr, selected]);
    setMatchedMonsters([]);
    resetField("monster-search");
  };

  const handleMatchedMonsters = (e) => {
    setMatchedMonsters(findMatches(e.target.value));
  };

  const handleEndBattle = (event, screen) => {
    handleSetActiveScreen(event, screen);
    setActiveBattle(false);
  };

  const handleRemoveMonster = (name) => {
    const monsterTest = (monster) => monster.name === name;
    const monsterIndex = selectedMonsters.findIndex(monsterTest);
    const monstersClone = Array.from(selectedMonsters);
    monstersClone.splice(monsterIndex, 1);
    setSelectedMonsters(monstersClone);
  };

  const handleTeammate = () => {
    setShowTeammate(!showTeammate);
    setTeammateLevel(0);
  };

  const monsterPower = selectedMonsters.reduce(
    (acc, monster) => acc + monster.power,
    0
  );

  return (
    <section>
      <div className={activeScreen !== "battle-screen" ? "hide" : "show"}>
        <div className="player-wrapper">
          <button
            className="back-button"
            onClick={(event) =>
              handleSetActiveScreen(event, "character-screen")
            }
          >
            &larr;
          </button>
          <button
            className="add-friend secondary"
            onClick={() => handleTeammate()}
          >
            {showTeammate ? "Remove friend" : "Add friend"}
          </button>
          <h2 className="team-total">
            Good team: {playerTotal + mainPlayerTotal + teammateLevel}
          </h2>
          <div className={`player-grid ${showTeammate ? "show-teammate" : ""}`}>
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
        <Monster
          selectedMonsters={selectedMonsters}
          handleSetSelectedPlayer={handleSetSelectedPlayer}
          handleRemoveMonster={handleRemoveMonster}
        />
        <h2 className="monster-total">Bad Team: {monsterPower}</h2>
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
        <div>
          <MonsterSearch
            handleSelectedMonsters={handleSelectedMonsters}
            handleMatchedMonsters={handleMatchedMonsters}
            matchedMonsters={matchedMonsters}
          />
        </div>
        {selectedMonsters.length > 0 && (
          <button
            className="end-battle"
            onClick={(e) => handleEndBattle(e, "result-screen")}
          >
            End Battle
          </button>
        )}
        <style jsx>{`
          .player-wrapper {
            position: relative;
          }

          .team-total {
            padding-top: 70px;
            text-align: center;
          }

          .monster-total {
            padding-bottom: 10px;
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
            grid-template-columns: repeat(1fr);
            grid-auto-rows: minmax(100px, auto);
            margin-bottom: 50px;
          }

          .player-grid.show-teammate {
            grid-template-columns: repeat(2, 1fr);
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

          .end-battle {
            margin: auto;
          }
        `}</style>
      </div>
      <ResultScreen
        handleSetActiveScreen={handleSetActiveScreen}
        activeScreen={activeScreen}
        selectedMonsters={selectedMonsters}
        playersTotal={playerTotal + mainPlayerTotal + teammateLevel}
        monstersTotal={monsterPower}
        setMainPlayerTotal={setMainPlayerTotal}
        setSelectedMonsters={setSelectedMonsters}
        setShowTeammate={setShowTeammate}
        setTeammateLevel={setTeammateLevel}
        showTeammate={showTeammate}
      />
    </section>
  );
};

export default BattleScreen;

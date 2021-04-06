import _JSXStyle from "styled-jsx/style";
import Image from "next/image";
import EquipmentList from "./EquipmentList";

const CharacterScreen = ({
  handleLevelChange,
  boardLevel,
  name,
  gender,
  activeScreen,
  handleSetActiveScreen,
  playerTotal,
  handlePlayerTotal,
  handleAllEquipmentLevels,
  allEquipmentLevels,
  setActiveBattle,
  activeBattle,
}) => {
  const handleAllChanges = (amount) => {
    handleLevelChange(amount);
    handlePlayerTotal(amount);
  };

  const handleStartBattle = (event, screen) => {
    handleSetActiveScreen(event, screen);
    setActiveBattle((prev) => !prev);
  };

  return (
    <div className={activeScreen !== "character-screen" ? "hide" : "show"}>
      {activeBattle && (
        <img
          className="forward-button"
          onClick={(event) => handleSetActiveScreen(event, "battle-screen")}
          src="/arrow.svg"
        />
      )}
      <h3 className="player-total">{playerTotal}</h3>
      <div className="player-icon text-center">
        <Image src="/player.svg" width={100} height={100} />
      </div>
      <h2 className="text-center">Board Level</h2>
      <div className="character-level">
        <button onClick={() => handleAllChanges(-1)}>-1</button>
        <span>{boardLevel}</span>
        <button onClick={() => handleAllChanges(+1)}>+1</button>
      </div>
      <div className="character-power">
        <EquipmentList
          allEquipmentLevels={allEquipmentLevels}
          handleAllEquipmentLevels={handleAllEquipmentLevels}
        />
      </div>
      {!activeBattle && (
        <button
          className="battle secondary"
          onClick={(e) => handleStartBattle(e, "battle-screen")}
        >
          Fight A Monster
        </button>
      )}

      <style jsx>{`
        .character-screen {
          position: relative;
        }

        .forward-button {
          position: absolute;
          top: 15px;
          right: 15px;
          font-size: 2.5em;
          width: 35px;
        }

        .gender {
          font-size: 14px;
          padding: 0;
        }

        .player-total {
          font-size: 30px;
          font-weight: bold;
          text-align: center;
        }

        .character-level {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 30px;
          font-weight: bold;
        }

        .battle {
          margin: auto;
          display: block;
        }
      `}</style>
    </div>
  );
};

export default CharacterScreen;

import _JSXStyle from "styled-jsx/style";
import Image from "next/image";
import EquipmentList from "./EquipmentList";

const CharacterScreen = ({
  handleLevelChange,
  boardLevel,
  name,
  gender,
  activeScreen,
  playerTotal,
  handlePlayerTotal,
  handleAllEquipmentLevels,
  allEquipmentLevels,
}) => {
  const handleAllChanges = (amount) => {
    handleLevelChange(amount);
    handlePlayerTotal(amount);
  };

  return (
    <div className={activeScreen !== "character-screen" ? "hide" : "show"}>
      <h2 className="text-center">
        {name} <span className="gender">({gender})</span>
      </h2>
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

      <style jsx>{`
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
      `}</style>
    </div>
  );
};

export default CharacterScreen;

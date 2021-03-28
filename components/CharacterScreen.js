import _JSXStyle from "styled-jsx/style";
import Image from "next/image";
import EquipmentList from "./equipment/EquipmentList";

const CharacterScreen = ({
  handleLevelChange,
  boardLevel,
  name,
  gender,
  activeScreen,
  playerTotal,
  handlePlayerTotal,
  handleAllEquipmentLevels,
}) => {
  const handleAllChanges = (amount) => {
    handleLevelChange(amount);
    handlePlayerTotal(amount);
  };
  return (
    <div className={activeScreen !== "character-screen" ? "hide" : "show"}>
      <h2>
        {name} ({gender}) - {playerTotal}
      </h2>
      <h2>Board Level</h2>
      <div className="character-level">
        <button onClick={() => handleAllChanges(-1)}>-1</button>
        <span>{boardLevel}</span>
        <button onClick={() => handleAllChanges(+1)}>+1</button>
      </div>
      <div className="character-power">
        <h2>Equipment Level - </h2>
        <EquipmentList handleAllEquipmentLevels={handleAllEquipmentLevels} />
      </div>
      <Image
        className="player-icon"
        src="/player.svg"
        width={200}
        height={200}
      />
      <style global jsx>{`
        .character-level {
          display: flex;
          justify-content: space-between;
        }
      `}</style>
    </div>
  );
};

export default CharacterScreen;

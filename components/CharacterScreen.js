import _JSXStyle from "styled-jsx/style";
import Image from "next/image";
import Equipment from "./Equipment";

const CharacterScreen = ({
  allEquipmentLevels,
  handleLevelChange,
  setAllEquipmentLevels,
  playerLevel,
  name,
  gender,
  activeScreen,
}) => {
  return (
    <div className={activeScreen !== "character-screen" ? "hide" : "show"}>
      <h2>
        {name} ({gender})
      </h2>
      <h2>Board Level</h2>
      <div className="character-level">
        <button onClick={() => handleLevelChange(-1)}>-1</button>
        <span>{playerLevel}</span>
        <button onClick={() => handleLevelChange(+1)}>+1</button>
      </div>
      <div className="character-power">
        <h2>Equipment Level - </h2>
        <Equipment
          allEquipmentLevels={allEquipmentLevels}
          setAllEquipmentLevels={setAllEquipmentLevels}
          type="helmet"
        />
        <Equipment
          allEquipmentLevels={allEquipmentLevels}
          setAllEquipmentLevels={setAllEquipmentLevels}
          type="armor"
        />
        <Equipment
          allEquipmentLevels={allEquipmentLevels}
          setAllEquipmentLevels={setAllEquipmentLevels}
          type="footgear"
        />
        <Equipment
          allEquipmentLevels={allEquipmentLevels}
          setAllEquipmentLevels={setAllEquipmentLevels}
          type="weapons"
        />
        <Equipment
          allEquipmentLevels={allEquipmentLevels}
          setAllEquipmentLevels={setAllEquipmentLevels}
          type="misc"
        />
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

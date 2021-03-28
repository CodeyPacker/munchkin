import _JSXStyle from "styled-jsx/style";
import Image from "next/image";
const CharacterScreen = ({ playerLevel, handlePlayerLevelChange, name, gender, activeScreen }) => {
  console.log(activeScreen);
  return (
    <div className={activeScreen !== "character-screen" ? "hide" : "show"}>
      <h2>{name}</h2>
      <h3>{gender} </h3>
      <div className="character-level">
        <button onClick={() => handlePlayerLevelChange(-5)}>-5</button>
        <button onClick={() => handlePlayerLevelChange(-3)}>-3</button>
        <button onClick={() => handlePlayerLevelChange(-1)}>-1</button>
        <h3>Level {playerLevel}</h3>
        <button onClick={() => handlePlayerLevelChange(1)}>+1</button>
        <button onClick={() => handlePlayerLevelChange(3)}>+3</button>
        <button onClick={() => handlePlayerLevelChange(5)}>+5</button>
      </div>
      <Image
        className="player-icon"
        src="/player.svg"
        width={500}
        height={500}
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

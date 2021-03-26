import _JSXStyle from "styled-jsx/style";
import Image from "next/image";
const CharacterScreen = ({ playerLevel, handlePlayerLevelChange }) => {
  return (
    <div>
      <h2>Character Level</h2>
      <div className="character-level">
        <button onClick={() => handlePlayerLevelChange(-1)}>-</button>
        <h3>Level {playerLevel}</h3>
        <button onClick={() => handlePlayerLevelChange(1)}>+</button>
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

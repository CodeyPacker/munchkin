import _JSXStyle from "styled-jsx/style";
import Image from "next/image";

const BattleScreen = ({
  activeScreen,
  handleSetActiveScreen,
  name,
  playerTotal,
}) => {
  return (
    <div className={activeScreen !== "battle-screen" ? "hide" : "show"}>
      <div className="player-wrapper">
        <button
          className="back-button"
          onClick={(event) => handleSetActiveScreen(event, "character-screen")}
        >
          &larr;
        </button>
        <h2 className="text-center">
          <span>Munchkin</span>
        </h2>
        <h2 className="text-center">
          {name}
        </h2>
        <h3 className="player-total text-center">{playerTotal}</h3>
        <div className="player-icon text-center">
          <Image src="/player.svg" width={100} height={100} />
        </div>
      </div>
      <div>
        <h2 className="text-center">
          <span>Monster</span>
        </h2>
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

      `}</style>
    </div>
  );
};

export default BattleScreen;

// active battle state
// cody will figure it out later

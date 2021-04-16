import _JSXStyle from "styled-jsx/style";
import Image from "next/image";

const Teammate = ({ level, handleSetSelectedPlayer, selectedPlayer }) => {
  return (
    <div className="teammate-wrapper">
      <h3 className="player-total text-center">{level}</h3>
      <div className="player-icon text-center">
        <Image src="/teammate.svg" width={80} height={80} />
      </div>
      <button
        className="text-center teammate-button"
        onClick={() => handleSetSelectedPlayer("teammate")}
      >
        Friend
      </button>
      {selectedPlayer === "teammate" && (
        <img className="pencil" src="pencil.svg" alt="editing monster" />
      )}
      <style jsx>{`
        .teammate-wrapper {
          position: relative;
        }

        .pencil {
          width: 20px;
          position: absolute;
          bottom: 17px;
          right: 0;
        }

        .teammate-button {
          display: block;
          margin: auto;
        }
      `}</style>
    </div>
  );
};

export default Teammate;

import _JSXStyle from "styled-jsx/style";
import Image from "next/image";

const Teammate = ({ level, handleSetSelectedPlayer }) => {
  return (
    <div>
      <h3 className="player-total text-center">{level}</h3>
      <div className="player-icon text-center">
        <Image src="/player.svg" width={100} height={100} />
      </div>
      <button className="text-center grid-button" onClick={() => handleSetSelectedPlayer("teammate")}>Friend</button>
      <style jsx>{`
        .player-grid {
            display: grid;
            grid-template-columns: repeat(1fr);
            grid-auto-rows: minmax(100px, auto);
            padding-top: 75px;
            margin-bottom: 50px;
          }
  
          .grid-button {
            display: block;
            margin: auto;
          }
      `}</style>
    </div>
  );
};

export default Teammate;

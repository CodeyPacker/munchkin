import _JSXStyle from "styled-jsx/style";
import Image from "next/image";

const Monster = ({
  selectedMonsters,
  handleSetSelectedPlayer,
  handleRemoveMonster,
}) => {
  return (
    <div
      className={`monster-grid ${selectedMonsters.length > 1 && "multiple"}`}
    >
      {selectedMonsters.map((monster, i) => {
        return (
          <div className="monster" key={i}>
            <h3 className="power">{monster.power}</h3>
            <span
              className="remove-monster"
              role="button"
              onClick={() => handleRemoveMonster(monster.name)}
            >
              X
            </span>
            <Image src="/monster.svg" width={80} height={80} />
            <button
              className="secondary monster-name"
              onClick={() => handleSetSelectedPlayer(monster.name)}
            >
              {monster.name}
            </button>
          </div>
        );
      })}

      <style jsx>{`
        .monster-grid {
          display: grid;
          grid-template-columns: repeat(1fr);
          grid-auto-rows: minmax(100px, auto);
          margin-bottom: 25px;
        }

        .monster-grid.multiple {
          grid-template-columns: repeat(2, 1fr);
        }

        .monster {
          text-align: center;
          margin-bottom: 0;
          position: relative;
        }

        .monster-name {
          margin: auto;
        }

        .remove-monster {
          position: absolute;
          top: 0;
          center: 0;
          color: #f9a7a7;
        }
      `}</style>
    </div>
  );
};

export default Monster;

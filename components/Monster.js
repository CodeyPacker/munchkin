import _JSXStyle from "styled-jsx/style";
import Image from "next/image";

const Monster = ({ selectedMonsters }) => {
  return (
    <div
      className={`monster-grid ${selectedMonsters.length > 1 && "multiple"}`}
    >
      {selectedMonsters.map((monster, i) => {
        return (
          <div className="monster" key={i}>
            <h3 className="power">{monster.power}</h3>
            <span role="button">X</span>
            <Image src="/monster.svg" width={100} height={100} />
            <button className="secondary monster-name">{monster.name}</button>
          </div>
        );
      })}

      <style jsx>{`
        .monster-grid {
          display: grid;
          grid-template-columns: repeat(1fr);
          grid-auto-rows: minmax(100px, auto);
          margin-bottom: 50px;
        }

        .monster-grid.multiple {
          grid-template-columns: repeat(2, 1fr);
        }

        .monster {
          text-align: center;
          margin-bottom: 30px;
        }

        .monster-name {
          margin: auto;
        }
      `}</style>
    </div>
  );
};

export default Monster;

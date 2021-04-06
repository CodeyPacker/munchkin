import _JSXStyle from "styled-jsx/style";
import Image from "next/image";

const Monster = ({
  selectedMonsters,
  handleSetSelectedPlayer,
  handleRemoveMonster,
}) => {
  return (
    <section>
      {selectedMonsters.length < 3 ? (
        <div className={`monster-grid multiple`}>
          {selectedMonsters.map((monster, i) => {
            return (
              <div className="monster">
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
              text-transform: capitalize;
            }

            .remove-monster {
              position: absolute;
              top: 0;
              center: 0;
              color: #f9a7a7;
            }
          `}</style>
        </div>
      ) : (
        <div className="monster-table-layout">
          {selectedMonsters.map((monster, i) => {
            return (
              <div className="monster">
                <p
                  onClick={() => handleSetSelectedPlayer(monster.name)}
                  className="name"
                >
                  {monster.name}
                </p>
                <span
                  className="remove-monster"
                  role="button"
                  onClick={() => handleRemoveMonster(monster.name)}
                >
                  X
                </span>
                <span className="power">{monster.power}</span>
              </div>
            );
          })}

          <style jsx>{`
            .monster {
              display: flex;
              border-bottom: 1px solid gray;
              align-items: center;
              padding-right: 10px;
              font-size: 1.4em;
            }

            .name {
              width: 90%;
              margin-bottom: 0;
              text-transform: capitalize;
              font-weight: bold;
            }

            .remove-monster {
              opacity: 0.3;
              font-weight: bold;
              transition: color 0.2s, opacity 0.2s;
              font-size: 0.7em;
            }

            .remove-monster:hover {
              color: #fa7e7e;
              opacity: 1;
            }

            .power {
              margin-left: 15px;
              text-align: right;
              font-weight: bold;
              min-width: 30px;
            }
          `}</style>
        </div>
      )}
    </section>
  );
};

export default Monster;

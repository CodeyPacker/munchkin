import _JSXStyle from "styled-jsx/style";
import Image from "next/image";

const Monster = ({
  selectedMonsters,
  handleSetSelectedPlayer,
  handleRemoveMonster,
}) => {
  return (
    <section>
      {selectedMonsters.length < 2 ? (
        <div className={`monster-grid`}>
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
              display: flex;
              justify-content: center;
              margin-bottom: 25px;
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
                <Image src="/monster.svg" width={69} height={69} />
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
              border-bottom: 1px solid #C8C8C8;
              align-items: center;
              padding-right: 10px;
              font-size: 1.4em;
              padding-top: 10px;
            }

            .name {
              width: 90%;
              margin-bottom: 0;
              text-transform: capitalize;
              font-weight: bold;
              cursor: pointer;
            }


            .remove-monster {
              opacity: 0.7;
              font-weight: bold;
              color: #fa7e7e;
              font-size: 0.7em;
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

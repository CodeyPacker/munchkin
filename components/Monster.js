import _JSXStyle from "styled-jsx/style";
import Image from "next/image";

const Monster = ({
  selectedMonsters,
  selectedPlayer,
  handleSetSelectedPlayer,
  handleRemoveMonster,
}) => {
  return (
    <div>
      {selectedMonsters.length < 2 ? (
        <div className={`monster-grid`}>
          {selectedMonsters.map((monster, i) => {
            return (
              <div className="monster">
                <h3 className="power">{monster.power}</h3>
                <img className="monster-image" src="/monster.svg" />
                <img
                  className="remove-monster bold"
                  role="button"
                  onClick={() => handleRemoveMonster(monster.name)}
                  src="/remove.svg"
                />
                <button
                  className="secondary monster-name"
                  onClick={() => handleSetSelectedPlayer(monster.name)}
                >
                  {monster.name}
                </button>
                {monster.name === selectedPlayer && (
                  <img
                    className="pencil"
                    src="pencil.svg"
                    alt="editing monster"
                  />
                )}
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

            .monster-image {
              display: block;
              margin: auto;
              margin-bottom: 5px;
            }

            .monster-name {
              display: inline-block;
              margin: auto;
              text-transform: capitalize;
            }

            .remove-monster {
              color: #f9a7a7;
              position: absolute;
              left: -30px;
              bottom: 10px;
              width: 15px;
            }

            .pencil {
              position: absolute;
              width: 20px;
              display: inline-block;
              bottom: 10px;
              right: -30px;
            }
          `}</style>
        </div>
      ) : (
        <div className="monster-table-layout">
          {selectedMonsters.map((monster, i) => {
            return (
              <div className={`monster ${monster.name.length > 10 && "long-name"}`}>
                <img className="monster-image" src="/monster.svg" />
                <p
                  onClick={() => handleSetSelectedPlayer(monster.name)}
                  className="name"
                >
                  {monster.name}
                </p>
                {monster.name === selectedPlayer && (
                  <img
                    className="pencil"
                    src="pencil.svg"
                    alt="editing monster"
                  />
                )}
                <div className="power-remove-wrapper">
                  <span className="power">{monster.power}</span>
                  <img
                    className="remove-monster bold"
                    role="button"
                    onClick={() => handleRemoveMonster(monster.name)}
                    src="/remove.svg"
                  />
                </div>
              </div>
            );
          })}

          <style jsx>{`
            .monster {
              display: flex;
              border-bottom: 1px solid #c8c8c8;
              align-items: center;
              padding-right: 10px;
              font-size: 1.4em;
              padding-top: 10px;
            }

            .name {
              width: fit-content;
              margin-bottom: 0;
              text-transform: capitalize;
              font-weight: bold;
              cursor: pointer;
              margin-right: 0;
            }

            .name.small-font {
              font-size: .5em;
            }

            .power-remove-wrapper {
              margin-left: auto;
            }

            .remove-monster {
              cursor: pointer;
              width: 15px;
              margin-left: 15px;
            }

            .power {
              margin-left: 15px;
              text-align: right;
              font-weight: bold;
              min-width: 30px;
            }

            .pencil {
              width: 20px;
            }

            .monster.long-name .monster-image {
              display: none;
            }

            .monster.long-name .name {
              font-size: .8em;
            }
          `}</style>
        </div>
      )}
    </div>
  );
};

export default Monster;

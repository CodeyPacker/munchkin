import _JSXStyle from "styled-jsx/style";

const ResultScreen = ({
  activeScreen,
  handleSetActiveScreen,
  selectedMonsters,
  playersTotal,
  monstersTotal,
  setMainPlayerTotal,
  setSelectedMonsters,
  setShowTeammate,
  setTeammateLevel,
  showTeammate,
}) => {
  const isWinner = playersTotal > monstersTotal ? true : false;

  const getTotals = (property) =>
    selectedMonsters.reduce((acc, monster) => acc + monster[`${property}`], 0);

  const resetBattleInfo = (e, screen) => {
    handleSetActiveScreen(e, screen);
    setSelectedMonsters([]);
    setMainPlayerTotal(0);
    if (showTeammate) {
      setTeammateLevel(0);
      setShowTeammate(false);
    }
  };

  return (
    <section className={activeScreen !== "result-screen" ? "hide" : "show"}>
      {isWinner ? (
        <div className="results-wrapper">
          <h2 className="result">You did it!</h2>
          <div className="reward-box">
            <h2 className="rewards-heading">Here are your rewards:</h2>
            <ul className="rewards">
              <li>
                <span className="bold">{getTotals("levels")}</span> {getTotals("levels") > 1 ? "Levels" : "Level"}
              </li>
              <li>
                <span className="bold">{getTotals("treasure")}</span> {getTotals("treasure") > 1 ? "Treasures" : "Treasure"}
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div>
          <h2 className="result">Oh, ya lost...</h2>
          <ul className="result-list">
            {selectedMonsters.map((monster) => {
              return (
                <li>
                  <h2 className="monster-name">{monster.name}</h2>
                  <span className="skull">&#9760;</span>
                  <p className="monster-text">
                    <span className="bad-stuff">Bad Stuff:</span> {monster.bad}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      <button onClick={(e) => resetBattleInfo(e, "character-screen")}>
        Back to Character
      </button>
      <style jsx>{`
        .monster-name {
          font-weight: bold;
          color: #ff2a2a;
          text-transform: capitalize;
          text-align: center;
          margin: 0;
        }

        .bad-stuff {
          font-weight: bold;
          font-style: italic;
        }

        .monster-text {
          text-align: left;
        }

        .skull {
          font-size: 2em;
          display: block;
          text-align: center;
        }

        .result {
          font-size: 2.5em;
          text-align: center;
          margin-bottom: 2rem;
        }

        .result-list {
          list-style-type: none;
          padding-left: 0;
        }

        .result-list li,
        .reward-box {
          -webkit-box-shadow: 0px 2px 10px 2px rgba(0, 0, 0, 0.2);
          box-shadow: 0px 2px 10px 2px rgba(0, 0, 0, 0.2);
          padding: 2rem;
          margin-bottom: 30px;
        }

        .rewards-heading {
          text-align: center;
          color: #2cad82;
        }

        .rewards {
          list-style-type: none;
          font-size: 1.4em;
          padding-left: 0;
        }

        .rewards li {
          margin-bottom: 15px;
        }

        button {
          margin: auto;
        }
      `}</style>
    </section>
  );
};

export default ResultScreen;

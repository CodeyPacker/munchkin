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
        <div>
          <h2>You so good :')</h2>
          <p>Here are your rewards:</p>
          <ul>
            <li>{getTotals("levels")} Levels</li>
            <li>{getTotals("treasure")} Treasures</li>
          </ul>
        </div>
      ) : (
        <div>
          <h2>Get wrecked lol xD</h2>
          <p>Bad Stuff:</p>
          <ul>
            {selectedMonsters.map((monster) => {
              return (
                <li>
                  <span className="monster-name">{monster.name}</span> -{" "}
                  {monster.bad}
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
        }
      `}</style>
    </section>
  );
};

export default ResultScreen;

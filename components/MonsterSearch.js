import _JSXStyle from "styled-jsx/style";
import monsterData from "../public/data/monsters.json";
import { useState } from "react";

const MonsterSearch = () => {
  const [matchedMonsters, setMatchedMonsters] = useState([]);

  const findMatches = (wordToMatch) => {
    return monsterData.filter((monster) => {
      const regex = new RegExp(wordToMatch, "gi");
      if (wordToMatch !== "") {
        return monster.name.match(regex);
      }
    });
  };

  const handleMatchedMonsters = (e) => {
    setMatchedMonsters(findMatches(e.target.value));
  };

  return (
    <div className="search-container">
      <input
        className="search-input"
        type="text"
        placeholder="Monster name"
        onChange={(e) => handleMatchedMonsters(e)}
      />
      {matchedMonsters.length > 0 && (
        <div className="matched-monsters">
          {matchedMonsters.map((foundMonster, index) => {
            if (index > 3) {
              return;
            }

            return (
              <button
                key={foundMonster.name}
                className="secondary matched-name"
              >
                {foundMonster.name}
              </button>
            );
          })}
        </div>
      )}
      <style jsx>{`
        .search-container {
          position: relative;
        }

        .search-input {
          padding: 10px 25px;
          width: 100%;
          font-size: 20px;
          margin-bottom: 20px;
          border-radius: 4px;
          border: 2px solid #808080;
          background-color: white;
          opacity: 0.5;
        }

        .matched-monsters {
          background-color: rgba(255, 255, 255, 0.6);
          box-shadow: -1px 5px 31px 2px rgba(0, 0, 0, 0.25);
          -webkit-box-shadow: -1px 5px 31px 2px rgba(0, 0, 0, 0.25);
          -moz-box-shadow: -1px 5px 31px 2px rgba(0, 0, 0, 0.25);
          padding: 20px;
          border-radius: 4px;
          position: absolute;
          left: 0;
          right: 0;
        }

        .matched-name {
          width: 100%;
          margin-bottom: 15px;
          text-transform: capitalize;
        }
      `}</style>
    </div>
  );
};

export default MonsterSearch;

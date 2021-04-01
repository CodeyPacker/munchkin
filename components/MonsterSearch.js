import monsterData from "../public/data/monsters.json";
import { useState } from "react";

const MonsterSearch = () => {
  const [matchedMonsters, setMatchedMonsters] = useState([]);

  const findMatches = (wordToMatch) => {
    return monsterData.filter((monster) => {
      const regex = new RegExp(wordToMatch, "gi");
      return monster.name.match(regex);
    });
  };

  const handleMatchedMonsters = (e) => {
    setMatchedMonsters(findMatches(e.target.value));
  };

  return (
    <div>
      <input
        className="search-input"
        type="text"
        placeholder="Monster name"
        onChange={(e) => handleMatchedMonsters(e)}
      />
      <div>
        {matchedMonsters &&
          matchedMonsters.map((foundMonster) => {
            return <h3>{foundMonster.name}</h3>;
          })}
      </div>
    </div>
  );
};

export default MonsterSearch;

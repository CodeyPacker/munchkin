import monsterData from "../public/data/monsters.json";

export const findMatches = (wordToMatch) => {
  return monsterData.filter((monster) => {
    const regex = new RegExp(wordToMatch, "gi");
    if (wordToMatch !== "") {
      return monster.name.match(regex);
    }
  });
};

export const resetField = (id) => {
  const field = document.querySelector(`#${id}`);
  field.value = "";
};

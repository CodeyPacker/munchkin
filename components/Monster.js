import _JSXStyle from "styled-jsx/style";

const Monster = ({ selectedMonsters }) => {
  return (
    <div>
      {selectedMonsters.map((monster, i) => {
        return (
          <div key={i}>
            <h2>{monster.name}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Monster;

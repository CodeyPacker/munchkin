import _JSXStyle from "styled-jsx/style";
import Image from "next/image";

const Monster = ({ selectedMonsters }) => {
  return (
    <div className="monster-grid">
      {selectedMonsters.map((monster, i) => {
        return (
          <div className="monster" key={i}>
            <p>{monster.power}</p>
            <Image src="/monster.svg" width={100} height={100} />
            <p>{monster.name}</p>
          </div>
        );
      })}

      <style jsx>{`
        .monster-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-auto-rows: minmax(100px, auto);
          margin-bottom: 50px;
        }
      `}</style>
    </div>
  );
};

export default Monster;

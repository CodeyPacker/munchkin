import { useState } from "react";
import _JSXStyle from "styled-jsx/style";

const EquipmentList = ({ handleAllEquipmentLevels, allEquipmentLevels }) => {
  const [powerLevel, setPowerLevel] = useState(0);
  const [activeEquipment, setActiveEquipment] = useState("");

  const handleEquipmentLevelChange = (type, amount) => {
    setPowerLevel((prevPower) => prevPower + amount);
    handleAllEquipmentLevels(type, amount);
  };

  const handleActiveEquipment = (type) => {
    setActiveEquipment(type);
  };

  console.log(allEquipmentLevels);

  return (
    <div className="equipment-list">
      <span
        role="button"
        tabIndex="0"
        className={`equipment ${activeEquipment === "helmet" && "active"}`}
        onClick={() => handleActiveEquipment("helmet")}
      >
        Helmet <span className="level">{allEquipmentLevels.helmet}</span>
      </span>
      <span
        role="button"
        tabIndex="0"
        className={`equipment ${activeEquipment === "armor" && "active"}`}
        onClick={() => handleActiveEquipment("armor")}
      >
        Armor <span className="level">{allEquipmentLevels.armor}</span>
      </span>
      <span
        role="button"
        tabIndex="0"
        className={`equipment ${activeEquipment === "footgear" && "active"}`}
        onClick={() => handleActiveEquipment("footgear")}
      >
        Footgear <span className="level">{allEquipmentLevels.footgear}</span>
      </span>
      <span
        role="button"
        tabIndex="0"
        className={`equipment ${activeEquipment === "weapons" && "active"}`}
        onClick={() => handleActiveEquipment("weapons")}
      >
        Weapons <span className="level">{allEquipmentLevels.weapons}</span>
      </span>
      <span
        role="button"
        tabIndex="0"
        className={`equipment ${activeEquipment === "misc" && "active"}`}
        onClick={() => handleActiveEquipment("misc")}
      >
        Misc <span className="level">{allEquipmentLevels.misc}</span>
      </span>

      <div className="buttons">
        <button onClick={() => handleEquipmentLevelChange(activeEquipment, +1)}>
          +1
        </button>
        <button onClick={() => handleEquipmentLevelChange(activeEquipment, -1)}>
          -1
        </button>
        <button onClick={() => handleEquipmentLevelChange(activeEquipment, +3)}>
          +3
        </button>
        <button onClick={() => handleEquipmentLevelChange(activeEquipment, -3)}>
          -3
        </button>
        <button onClick={() => handleEquipmentLevelChange(activeEquipment, +5)}>
          +5
        </button>
        <button onClick={() => handleEquipmentLevelChange(activeEquipment, -5)}>
          -5
        </button>
      </div>

      <style jsx>{`
        .equipment {
          font-size: 20px;
          display: inline-block;
          border: 2px solid #fff;
          border-radius: 4px;
          width: 50%;
          background-color: #8063fa;
          color: #fff;
          padding: 10px 25px;
        }

        .equipment.active {
          color: #8063fa;
          background-color: #fff;
          border: 2px solid #8063fa;
          font-weight: bold;
        }

        .level {
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default EquipmentList;

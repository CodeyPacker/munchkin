import { useState } from "react";
import _JSXStyle from "styled-jsx/style";

const EquipmentList = ({ handleAllEquipmentLevels, allEquipmentLevels }) => {
  const [powerLevel, setPowerLevel] = useState(0);
  const [activeEquipment, setActiveEquipment] = useState("helmet");

  const handleEquipmentLevelChange = (type, amount) => {
    setPowerLevel((prevPower) => prevPower + amount);
    handleAllEquipmentLevels(type, amount);
  };

  const handleActiveEquipment = (type) => {
    setActiveEquipment(type);
  };

  return (
    <div className="equipment-list">
      <div
        role="button"
        tabIndex="0"
        className={`equipment ${activeEquipment === "helmet" && "active"}`}
        onClick={() => handleActiveEquipment("helmet")}
      >
        Helmet
        <span className="level">{allEquipmentLevels.helmet}</span>
      </div>
      <span
        role="button"
        tabIndex="0"
        className={`equipment ${activeEquipment === "armor" && "active"}`}
        onClick={() => handleActiveEquipment("armor")}
      >
        Armor
        <span className="level">{allEquipmentLevels.armor}</span>
      </span>
      <div
        role="button"
        tabIndex="0"
        className={`equipment ${activeEquipment === "footgear" && "active"}`}
        onClick={() => handleActiveEquipment("footgear")}
      >
        Footgear
        <span className="level">{allEquipmentLevels.footgear}</span>
      </div>
      <div
        role="button"
        tabIndex="0"
        className={`equipment ${activeEquipment === "weapons" && "active"}`}
        onClick={() => handleActiveEquipment("weapons")}
      >
        Weapons
        <span className="level">{allEquipmentLevels.weapons}</span>
      </div>
      <div
        role="button"
        tabIndex="0"
        className={`equipment ${activeEquipment === "misc" && "active"}`}
        onClick={() => handleActiveEquipment("misc")}
      >
        Misc
        <span className="level">{allEquipmentLevels.misc}</span>
      </div>

      <div className="buttons three-column">
        <div className="column">
          <button
            onClick={() => handleEquipmentLevelChange(activeEquipment, +1)}
          >
            +1
          </button>
          <button
            className="tertiary"
            onClick={() => handleEquipmentLevelChange(activeEquipment, -1)}
          >
            -1
          </button>
        </div>
        <div className="column">
          <button
            onClick={() => handleEquipmentLevelChange(activeEquipment, +3)}
          >
            +3
          </button>
          <button
            className="tertiary"
            onClick={() => handleEquipmentLevelChange(activeEquipment, -3)}
          >
            -3
          </button>
        </div>
        <div className="column">
          <button
            onClick={() => handleEquipmentLevelChange(activeEquipment, +5)}
          >
            +5
          </button>
          <button
            className="tertiary"
            onClick={() => handleEquipmentLevelChange(activeEquipment, -5)}
          >
            -5
          </button>
        </div>
      </div>

      <style jsx>{`
        .buttons {
          display: flex;
          justify-content: space-between;
          margin-top: 30px;
        }

        .buttons button {
          display: block;
          width: 100%;
          margin-bottom: 20px;
        }

        .equipment-list {
          margin-top: 30px;
          margin-bottom: 30px;
        }

        .equipment {
          display: inline-block;
          justify-content: space-between;
          width: 50%;
          border-radius: 4px;
          border: 2px solid #fff;
          box-sizing: border-box;
          font-size: 17px;
          background-color: #8063fa;
          color: #fff;
          padding: 10px 20px;
        }

        .equipment.active {
          color: #000;
          background-color: #41d3a2;
          border: 2px solid #8063fa;
          font-weight: bold;
          outline: #8063fa;
        }

        .level {
          font-weight: bold;
          float: right;
        }
      `}</style>
    </div>
  );
};

export default EquipmentList;

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

      <div className="buttons">
        <div className="column column-1">
          <button
            onClick={() => handleEquipmentLevelChange(activeEquipment, +1)}
          >
            +1
          </button>
          <button
            onClick={() => handleEquipmentLevelChange(activeEquipment, -1)}
          >
            -1
          </button>
        </div>
        <div className="column column-2">
          <button
            onClick={() => handleEquipmentLevelChange(activeEquipment, +3)}
          >
            +3
          </button>
          <button
            onClick={() => handleEquipmentLevelChange(activeEquipment, -3)}
          >
            -3
          </button>
        </div>
        <div className="column column-3">
          <button
            onClick={() => handleEquipmentLevelChange(activeEquipment, +5)}
          >
            +5
          </button>
          <button
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

        .column {
          width: calc(33% - 5px);
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
          color: #8063fa;
          background-color: #fff;
          border: 2px solid #8063fa;
          font-weight: bold;
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

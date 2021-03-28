import { useState } from "react";

const Equipment = ({ type, handleAllEquipmentLevels }) => {
  const [showButtons, setShowButtons] = useState(false);
  const [powerLevel, setPowerLevel] = useState(0);

  const handleShowButtons = () => setShowButtons((prevShow) => !prevShow);

  const handleEquipmentLevelChange = (amount) => {
    setPowerLevel((prevPower) => prevPower + amount);
    handleAllEquipmentLevels(type, amount);
  };

  return (
    <div>
      <h3 onClick={() => handleShowButtons()}>
        {type} - {powerLevel}
      </h3>
      <div className={!showButtons ? "hide" : "show"}>
        <button onClick={() => handleEquipmentLevelChange(+1)}>+1</button>
        <button onClick={() => handleEquipmentLevelChange(-1)}>-1</button>
        <button onClick={() => handleEquipmentLevelChange(+3)}>+3</button>
        <button onClick={() => handleEquipmentLevelChange(-3)}>-3</button>
        <button onClick={() => handleEquipmentLevelChange(+5)}>+5</button>
        <button onClick={() => handleEquipmentLevelChange(-5)}>-5</button>
      </div>
    </div>
  );
};

export default Equipment;

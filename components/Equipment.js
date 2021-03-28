import { useState } from "react";

const Equipment = ({ allEquipmentLevels, type, setAllEquipmentLevels }) => {
  const [showButtons, setShowButtons] = useState(false);
  const [powerLevel, setPowerLevel] = useState(0);
  const handleShowButtons = () => setShowButtons((prevShow) => !prevShow);

  const handlePowerLevelChange = (amount) => {
    setPowerLevel((prevPower) => prevPower + amount);
    setAllEquipmentLevels((prevLevel) => ({
      ...prevLevel,
      [type]: powerLevel,
    }));
  };

  return (
    <div>
      <h3 onClick={() => handleShowButtons()}>
        {type} - {powerLevel}
      </h3>
      <div className={!showButtons ? "hide" : "show"}>
        <button onClick={() => handlePowerLevelChange(+1)}>+1</button>
        <button onClick={() => handlePowerLevelChange(-1)}>-1</button>
        <button onClick={() => handlePowerLevelChange(+3)}>+3</button>
        <button onClick={() => handlePowerLevelChange(-3)}>-3</button>
        <button onClick={() => handlePowerLevelChange(+5)}>+5</button>
        <button onClick={() => handlePowerLevelChange(-5)}>-5</button>
      </div>
    </div>
  );
};

export default Equipment;

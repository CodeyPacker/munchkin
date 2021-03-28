const Equipment = ({type}) => {
  return (
    <div>
      <span>{type}</span>
      <button onClick={() => handleLevelChange("setEquipment", +1)}>+1</button>
      <button onClick={() => handleLevelChange("setEquipmentLevel", -1)}>-1</button>
      <button onClick={() => handleLevelChange("setEquipmentLevel", +3)}>+3</button>
      <button onClick={() => handleLevelChange("setEquipmentLevel", -3)}>-3</button>
      <button onClick={() => handleLevelChange("setEquipmentLevel", +5)}>+5</button>
      <button onClick={() => handleLevelChange("setEquipmentLevel", -5)}>-5</button>
    </div>
  )
}

export default Equipment
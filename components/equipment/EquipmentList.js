import Equipment from "./Equipment";

const EquipmentList = ({ handleAllEquipmentLevels }) => {
  return (
    <div>
      <Equipment
        handleAllEquipmentLevels={handleAllEquipmentLevels}
        type="helmet"
      />
      <Equipment
        handleAllEquipmentLevels={handleAllEquipmentLevels}
        type="armor"
      />
      <Equipment
        handleAllEquipmentLevels={handleAllEquipmentLevels}
        type="footgear"
      />
      <Equipment
        handleAllEquipmentLevels={handleAllEquipmentLevels}
        type="weapons"
      />
      <Equipment
        handleAllEquipmentLevels={handleAllEquipmentLevels}
        type="misc"
      />
    </div>
  );
};

export default EquipmentList;

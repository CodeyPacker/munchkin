import Equipment from "./Equipment";

const EquipmentList = ({ handleAllEquipmentLevels }) => {
  return (
    <div>
      <Equipment
        handleAllEquipmentLevels={handleAllEquipmentLevels}
        type="Helmet"
      />
      <Equipment
        handleAllEquipmentLevels={handleAllEquipmentLevels}
        type="Armor"
      />
      <Equipment
        handleAllEquipmentLevels={handleAllEquipmentLevels}
        type="Footgear"
      />
      <Equipment
        handleAllEquipmentLevels={handleAllEquipmentLevels}
        type="Weapons"
      />
      <Equipment
        handleAllEquipmentLevels={handleAllEquipmentLevels}
        type="Misc"
      />
    </div>
  );
};

export default EquipmentList;

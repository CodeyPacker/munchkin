import Head from "next/head";
import styles from "../styles/Home.module.css";
import CharacterSetup from "../components/CharacterSetup";
import CharacterScreen from "../components/CharacterScreen";
import { useState } from "react";

export default function Home() {
  const [playerLevel, setPlayerLevel] = useState(1);
  // const [equipmentLevel, setEquipmentLevel] = useState(0);
  const [name, setName] = useState("Melvin");
  const [gender, setGender] = useState("Male");
  const [activeScreen, setActiveScreen] = useState("character-setup");

  const [allEquipmentLevels, setAllEquipmentLevels] = useState({ // this gets passed back into index.js - global state
    "helmet": 0,
    "armor": 0,
    "footgear": 0,
    "weapons": 0,
    "misc": 0,
  })

  const handleSetActiveScreen = (event, targetScreen) => {
    event.preventDefault();
    setActiveScreen((prevScreen) => (prevScreen = targetScreen))
  }

  const handleLevelChange = (amount) => 
    setPlayerLevel((prevLevel) => prevLevel + amount);

  const handleFormSubmit = e => e.preventDefault()
  const handleSetName = e => setName(e.target.value);
  const handleSetGender = e => setGender(e.target.value);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <CharacterSetup 
          activeScreen={activeScreen}
          handleSetGender={handleSetGender}
          handleSetName={handleSetName}
          handleFormSubmit={handleFormSubmit}
          handleSetActiveScreen={handleSetActiveScreen}
        />
        <CharacterScreen
          allEquipmentLevels={allEquipmentLevels}
          setAllEquipmentLevels={setAllEquipmentLevels}
          activeScreen={activeScreen}
          handleLevelChange={handleLevelChange}
          playerLevel={playerLevel}
          gender={gender}
          name={name}
        />
      </main>
    </div>
  );
}

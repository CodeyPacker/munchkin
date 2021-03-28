import Head from "next/head";
import styles from "../styles/Home.module.css";
import CharacterSetup from "../components/CharacterSetup";
import CharacterScreen from "../components/CharacterScreen";
import { useState } from "react";

export default function Home() {
  const [playerLevel, setPlayerLevel] = useState(1);
  const [equipmentLevel, setEquipmentLevel] = useState(0);
  const [name, setName] = useState("Melvin");
  const [gender, setGender] = useState("Male");
  const [activeScreen, setActiveScreen] = useState("character-setup");

  const handleSetActiveScreen = (event, targetScreen) => {
    event.preventDefault();
    setActiveScreen((prevScreen) => (prevScreen = targetScreen))
  }

  const handleLevelChange = (stateHook, amount) => {
    if (stateHook === "setPlayerLevel") {
      setPlayerLevel((prevLevel) => prevLevel + amount);
    }
    
    if (stateHook === "setEquipmentLevel") {
      setEquipmentLevel((prevLevel) => prevLevel + amount);
    }
  }

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
          equipmentLevel={equipmentLevel}
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

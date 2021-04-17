import Head from "next/head";
import styles from "../styles/Home.module.css";
import CharacterSetup from "../components/CharacterSetup";
import CharacterScreen from "../components/CharacterScreen";
import BattleScreen from "../components/BattleScreen";
import { useState } from "react";

export default function Home() {
  const [boardLevel, setBoardLevel] = useState(1);
  const [name, setName] = useState("Melvin");
  const [gender, setGender] = useState("Male");
  const [activeScreen, setActiveScreen] = useState("character-screen");
  const [playerTotal, setPlayerTotal] = useState(1);
  const [activeBattle, setActiveBattle] = useState(false);

  const [allEquipmentLevels, setAllEquipmentLevels] = useState({
    helmet: 0,
    armor: 0,
    footgear: 0,
    weapons: 0,
    misc: 0,
  });

  // Update the individual equipment totals + update the player total
  const handleAllEquipmentLevels = (type, amount) => {
    setAllEquipmentLevels((prevLevel) => ({
      ...prevLevel,
      [type]: prevLevel[type] + amount,
    }));

    setPlayerTotal((prevLevel) => prevLevel + amount);
  };

  const handlePlayerTotal = (amount) =>
    setPlayerTotal((prevLevel) => prevLevel + amount);

  // Used within components to toggle visibility
  const handleSetActiveScreen = (event, targetScreen) => {
    activeScreen === "character-screen" && event.preventDefault();
    setActiveScreen((prevScreen) => (prevScreen = targetScreen));
  };

  const handleLevelChange = (amount) =>
    setBoardLevel((prevLevel) => prevLevel + amount);

  const handleFormSubmit = (e) => e.preventDefault();
  const handleSetName = (e) => setName(e.target.value);
  const handleSetGender = (e) => setGender(e.target.value);

  return (
    <div className={styles.container}>
      <Head>
        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>Battle Tracker</title>

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#8063fa" />
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
          activeScreen={activeScreen}
          handleSetActiveScreen={handleSetActiveScreen}
          boardLevel={boardLevel}
          playerTotal={playerTotal}
          gender={gender}
          name={name}
          allEquipmentLevels={allEquipmentLevels}
          handleLevelChange={handleLevelChange}
          handlePlayerTotal={handlePlayerTotal}
          handleAllEquipmentLevels={handleAllEquipmentLevels}
          setActiveBattle={setActiveBattle}
          activeBattle={activeBattle}
        />
        <BattleScreen
          activeScreen={activeScreen}
          handleSetActiveScreen={handleSetActiveScreen}
          name={name}
          gender={gender}
          playerTotal={playerTotal}
          setActiveBattle={setActiveBattle}
          activeBattle={activeBattle}
        />
      </main>
    </div>
  );
}

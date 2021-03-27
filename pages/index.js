import Head from "next/head";
import styles from "../styles/Home.module.css";
import CharacterSetup from "../components/CharacterSetup";
import CharacterScreen from "../components/CharacterScreen";
import { useState } from "react";

export default function Home() {
  const [playerLevel, setPlayerLevel] = useState(1);
  const [name, setName] = useState("Melvin");
  const [gender, setGender] = useState("Male");

  function handlePlayerLevelChange(amount) {
    setPlayerLevel((prevLevel) => prevLevel + amount);
  }

  function handleFormSubmit(e) {
    e.preventDefault()
  }

  function handleSetName(e) {
    setName(e.target.value);
  }

  function handleSetGender(e) {
    setGender(e.target.value);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <CharacterSetup 
          handleSetGender={handleSetGender}
          handleSetName={handleSetName}
          handleFormSubmit={handleFormSubmit}
        />
        <CharacterScreen
          handlePlayerLevelChange={handlePlayerLevelChange}
          playerLevel={playerLevel}
          gender={gender}
          name={name}
        />
      </main>
    </div>
  );
}

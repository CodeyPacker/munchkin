import Head from "next/head";
import styles from "../styles/Home.module.css";
import CharacterScreen from "../components/CharacterScreen";
import { useState } from "react";

export default function Home() {
  const [playerLevel, setPlayerLevel] = useState(1);

  function handlePlayerLevelChange(amount) {
    setPlayerLevel((prevLevel) => prevLevel + amount);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <CharacterScreen
          playerLevel={playerLevel}
          handlePlayerLevelChange={handlePlayerLevelChange}
        />
      </main>
    </div>
  );
}

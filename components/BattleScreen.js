import _JSXStyle from "styled-jsx/style";
import Image from "next/image";

const BattleScreen = ({
  activeScreen,
  name,
  gender,
  playerTotal
}) => {
  return (
    <div className={activeScreen !== "battle-screen" ? "hide" : "show"}>
      <div>
        <h2 className="text-center">
          <span>Munchkin</span>
        </h2>
        <h3 className="player-total text-center">{playerTotal}</h3>
      <div className="player-icon text-center">
        <Image src="/player.svg" width={100} height={100} />
      </div>
      </div>
      <div>
        <h2 className="text-center">
          <span>Monster</span>
        </h2>
      </div>  
    </div>
  )
}

export default BattleScreen

// active battle state
// cody will figure it out later
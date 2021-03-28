import _JSXStyle from "styled-jsx/style";

const CharacterSetup = ({ handleSetName, handleSetGender, handleSetActiveScreen, activeScreen }) => {
  return (
    <div className={activeScreen !== "character-setup" ? "hide" : "show"}>
      <form onSubmit={(event) => handleSetActiveScreen(event, "character-screen")}>
        <label>
          Munchkin Name:
          <input type="text" onChange={(e) => handleSetName(e)} />
        </label>
        <label>
          Munchkin gender:
          <select onChange={(e) => handleSetGender(e)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default CharacterSetup;

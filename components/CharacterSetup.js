import _JSXStyle from "styled-jsx/style";

const CharacterSetup = ({ handleSetName, handleSetGender, handleFormSubmit }) => {
  return (
    <div>
      <form onSubmit={(e) => handleFormSubmit(e)}>
        <label>
          Munchkin Name:
          <input type="text" onChange={(e) => handleSetName(e)} />
        </label>
        <button>Submit</button>
        <label>
          Munchkin gender:
          <select onChange={(e) => handleSetGender(e)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
      </form>
    </div>
  );
};

export default CharacterSetup;

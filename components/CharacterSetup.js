import _JSXStyle from "styled-jsx/style";

const CharacterSetup = ({
  handleSetName,
  handleSetGender,
  handleSetActiveScreen,
  activeScreen,
}) => {
  return (
    <div className={activeScreen !== "character-setup" ? "hide" : "show"}>
      <form
        onSubmit={(event) => handleSetActiveScreen(event, "character-screen")}
      >
        <input
          className="name"
          placeholder="Name"
          type="text"
          onChange={(e) => handleSetName(e)}
        />
        <select className="gender" onChange={(e) => handleSetGender(e)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <button className="submit">Submit</button>
      </form>

      <style global jsx>{`
        .name {
          margin-right: 15px;
          padding: 10px 10px;
        }

        .gender {
          padding: 10px 10px;
        }

        .submit {
          margin: 15px auto 0;
          display: block;
          padding: 10px 25px;
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export default CharacterSetup;

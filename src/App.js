import "./App.css";
import { useState } from "react";
function App() {
  const [rangeData, setRangeData] = useState(8);
  const [isNumeric, setIsNumeric] = useState(false);
  const [isSpecial, setIsSpecial] = useState(false);

  function onChackedClickListenerSpecial() {
    setIsSpecial(!isSpecial);
  }

  const changeHandler = (event) => {
    setRangeData(parseInt(event.target.value));
  };

  function onChackedClickListener() {
    setIsNumeric(!isNumeric);
  }

  function PasswordGenerator(range, num, special) {
    let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = "1234567890";
    let specialCharacters = "!@#$%^&*(){}||<>?";

    var allCharacters = characters;
    if (num) {
      allCharacters = characters + numbers;
    }
    if (special) {
      allCharacters = characters + specialCharacters;
    }

    let password = "";
    for (let i = 0; i < range; i++) {
      let randomIndex = Math.floor(Math.random() * allCharacters.length);
      password += allCharacters.charAt(randomIndex);
    }
    return password;
  }
  return (
    <div className="App">
      <h1>password Generator</h1>
      <br />
      <h3> password : {PasswordGenerator(rangeData, isNumeric, isSpecial)} </h3>
      <br />
      <h3>select length for your password {rangeData} </h3>
      <input
        onChange={changeHandler}
        min={8}
        max={50}
        defaultValue={8}
        type="range"
      ></input>
      <h3>Numbers </h3>
      <p>Checked: {isNumeric ? "Checked" : "Unchecked"}</p>
      {console.log(isNumeric)}
      <input type="checkbox" onChange={onChackedClickListener}></input>
      <h3>Special Character</h3>
      <p>Checked: {isSpecial ? "Checked" : "Unchecked"}</p>
      {console.log(isSpecial)}
      <input type="checkbox" onChange={onChackedClickListenerSpecial}></input>
      <br></br>
    </div>
  );
}

export default App;

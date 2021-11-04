import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import { useState } from "react";

function App() {
  const [mode, setmode] = useState("light");

  const changeMode = () => {
    if (mode === "light") {
      document.body.style.backgroundColor = "#14457a";
      document.body.style.color = "white";
      document.getElementById("mode").innerText = "Light Mode";
      setmode("dark");
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      document.getElementById("mode").innerText = "Dark Mode";
      setmode("light");
    }
  };

  return (
    <>
      <Navbar mode={mode} changemode={changeMode} />
      <Textform></Textform>
    </>
  );
}

export default App;

import React from "react";
import { useState } from "react";

export default function Textform() {
  const [text, setText] = useState("");

  const changeText = (e) => {
    setText(e.target.value);
  };

  const convertToUppercase = () => {
    let upperCase = text.toUpperCase();
    setText(upperCase);
  };

  const convertToLowercase = () => {
    let lowerCase = text.toLowerCase();
    setText(lowerCase);
  };

  const convertToSentense = () => {
    let sentenseCase = text[0].toUpperCase() + text.substr(1).toLowerCase();
    setText(sentenseCase);
  };

  const convertToTitlecase = () => {
    let allWords = text.split(" ");
    let validWords = [];
    allWords.forEach((element) => {
      if (element.length > 0) {
        validWords.push(element);
      }
    });

    let titlCase = "";
    validWords.forEach((element) => {
      titlCase +=
        element[0].toUpperCase() + element.substr(1).toLowerCase() + " ";
    });

    setText(titlCase);
  };

  const copyText = () => {
    let text = document.getElementById("text");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const removeSpace = () => {
    let spaces = /[ ]+/;
    let validWords = text.split(spaces);
    setText(validWords.join(" "));
  };

  const clearText = () => {
    setText("");
  };

  let characters = text.length;

  let totalWords = text.split(" ");
  let words = totalWords.length;
  totalWords.forEach((element) => {
    if (element === "") {
      words--;
    }
  });

  return (
    <>
      <div className="container my-4">
        <div className="form-group my-3">
          <h2 className="my-3">Utilize Your Text Here</h2>
          <textarea
            className="form-control"
            value={text}
            onChange={changeText}
            id="text"
            rows="4"
          ></textarea>
        </div>
        <button className="btn btn-success mr-3" onClick={convertToUppercase}>
          Uppercase
        </button>
        <button className="btn btn-primary mr-3" onClick={convertToLowercase}>
          Lowercase
        </button>
        <button className="btn btn-success mr-3" onClick={convertToSentense}>
          Sentense
        </button>
        <button className="btn btn-primary mr-3" onClick={convertToTitlecase}>
          Titlecase
        </button>
        <button className="btn btn-success mr-3" onClick={copyText}>
          Copy
        </button>
        <button className="btn btn-primary mr-3" onClick={removeSpace}>
          Remove Spaces
        </button>
        <button className="btn btn-danger float-right" onClick={clearText}>
          Clear
        </button>
      </div>
      <div className="container">
        <span>{words}</span> Words <span>{characters}</span> Characters
      </div>
    </>
  );
}

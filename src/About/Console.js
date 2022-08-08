import React from "react";
import { useState, useRef, useEffect } from "react";

const Console = () => {
  const [inputText, setInput] = useState("");
  const [consoleOutput, setOutput] = useState("");
  let [prompt, setPrompt] = useState("C:\\WINDOWS\\system32>");
  const inputRef = useRef();
  const scrollRef = useRef();

  const currentDateTime = Date().toLocaleString();


  useEffect(() => {
    if (scrollRef.current)
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  });

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div
      id="terminal"
      onClick={(e) => {
        inputRef.current.focus();
      }}
    >
      <section className="Console" ref={scrollRef}>
        <p className="asciiName">
          ....███▒.....▄█▒...▄▄▄▄███▄▄▄▄...........▄████████▒.▄████████▒...▄█▒...█▄....███▄▄▄▄......▄████████▒.▄█▒.████████▄.....▄████████▒...▄████████▒<br></br>
          ███████████.███▒.▄██▀▀▀███▀▀▀██▄........███▒...███▒███▒...███▒..███▒...███▒..███▀▀▀██▄...███▒...███▒███▒.███▒..▀███...███▒...███▒..███▒...███▒<br></br>
          █▀..███▒▀██▒███▌.███▒..███▒..███▒.......███▒...█▀..███▒...█▀....███▒...███▒..███▒..███▒..███▒...█▀..███▌.███▒...███▒..███▒...█▀....███▒...███▒<br></br>
          ....███▒..▀.███▌.███▒..███▒..███▒.......███▒.......███▒........▄███▄▄▄▄███▄▄.███▒..███▒.▄███▄▄▄.....███▌.███▒...███▒.▄███▄▄▄......▄███▄▄▄▄██▀.<br></br>
          ....███▒....███▌.███▒..███▒..███▒.....▀███████████▒███▒.......▀▀███▀▀▀▀███▀..███▒..███▒▀▀███▀▀▀.....███▌.███▒...███▒▀▀███▀▀▀.....▀▀███▀▀▀▀▀...<br></br>
          ....███▒....███▒.███▒..███▒..███▒..............███▒███▒...█▄....███▒...███▒..███▒..███▒..███▒...█▄..███▒.███▒...███▒..███▒...█▄..▀███████████.<br></br>
          ....███▒....███▒.███▒..███▒..███▒........▄█▒...███▒███▒...███▒..███▒...███▒..███▒..███▒..███▒...███▒███▒.███▒..▄███▒..███▒...███...███▒...███▒<br></br>
          ...▄████▀...█▀....▀█▒..███▒..█▀........▄████████▀..████████▀....███▒...█▀.....▀█▒..█▀....██████████▒█▀...████████▀....██████████▒..███▒...███▒<br></br>
          ...................................................................................................................................███▒...███▒<br></br>
        </p>
        <div className="terminalOutput">
          <p>{consoleOutput}</p>
        </div>
        <div className="textInputWrapper">
          <span className="promptLine">{prompt}</span>
          <input
            type="text"
            className="inputText"
            id="inputText"
            ref={inputRef}
            value={inputText}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                let newOuput = "";
                if (consoleOutput !== "") {
                  newOuput = consoleOutput + "\n" + prompt + inputText + "\n ";
                } else {
                  newOuput = prompt + inputText + "\n ";
                }
                switch (inputText) {
                  case "help":
                    newOuput += "need help";
                    break;
                  case "date":
                    newOuput += currentDateTime;
                    break;
                  case "time":
                    newOuput += currentDateTime;
                    break;
                  case "tabsorspaces":
                    newOuput +=
                      "The compiler doesn't care, but I do. The answer is tabs.";
                    break;
                  case "cd":
                    newOuput += "cd (directory)";
                    break;
                  case "cd ..":
                    if (prompt === "C:\\WINDOWS\\system32>") {
                      prompt = "C:\\WINDOWS>";
                    } else if (prompt === "C:\\WINDOWS>") {
                      prompt = "C:\\>";
                    } else if (prompt === "C:\\Users>") {
                      prompt = "C:\\>";
                    } else if (prompt === "C:\\Users\\Tim>") {
                      prompt = "C:\\Users>";
                    }
                    break;
                  case "cd users":
                    if (prompt === "C:\\>") {
                      prompt = "C:\\Users>";
                    }
                    break;
                  case "cd tim":
                    if (prompt === "C:\\Users>") {
                      prompt = "C:\\Users\\Tim>";
                    }
                    break;
                  case "cd windows":
                    if (prompt === "C:\\>") {
                      prompt = "C:\\WINDOWS>";
                    }
                    break;
                  case "cd system32":
                    if (prompt === "C:\\WINDOWS>") {
                      prompt = "C:\\WINDOWS\\system32>";
                    }
                    break;
                  default:
                    newOuput += "Invalid Command";
                    break;
                }
                setPrompt(prompt);
                setOutput(newOuput);
                setInput("");
              }
            }}
          ></input>
        </div>
      </section>
    </div>
  );
};

export default Console;

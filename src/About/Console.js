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
          ...................................................................................................................................███▒...███▒<br></br><br></br>
          ........................,,uod8B8bou,,.<br></br>
          ................,uod8BBBBBBBBBBBBBBBBRPFT?l!i:.<br></br>
          .........,=m8BBBBBBBBBBBBBBBRPFT?!|||||||||||||| Welcome to my website! My name is Tim Schneider.<br></br>
          .........!...:!TVBBBRPFT||||||||||!!^^""'&nbsp;&nbsp;&nbsp;||||<br></br>
          .........!.......:!?|||||!!^^""'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|||| I'm a frontend/web developer from sunny San Diego, California<br></br>
          .........!.........||||&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||||<br></br>
          .........!.........||||&nbsp;&nbsp;##&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|||| I primarily use React.js, which is what was used to build this website<br></br>
          .........!.........||||&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||||<br></br>
          .........!.........||||&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|||| Want to know more or just a curious soul? Try some commands in the terminal below<br></br>
          .........!.........||||&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||||<br></br>
          .........!.........||||&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||||<br></br>
          .........`.........||||&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;,||||<br></br>
          ...........;.......||||&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_.-!!|||||<br></br>
          ....,uodWBBBBb.....||||&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_.-!!|||||||||!:'<br></br>
          !YBBBBBBBBBBBBBBb..!|||:..-!!|||||||!iof68BBBBBb....<br></br>
          !..YBBBBBBBBBBBBBBb!!||||||||!iof68BBBBBBRPFT?!::...`.<br></br>
          !....YBBBBBBBBBBBBBBbaaitf68BBBBBBRPFT?!:::::::::.....`.<br></br>
          !......YBBBBBBBBBBBBBBBBBBBRPFT?!::::::;:!^"`;:::.......`.<br></br>
          !........YBBBBBBBBBBRPFT?!::::::::::^''...::::::;.........iBBbo.<br></br>
          `..........YBRPFT?!::::::::::::::::::::::::;iof68bo.......WBBBBbo.<br></br>
          ..`..........:::::::::::::::::::::::;iof688888888888b......`YBBBP^'<br></br>
          ....`........::::::::::::::::;iof688888888888888888888b......`<br></br>
          ......`......:::::::::;iof688888888888888888888888888888b.<br></br>
          ........`....:::;iof688888888888888888888888888888888899fT!<br></br>
          ..........`..::!8888888888888888888888888888888899fT|!^"'<br></br>
          ............`'.!!988888888888888888888888899fT|!^"'<br></br>
          ................`!!8888888888888888899fT|!^"'<br></br>
          ..................`!988888888899fT|!^"'<br></br>
          ....................`!9899fT|!^"'<br></br>
          ......................`!^"'<br></br>
          <br></br>
          Type 'help' for a list of possible commands, or try some you already know.<br></br>
          <br></br>
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
            autocomplete="off"
            spellcheck="false"
            ref={inputRef}
            value={inputText}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                let newOuput = "";
                if (consoleOutput !== "") {
                  newOuput = consoleOutput + "\n" + prompt + inputText + "\n";
                } else {
                  newOuput = prompt + inputText + "\n";
                }
                switch (inputText.toLowerCase()) {
                  case "help":
                    newOuput += `about          Who is Tim Schneider?
help           List commands
projects       More of my projects
socials        My social media accounts
clear          Clear the terminal feed 
date / time    Display the current time
tabsorspaces   The age old debate
vimoremacs     The less age old debate\n `; 
                    break;
                  case "about":
                    newOuput += "need help\n ";
                    break;
                  case "projects":
                    newOuput += "need help\n ";
                    break;
                  case "socials":
                    newOuput += "need help\n ";
                    break;
                  case "dir":
                    newOuput += "\n   Directory of " + prompt + "\n \n 04/20/2022  04:20 PM    <DIR>        Sorry nothing to see here \n ";
                    break;
                  case "log":
                    newOuput += "\n   Directory of " + prompt + "\n \n 04/20/2022  04:20 PM    <DIR>        Sorry nothing to see here \n ";
                    break;
                  case "ls":
                    newOuput += "\n Does this look like Linux to you silly?\n ";
                    break;
                  case "type":
                    newOuput += "\n Uhhh, good?\n ";
                    break;
                  case "font":
                    newOuput += "IBM VGA 8x16 Plus\n ";
                    break;
                  case "cat":
                    newOuput += `
                                                    .--.
                                                    J   L
                                                    |   |
                                                    F   F
                                                   J   J
                                                  /   /
                                                 /   /
                                               .'   /
                       .--""--._              /    /
                   _.-'         ‘-.          /    /
        __       .'                ‘.       /    /
     _-'-."‘-.  J                    \\     /    /
.---(  ‘, _   ‘'|                     ‘.  J    /
  ‘. )                                  ""    /
   F                                          J
   L                  |                      J
   ‘ (/     /         |                      F
    |    ._'          |                      |
   /'‘--'‘.           |                      J
   '||\\   |-._        ‘.  ___.               |
     ‘     \\  ‘.        |/    ‘-            J
            F   L       /       J           /
            |   J      J         F         J
            |    \\     J         |        J
            |    |L    J         J        J
            |    FJ    |          L       |
            |   J  L   |          L\\      F
            |   F  |   |           L\\    J
            F  F   |   |           | L   |
           J  J    |   |           | |   F
           /  )    F  J            F F  J
          ( .'    )   F           J J  F
          ‘"     (   J           /.'  J
                  ‘-'           ||-' |)
                                  '-'
                    \n Meow\n `;
                    break;
                  case "clear":
                    newOuput = "";
                    break;
                  case "erase":
                    newOuput = "";
                    break;
                  case "delete":
                    newOuput = "\n Careful with that one, don't want to go breaking anything\n ";
                    break;
                  case "rm":
                    newOuput = "\n Careful with that one, don't want to go breaking anything\n ";
                    break;
                  case "date":
                    newOuput += currentDateTime+"\n ";
                    break;
                  case "time":
                    newOuput += currentDateTime+"\n ";
                    break;
                  case "tabsorspaces":
                    newOuput +=
                      "The compiler doesn't care, but I do. My answer is tabs.\n ";
                    break;
                  case "vimoremacs":
                    newOuput +=
                      "What do I look like a neanderthal? Vim obviously.\n ";
                    break;
                  case "cd":
                    newOuput += "cd (directory)\n ";
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
                    newOuput += "Invalid Command\n ";
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

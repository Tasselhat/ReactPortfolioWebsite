import React from "react";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const TARGET_TEXT =
    "....███▒.....▄█▒...▄▄▄▄███▄▄▄▄...........▄████████▒.▄████████▒...▄█▒...█▄....███▄▄▄▄......▄████████▒.▄█▒.████████▄.....▄████████▒...▄████████▒███████████.███▒.▄██▀▀▀███▀▀▀██▄........███▒...███▒███▒...███▒..███▒...███▒..███▀▀▀██▄...███▒...███▒███▒.███▒..▀███...███▒...███▒..███▒...███▒█▀..███▒▀██▒███▌.███▒..███▒..███▒.......███▒...█▀..███▒...█▀....███▒...███▒..███▒..███▒..███▒...█▀..███▌.███▒...███▒..███▒...█▀....███▒...███▒....███▒..▀.███▌.███▒..███▒..███▒.......███▒.......███▒........▄███▄▄▄▄███▄▄.███▒..███▒.▄███▄▄▄.....███▌.███▒...███▒.▄███▄▄▄......▄███▄▄▄▄██▀.....███▒....███▌.███▒..███▒..███▒.....▀███████████▒███▒.......▀▀███▀▀▀▀███▀..███▒..███▒▀▀███▀▀▀.....███▌.███▒...███▒▀▀███▀▀▀.....▀▀███▀▀▀▀▀.......███▒....███▒.███▒..███▒..███▒..............███▒███▒...█▄....███▒...███▒..███▒..███▒..███▒...█▄..███▒.███▒...███▒..███▒...█▄..▀███████████.....███▒....███▒.███▒..███▒..███▒........▄█▒...███▒███▒...███▒..███▒...███▒..███▒..███▒..███▒...███▒███▒.███▒..▄███▒..███▒...███...███▒...███▒...▄████▀...█▀....▀█▒..███▒..█▀........▄████████▀..████████▀....███▒...█▀.....▀█▒..█▀....██████████▒█▀...████████▀....██████████▒..███▒...███▒...................................................................................................................................███▒...███▒";
const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 60;

const CHARS =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmopqrstuvwxyz0123456789çµñ©æáßðøöóíúüþéåäö¶×&^%$#@>:+)*=];";

const Console = () => {
    const intervalRef = useRef(null);
    const [text, setText] = useState(
        Array.from(
            { length: TARGET_TEXT.length },
            () => CHARS[Math.floor(Math.random() * CHARS.length)]
        )
            .join("")
            .replace(/(.{142})/g, "$1\n")
    );

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

    const handleInputChange = (event) => {
        setInput(event.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            // Process the user's input as a command
            processCommand(inputText);

            // Clear the input field
            setInput("");
        }
    };

    const shuffle = (array) => {
        return array.sort(() => Math.random() - 0.5);
    };

    const arrayLengthTargetText = Array.from(Array(TARGET_TEXT.length).keys());

    const scramble = (TARGET_TEXT, setText) => {
        let pos = 0;
        let randomizedArray = shuffle(arrayLengthTargetText);

        intervalRef.current = setInterval(() => {
            const scrambled = TARGET_TEXT.split("")
                .map((c, i) => {
                    if (!randomizedArray.includes(i)) return c;
                    const randomChar =
                        CHARS[Math.floor(Math.random() * CHARS.length)];
                    return randomChar;
                })
                .join("");
            if (pos < 40) {
                randomizedArray.splice(0, 20);
            } else if (pos < 150) {
                randomizedArray.splice(0, 9);
            } else {
                randomizedArray.splice(0, 3);
            }
            const stringWithNewlines = scrambled.replace(/(.{142})/g, "$1\n");
            setText(stringWithNewlines);
            pos++;

            if (
                pos >= TARGET_TEXT.length ||
                arrayLengthTargetText.length === 0
            ) {
                stopScramble1();
            }
        }, SHUFFLE_TIME);
    };

    const stopScramble1 = () => {
        clearInterval(intervalRef.current || undefined);
        const stringWithNewlines = TARGET_TEXT.replace(/(.{142})/g, "$1\n");
        setText(stringWithNewlines);
    };

    const stopScramble = (TARGET_TEXT, setTextFunc) => {
        clearInterval(intervalRef.current || undefined);
        setTextFunc(TARGET_TEXT);
    };

    useEffect(() => {
        scramble(TARGET_TEXT, setText);
    }, []);

    const processCommand = (inputText) => {
        let newOutput = "";
        if (consoleOutput !== "") {
            newOutput = consoleOutput + "\n" + prompt + inputText + "\n";
        } else {
            newOutput = prompt + inputText + "\n";
        }
        switch (inputText.toLowerCase()) {
            case "help":
                newOutput += `	  about          Who is Tim Schneider?
          help           List commands
          clear          Clear the terminal feed 
          date / time    Display the current time
          font           Display font name
          dir            List directory
          cat            conCATenate
          tabsorspaces   The age old debate
          vimoremacs     The less age old debate\n `;
                break;
            case "about":
                newOutput += `\nName: Tim Schneider
            
            Location: San Diego/Poway, CA
            
            Education: University of California, San Diego
            
            Programming Languages & Tools: 
			Javascript | Next.js | React.js | HTML 5 | Responsive CSS | Tailwind CSS 
			Node.js | Express.js | MongoDB + Atlas | Java (Elementary) | Python (Familiar) | Heroku 
			Git | Git Bash | npm (Node Package Manager) | CLI | Frontend | Full-Stack

            
            My name is Tim, I'm a developer, design enthusiast, gymnastics coach, and eternal student. 
            I enjoy designing user experiences and interactive web applications. 
            I've always had an interest in science and computers, 
            even back when I was 10 playing computer games on our dial up internet I would use inspect element on webpages to change the values of HTML elements 
            to trick my friends into thinking I was better at online games than I actually was.
            
            Now I use programming tools to make web apps to solve problems and create interactive experiences!
            
            If you want to see my resume, contact me, or see more of my work, click one of the buttons in the bottom right corner to be redirected.
            
            
            \n `;
                break;
            case "dir":
                newOutput +=
                    "\n   Directory of " +
                    prompt +
                    "\n \n 08/04/2004  04:19 PM    <DIR>        Sorry nothing to see here \n ";
                break;
            case "log":
                newOutput +=
                    "\n   Directory of " +
                    prompt +
                    "\n \n 06/05/2022  04:19 PM    <DIR>        Sorry nothing to see here \n ";
                break;
            case "ls":
                newOutput += "\n Does this look like Linux to you silly?\n ";
                break;
            case "type":
                newOutput += "\n Uhhhhhhhhhhhhh\n ";
                break;
            case "font":
                newOutput += "IBM VGA 8x16 Plus\n ";
                break;
            case "cat":
                newOutput += `                      
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
                newOutput = "";
                break;
            case "erase":
                newOutput = "";
                break;
            case "delete":
                newOutput =
                    "\n Careful with that one, don't want to go breaking anything\n ";
                break;
            case "rm":
                newOutput =
                    "\n Careful with that one, don't want to go breaking anything\n ";
                break;
            case "rm dir":
                newOutput += "\n No, let's not do that, thanks.\n ";
                break;
            case "date":
                newOutput += currentDateTime + "\n ";
                break;
            case "time":
                newOutput += currentDateTime + "\n ";
                break;
            case "tabsorspaces":
                newOutput +=
                    "\nThe compiler doesn't care, but I do. My answer is tabs.\n ";
                break;
            case "vimoremacs":
                newOutput +=
                    "\nWhat do I look like a neanderthal? Vim, obviously. (I use VSCode)\n ";
                break;
            case "cd":
                newOutput += "cd (directory)\n ";
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
                newOutput += "Invalid Command\n ";
                break;
        }
        setPrompt(prompt);
        setOutput(newOutput);
        setInput("");
    };

    return (
        <div
            id="terminal"
            onClick={(e) => {
                inputRef.current.focus();
            }}
        >
            <section className="Console" ref={scrollRef}>
                <motion.div>{text}</motion.div>
                <p className="asciiName" id="asciiName">
                    <br /> <br /> ........................,,uod8B8bou,,. <br />
                    ................,uod8BBBBBBBBBBBBBBBBRPFT?l!i:. <br />
                    .........,=m8BBBBBBBBBBBBBBBRPFT?!|||||||||||||| Welcome to
                    my website! My name is Tim Schneider. <br />
                    .........!...:!TVBBBRPFT||||||||||!!^^""'&nbsp;&nbsp;&nbsp;||||
                    <br />
                    .........!.......:!?|||||!!^^""'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||||
                    I'm a software engineer from sunny San Diego, California{" "}
                    <br />
                    .........!.........||||&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||||
                    <br />
                    .........!.........||||&nbsp;&nbsp;##&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||||
                    I primarily use React.js, which is what was used to build
                    this website <br />
                    .........!.........||||&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||||
                    <br />
                    .........!.........||||&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||||
                    Want to know more or just a curious soul? <br />
                    .........!.........||||&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||||
                    <br />
                    .........!.........||||&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||||
                    Try some commands in the terminal below <br />
                    .........`.........||||&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;,||||
                    <br />
                    ...........;.......||||&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_.-!!|||||
                    <br />
                    ....,uodWBBBBb.....||||&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_.-!!|||||||||!:'
                    <br /> !YBBBBBBBBBBBBBBb..!|||:..-!!|||||||!iof68BBBBBb....{" "}
                    <br />
                    !..YBBBBBBBBBBBBBBb!!||||||||!iof68BBBBBBRPFT?!::...`.{" "}
                    <br />
                    !....YBBBBBBBBBBBBBBbaaitf68BBBBBBRPFT?!:::::::::.....`.{" "}
                    <br />
                    !......YBBBBBBBBBBBBBBBBBBBRPFT?!::::::;:!^"`;:::.......`.
                    <br />
                    !........YBBBBBBBBBBRPFT?!::::::::::^''...::::::;.........iBBbo.
                    <br />
                    `..........YBRPFT?!::::::::::::::::::::::::;iof68bo.......WBBBBbo.
                    <br />
                    ..`..........:::::::::::::::::::::::;iof688888888888b......`YBBBP^'
                    <br />
                    ....`........::::::::::::::::;iof688888888888888888888b......`
                    <br />
                    ......`......:::::::::;iof688888888888888888888888888888b.
                    <br />
                    ........`....:::;iof688888888888888888888888888888888899fT!
                    <br />{" "}
                    ..........`..::!8888888888888888888888888888888899fT|!^"'
                    <br /> ............`'.!!988888888888888888888888899fT|!^"'{" "}
                    <br />
                    ................`!!8888888888888888899fT|!^"' <br />
                    ..................`!988888888899fT|!^"' <br />
                    ....................`!9899fT|!^"' <br />
                    ......................`!^"' <br /> <br /> Type 'help' for a
                    list of possible commands, or try some you already know.{" "}
                    <br /> <br />
                </p>
                <div id="terminalOutput" className="terminalOutput">
                    {consoleOutput}
                </div>
                <div className="textInputWrapper">
                    <span className="promptLine">{prompt}</span>
                    <input
                        type="text"
                        className="inputText"
                        id="inputText"
                        autoComplete="off"
                        spellCheck="false"
                        ref={inputRef}
                        value={inputText}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                    ></input>
                </div>
            </section>
        </div>
    );
};

export default Console;

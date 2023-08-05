import React from "react";
import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

const TARGET_TEXT = `....███▒.....▄█▒...▄▄▄▄███▄▄▄▄...........▄████████▒.▄████████▒...▄█▒...█▄....███▄▄▄▄......▄████████▒.▄█▒.████████▄.....▄████████▒...▄████████▒¶███████████.███▒.▄██▀▀▀███▀▀▀██▄........███▒...███▒███▒...███▒..███▒...███▒..███▀▀▀██▄...███▒...███▒███▒.███▒..▀███...███▒...███▒..███▒...███▒¶█▀..███▒▀██▒███▌.███▒..███▒..███▒.......███▒...█▀..███▒...█▀....███▒...███▒..███▒..███▒..███▒...█▀..███▌.███▒...███▒..███▒...█▀....███▒...███▒¶....███▒..▀.███▌.███▒..███▒..███▒.......███▒.......███▒........▄███▄▄▄▄███▄▄.███▒..███▒.▄███▄▄▄.....███▌.███▒...███▒.▄███▄▄▄......▄███▄▄▄▄██▀.¶....███▒....███▌.███▒..███▒..███▒.....▀███████████▒███▒.......▀▀███▀▀▀▀███▀..███▒..███▒▀▀███▀▀▀.....███▌.███▒...███▒▀▀███▀▀▀.....▀▀███▀▀▀▀▀...¶....███▒....███▒.███▒..███▒..███▒..............███▒███▒...█▄....███▒...███▒..███▒..███▒..███▒...█▄..███▒.███▒...███▒..███▒...█▄..▀███████████.¶....███▒....███▒.███▒..███▒..███▒........▄█▒...███▒███▒...███▒..███▒...███▒..███▒..███▒..███▒...███▒███▒.███▒..▄███▒..███▒...███...███▒...███▒¶...▄████▀...█▀....▀█▒..███▒..█▀........▄████████▀..████████▀....███▒...█▀.....▀█▒..█▀....██████████▒█▀...████████▀....██████████▒..███▒...███▒¶...................................................................................................................................███▒...███▒¶`;
const TARGET_TEXT_COMPUTER = `¶¶........................,,uod8B8bou,,.¶................,uod8BBBBBBBBBBBBBBBBRPFT?l!i:.¶.........,=m8BBBBBBBBBBBBBBBRPFT?!|||||||||||||| Welcome to my website, My name is Tim Schneider.¶.........!...:!TVBBBRPFT||||||||||!!^^""'   ||||¶.........!.......:!?|||||!!^^""'            |||| I'm a software engineer from sunny San Diego, California¶.........!.........||||                     ||||¶.........!.........||||  ##                 |||| I primarily use JS/TS, Next.js, Node.js, and React.js, which is what was used to build this website¶.........!.........||||                     ||||¶.........!.........||||                     |||| Want to know more or just a curious soul?¶.........!.........||||                     ||||¶.........!.........||||                     |||| Try some commands in the terminal below¶.........\`.........||||                    ,||||¶...........;.......||||              _.-!!|||||¶....,uodWBBBBb.....||||       _.-!!|||||||||!:'¶!YBBBBBBBBBBBBBBb..!|||:..-!!|||||||!iof68BBBBBb....¶!..YBBBBBBBBBBBBBBb!!||||||||!iof68BBBBBBRPFT?!::...\`.¶!....YBBBBBBBBBBBBBBbaaitf68BBBBBBRPFT?!:::::::::.....\`.¶!......YBBBBBBBBBBBBBBBBBBBRPFT?!::::::;:!^"\`;:::.......\`.¶!........YBBBBBBBBBBRPFT?!::::::::::^''...::::::;........iBBbo.¶\`..........YBRPFT?!::::::::::::::::::::::::;iof68bo.......WBBBBbo.¶..\`..........:::::::::::::::::::::::;iof688888888888b......\`YBBBP^'¶....\`........::::::::::::::::;iof688888888888888888888b......\`¶......\`......:::::::::;iof688888888888888888888888888888b.¶........\`....:::;iof688888888888888888888888888888888899fT!¶..........\`..::!8888888888888888888888888888888899fT|!^"'¶............\`'.!!988888888888888888888888899fT|!^"'¶................\`!!8888888888888888899fT|!^"'¶..................\`!988888888899fT|!^"'¶....................\`!9899fT|!^"'¶......................\`!^"'¶¶Type 'help' for a list of possible commands, or try some you already know.¶¶`;
const SHUFFLE_TIME = 70;

const CHARS = "01";

const Console = () => {
    const intervalRef = useRef(null);
    const [text, setText] = useState(
        Array.from(
            { length: TARGET_TEXT.length },
            () => CHARS[Math.floor(Math.random() * CHARS.length)]
        )
            .join("")
            .replace(/(.{142})./g, "$1\n")
    );
    const [computerText, setComputerText] = useState(
        Array.from(
            TARGET_TEXT_COMPUTER.replace(/[^ ¶]/g, (match) =>
                match === "¶"
                    ? "\n"
                    : CHARS[Math.floor(Math.random() * CHARS.length)]
            )
        ).join("")
    );

    const [inputText, setInput] = useState("");
    const [consoleOutput, setOutput] = useState("");
    let [prompt, setPrompt] = useState("C:\\WINDOWS\\System32>");
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
            // Process the user\`s input as a command
            processCommand(inputText);

            // Clear the input field
            setInput("");
        }
    };

    const shuffle = (array) => {
        return array.sort(() => Math.random() - 0.5);
    };

    const scramble = (TARGET_TEXT, setTextFunc, revealNo) => {
        const arrayLengthTargetText = Array.from(
            Array(TARGET_TEXT.length).keys()
        );
        let pos = 0;
        let randomizedArray = shuffle(arrayLengthTargetText);
        let noOfLettersToReveal = revealNo;

        intervalRef.current = setInterval(() => {
            const scrambled = TARGET_TEXT.split("")
                .map((c, i) => {
                    if (c === "¶") return "\n";
                    if (!randomizedArray.includes(i)) return c;

                    const randomChar =
                        CHARS[Math.floor(Math.random() * CHARS.length)];
                    return randomChar;
                })
                .join("");

            randomizedArray.splice(0, noOfLettersToReveal);
            noOfLettersToReveal = Math.max(noOfLettersToReveal * 0.92, 6);
            setTextFunc(scrambled);
            pos++;

            if (pos >= TARGET_TEXT.length) {
                stopScramble(TARGET_TEXT, setTextFunc);
            }
        }, SHUFFLE_TIME);
    };

    const stopScramble = (TARGET_TEXT_SCOPED, setTextFunc) => {
        clearInterval(intervalRef.current || undefined);
        setTextFunc(TARGET_TEXT_SCOPED.replace(/¶/g, "\n"));
    };

    useEffect(() => {
        scramble(TARGET_TEXT, setText, 100);
        scramble(TARGET_TEXT_COMPUTER, setComputerText, 140);
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
                newOutput += `	    about          Who is Tim Schneider?
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
			JavaScript | TypeScript | Next.js | React.js | HTML 5 | Responsive CSS | Tailwind CSS 
			Node.js | Express.js | MongoDB + Atlas | MySQL | Java | Python | Heroku | Azure | Netlify | Vercel
			Git | Bash | npm (Node Package Manager) | CLI | Frontend | Full-Stack

            
            My name is Tim, I'm a developer, design enthusiast, gymnastics coach, and eternal student. 
            I enjoy building immersive and interactive web applications. 
            I've always had an interest in science and computers, 
            even back when I was 10 playing computer games on our dial up internet I would use inspect element on webpages to change the values of HTML elements 
            to trick my friends into thinking I was better at online games than I actually was.
            
            Now I use programming tools to make my ideas into reality.
            
            If you want to see my resume, contact me, or see more of my work, click one of the buttons in the bottom right corner to be redirected.            
            \n `;
                break;
            case "dir":
                newOutput +=
                    "\n   Directory of " +
                    prompt +
                    `\n \n
08/04/2004  16:20    <DIR>        Code I copied from stack overflow \n
12/20/2005  01:19    <DIR>        Program Files \n
05/16/2006  19:19    <DIR>        Users \n\n`;
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
                newOutput += "\n Uhhhhhhhhhhhhh, yes?\n ";
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
                if (prompt === "C:\\WINDOWS\\System32>") {
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
            case "cd System32":
                if (prompt === "C:\\WINDOWS>") {
                    prompt = "C:\\WINDOWS\\System32>";
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
                <motion.div style={{ whiteSpace: "pre", overflow: "visible" }}>
                    {computerText}
                </motion.div>
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

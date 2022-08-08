import React from "react";

const MapConsoleOutput = ({ consoleOutput }) => {
  const scrollRef = React.useRef();

  React.useEffect(() => {
    if (scrollRef.current)
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  });

  return (
    <div className="terminalOutput" ref={scrollRef}>
      <div>{consoleOutput}</div>
    </div>
  );
};

export default MapConsoleOutput;

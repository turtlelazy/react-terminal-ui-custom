import React from "react";

const TerminalOutput = ({children} : {children?: React.ReactChild}) => {
  return (
    <div className="react-terminal-line flex-1">{ children }</div>
  );
} 

export default TerminalOutput;
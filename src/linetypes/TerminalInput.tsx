import React, { PropsWithChildren } from "react";

type TerminalInputProps = PropsWithChildren<{
    sshDir?: string;
    fileDir?: string;
    twindClass?: string;
    active?: boolean;
}>;

const TerminalInput = ({ children, sshDir, fileDir, twindClass = "text-green-400", active = false }: TerminalInputProps) => {
    return (
        <div
            className={"react-terminal-line"}
        >
            <span className="react-terminal-input-prompt">
                <span className={twindClass}>{sshDir}</span>:<span className={twindClass}>{fileDir}</span>$
            </span>
            <span className={active ? " react-terminal-active-input" : ""}>{children}</span>
            
        </div>
    );
};

export default TerminalInput;

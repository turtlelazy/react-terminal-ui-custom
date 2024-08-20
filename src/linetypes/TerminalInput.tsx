import React, { PropsWithChildren } from "react";

type TerminalInputProps = PropsWithChildren<{
    sshDir?: string;
    fileDir?: string;
    twindClass?: string;
    activeCursor?: boolean;
}>;

const TerminalInput = ({ children, sshDir, fileDir, twindClass = "text-green-400", activeCursor = false }: TerminalInputProps) => {
    return (
        <div
            className={"react-terminal-line flex-1"}
        >
            <span className="react-terminal-input-prompt">
                <span className={twindClass}>{sshDir}</span>:<span className={twindClass}>{fileDir}</span>$
            </span>
            <span className={activeCursor ? "react-terminal-active-input" : ""}>{children}</span>
        </div>
    );
};

export default TerminalInput;

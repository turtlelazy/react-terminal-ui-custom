import React, { PropsWithChildren } from "react";

type TerminalInputProps = PropsWithChildren<{
    sshDir?: string;
    fileDir?: string;
    twindClass?: string;
}>;

const TerminalInput = ({ children, sshDir, fileDir, twindClass = "text-green-400" }: TerminalInputProps) => {
    return (
        <div
            className="react-terminal-line"
        >
            <span className="react-terminal-input-prompt">
                <span className={twindClass}>{sshDir}</span>:<span className={twindClass}>{fileDir}</span>$
            </span>
            {children}
        </div>
    );
};

export default TerminalInput;

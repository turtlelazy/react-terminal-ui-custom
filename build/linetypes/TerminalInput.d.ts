import React, { PropsWithChildren } from "react";
declare type TerminalInputProps = PropsWithChildren<{
    sshDir?: string;
    fileDir?: string;
    twindClass?: string;
    activeCursor?: boolean;
}>;
declare const TerminalInput: ({ children, sshDir, fileDir, twindClass, activeCursor }: TerminalInputProps) => React.JSX.Element;
export default TerminalInput;

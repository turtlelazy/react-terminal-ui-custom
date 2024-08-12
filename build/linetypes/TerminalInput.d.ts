import React, { PropsWithChildren } from "react";
declare type TerminalInputProps = PropsWithChildren<{
    sshDir?: string;
    fileDir?: string;
    twindClass?: string;
}>;
declare const TerminalInput: ({ children, sshDir, fileDir, twindClass }: TerminalInputProps) => React.JSX.Element;
export default TerminalInput;

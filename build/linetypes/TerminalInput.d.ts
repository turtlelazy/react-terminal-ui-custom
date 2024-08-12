import React, { PropsWithChildren } from "react";
declare type TerminalInputProps = PropsWithChildren<{
    sshDir?: string;
    fileDir?: string;
    twindClass?: string;
    active?: boolean;
}>;
declare const TerminalInput: ({ children, sshDir, fileDir, twindClass, active }: TerminalInputProps) => React.JSX.Element;
export default TerminalInput;

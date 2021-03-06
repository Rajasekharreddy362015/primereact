import React = require("react");

interface InputMaskProps {
    id?: string;
    value?: string;
    type?: string;
    mask?: string;
    slotChar?: string;
    autoClear?: boolean;
    unmask?: boolean;
    style?: object;
    className?: string;
    placeholder?: string;
    size?: number;
    maxlength?: number;
    tabindex?: number;
    disabled?: boolean;
    readonly?: boolean;
    name?: string;
    required?: boolean;
    onComplete?(e: Event): void;
    onChange?(e: {originalEvent: Event, value: any}): void;
}

export class InputMask extends React.Component<InputMaskProps,any> {}
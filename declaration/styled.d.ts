import { StyledElement } from "./StyledElement";
export default function styled<T extends HTMLElement | SVGElement = HTMLElement>(tag: string, css: string, iframeSelector: string | undefined): typeof StyledElement & (new (...args: any[]) => StyledElement<T>);

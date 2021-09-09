import cssStyled from "css-styled";
import { StyledElement } from "./StyledElement";

export default function styled<T extends HTMLElement | SVGElement = HTMLElement>(
    tag: string, css: string, iframeSelector: string | undefined): typeof StyledElement & (new (...args: any[]) => StyledElement<T>) {
    const injector = cssStyled(css, iframeSelector);

    return class Styled extends StyledElement<T> {
        public injector = injector;
        public tag = tag;
    };
}

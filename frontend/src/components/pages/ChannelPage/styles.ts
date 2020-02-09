import {Theme} from "@material-ui/core/styles";
import {CSSProperties} from "react";

export function generateBackgroundImageStyles(theme: Theme): CSSProperties {
    const bgColor = [
        theme.palette.grey["800"],
        theme.palette.grey["700"],
        theme.palette.grey["600"]
    ];
    const bgSize = 80;
    const bgGradient = [30, 150, 30, 150].map(number =>
        `linear-gradient(${number}deg, ${bgColor[1]} 12%, transparent 12.5%, transparent 87%, ${bgColor[1]} 87.5%, ${bgColor[1]})`
    ).join(',');
    const bgGradient2 = [60, 60].map(number =>
        `linear-gradient(${number}deg, ${bgColor[2]} 25%, transparent 25.5%, transparent 75%, ${bgColor[2]} 75%, ${bgColor[2]})`
    ).join(',');

    return {
        backgroundColor: bgColor[0],
        background: `${bgGradient}, ${bgGradient2}`,
        backgroundSize: `${bgSize / 2}px ${bgSize}px`,
        backgroundPosition: `
            0 0, 
            0 0, 
            ${bgSize / 4}px ${bgSize / 2}px, 
            ${bgSize / 4}px ${bgSize / 2}px, 
            0 0, 
            ${bgSize / 4}px ${bgSize / 2}px
        `
    }
}

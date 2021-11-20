import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
        powderWhite: "#FFFDF9",
        persianGreen: "#06B49A",
        lightBlue: "#AFDBD2",
        onyx: "#36313D",
        blurColor: "#0000008E",
        darkDarkBlue: "#282A35",
        lightGrey: "#E6E6E6FF",
        darkGrey: "#666666FF",
        red: "#FF0000FF",
        orange: "#FF7F50",
        hoverOrange: '#FF9973'
    },
    fonts: ["serif", "Montserrat-Bold"],
    fontSizes: {
        small: "1em",
        medium: "2em",
        large: "3em"
    }
};

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;

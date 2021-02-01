import { unstable_createMuiStrictModeTheme as createMuiTheme } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import {
  createStyles,
  jssPreset,
  makeStyles,
  StylesProvider,
  ThemeProvider,
} from "@material-ui/core";
import rtl from "jss-rtl";
import { create } from "jss";

import routes from "./routes";
import LoadingScreen from "src/components/LoadingScreen";

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const useStyles = makeStyles(() =>
  createStyles({
    "@global": {
      "*": {
        boxSizing: "border-box",
        margin: 0,
        padding: 0,
      },
      html: {
        "-webkit-font-smoothing": "antialiased",
        "-moz-osx-font-smoothing": "grayscale",
        height: "100%",
        width: "100%",
        fontFamily: "Arial, Helvetica, sans-serif",
      },
      body: {
        height: "100%",
        width: "100%",
      },
      "#root": {
        height: "100%",
        width: "100%",
      },
    },
  })
);

const theme = createMuiTheme({
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
});

const Core = () => {
  useStyles();
  const isLoading = useSelector((state) => state.global.isLoading);

  return (
    <ThemeProvider theme={theme}>
      <StylesProvider jss={jss}>{routes}</StylesProvider>
      {isLoading && <LoadingScreen />}
    </ThemeProvider>
  );
};

export default Core;

import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  overrides: {
    MuiTypography: {
      root: {
        fontFamily: "Roboto",
      },
      h1: {
        fontSize: "9rem",
        fontWeight: "bold",
        "@media (max-width:1280px)": {
          fontSize: "8em",
        },
        "@media (max-width:960px)": {
          fontSize: "7.6em",
        },
        "@media (max-width:600px)": {
          fontSize: "6em",
        },
      },
      h2: {
        fontSize: "8rem",
        // fontSize: "65px",
        fontWeight: "bold",
        "@media (max-width:960px)": {
          fontSize: "6.8em",
          // fontSize: "55px",
        },
        "@media (max-width:600px)": {
          fontSize: "5em",
        },
        "@media (max-width:450px)": {
          fontSize: "4em",
        },
      },
      h3: {
        fontSize: "5rem",
        // fontSize: "40px",
        fontWeight: "bold",
        "@media (max-width:1280px)": {
          fontSize: "4.4em",
        },
        "@media (max-width:960px)": {
          fontSize: "4em",
        },
      },
      h4: {
        fontSize: "4.2rem",
        fontWeight: "bold",
        "@media (max-width:960px)": {
          fontSize: "3.8em",
        },
        "@media (max-width:450px)": {
          fontSize: "3em",
        },
      },
      h5: {
        fontSize: "3.2rem",
      },
      h6: {
        fontSize: "2.6rem",
        "@media (max-width:1280px)": {
          fontSize: "2.2em",
        },
      },
      subtitle1: {
        fontSize: "18px",
      },
      subtitle2: {
        fontSize: "16px",
      },
      body1: {
        fontSize: "1.8rem",
        "@media (max-width:450px)": {
          fontSize: "1.5em",
        },
      },
      body2: {
        fontSize: "1.5rem",
      },
    },
    MuiButton: {
      root: {
        textTransform: "none",
      },
    },
    MuiCard: {
      root: {
        boxShadow: "4px 7px 20px rgba(0, 0, 0, 0.25)",
        borderRadius: "15px",
      },
    },
    MuiIcon: {
      fontSizeInherit: {
        fontSize: "3rem",
      },
    },
    MuiCssBaseline: {
      "@global": {
        "*": {
          "scrollbar-width": "thin",
          fontSize: "8px",
        },
        body: {
          fontFamily: "Roboto",
          backgroundColor: "#fff",
          overflowY: "overlay",
          scrollBehavior: "smooth",
        },
        "*::-webkit-scrollbar": {
          backgroundColor: "transparent",
          width: "0.6em",
        },
        "*::-webkit-scrollbar-track": {
          backgroundColor: "transparent",
          borderRadius: "5px",
        },
        "*::-webkit-scrollbar-thumb": {
          background: "rgba(0,0,0,0.3)",
          borderRadius: "5px",
        },
        "*::-webkit-scrollbar-thumb:active": {
          background: "rgba(25, 101, 214, 0.8)",
          borderRadius: "5px",
        },
        "*::-webkit-scrollbar-corner": {
          borderRadius: "5px",
        },
      },
    },
  },
});
export default theme;

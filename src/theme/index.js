import { createMuiTheme } from "@material-ui/core";
//** Material Ui dar hastash az JSS estefade karde...bara hamin mishe mesle paeen jss nevesht

const Theme = createMuiTheme({
  overrides: {
    MuiTypography: {
      root: {
        fontFamily: "shabnam !important",
        //fontSize : '2rem !important'
      },
    },
    MuiButton: {
      label: {
        fontFamily: "Shabnam",
      },
    },
  },
});

export default Theme;

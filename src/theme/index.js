import { createTheme } from "@material-ui/core/styles";
//** Material Ui dar hastash az JSS estefade karde...bara hamin mishe mesle paeen jss nevesht

const Theme = createTheme({
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
    MuiMenuItem: {
      root: {
        fontFamily: "Shabnam",
      },
    },
  },
});

export default Theme;

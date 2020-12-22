import { blue, black, red, white } from "./colors";
import { primaryFont } from "./typography";

export const defaultTheme = {
  borderColor: black[300],
  headingColor: black[400],
  primaryColor: black[500],
  buttonColor: blue[400],
  textColorOnPrimary: white[400],
  textColor: black[400],
  subTextColor: black[200],
  primaryFont,
  status: {
    errorColor: red[400],
  },
};

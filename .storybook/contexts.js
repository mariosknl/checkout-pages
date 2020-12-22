import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../src/utils";

export const contexts = [
  {
    title: "Themes",
    components: [ThemeProvider],
    params: [
      {
        name: "Default Theme",
        props: { theme: defaultTheme },
        default: true,
      },
    ],
    options: {
      deep: true,
      disable: false,
      cancelable: false,
    },
  },
];

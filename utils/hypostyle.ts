import { hypostyle as hypo, Tokens } from "hypostyle";
import * as presets from "hypostyle/presets";
import { Roboto } from "@next/font/google";

const sans = Roboto({
  weight: ["300", "500", "900"],
  // style: ['normal', 'italic'],
  subsets: ["latin"],
});

export const theme: Tokens = {
  color: {
    black: "#202621",
    blue: "#0B89D3",
    lightBlue: "#D8E0E4",
  },
  fontSize: ["3rem", "3rem", "2.2rem", "1.8rem", "1.4rem", "1rem", "0.75rem"],
};

export const hypostyle = hypo({
  ...presets,
  tokens: {
    ...presets.tokens,
    ...theme,
  },
  macros: {
    ...presets.macros,
    caps: {
      textTransform: "uppercase",
    },
  },
  variants: {
    font: {
      sans: sans.style,
    },
    gutter: {
      sm: {
        px: [2, 4],
      },
      md: {
        px: [4, 6],
      },
      lg: {
        px: [6, 10],
      },
    },
    shadow: {
      sm: {
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      },
    },
  },
});

import type { AppProps } from "next/app";
import { Hypo } from "@hypobox/react";

import { hypostyle } from "../utils/hypostyle";

hypostyle.injectGlobal({
  "*": {
    boxSizing: "border-box",
  },
  "html, body": {
    margin: 0,
    padding: 0,
    color: "black",
    font: "sans",
    fontWeight: 300,
    bg: "blue",
  },
  "h1, h2, h3, h4, h5, h6, p": {
    margin: 0,
  },
  h1: {
    fs: 1,
    lh: 1,
  },
  h2: {
    fs: 2,
    lh: 2,
  },
  h3: {
    fs: 3,
    lh: 3,
  },
  h4: {
    fs: 4,
    lh: 4,
  },
  h5: {
    fs: 5,
    lh: 5,
  },
  h6: {
    fs: 6,
    lh: 6,
  },
  p: {
    fs: 5,
    lh: 5,
  },
  a: {
    c: "currentColor",
    textDecoration: "none",
    "&:visited": {
      c: "currentColor",
    },
  },
  "::selection": {
    bg: "lightBlue",
  },
  ".content": {
    p: {
      mb: 4,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Hypo hypostyle={hypostyle}>
      <Component {...pageProps} />
    </Hypo>
  );
}

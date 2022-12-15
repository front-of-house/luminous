import React from "react";
import { Box, BoxProps } from "@hypobox/react";

export const gutter = {
  px: [5, 8, 12],
  py: [3, 5, 8],
};

export function Gutter({
  children,
  vertical,
  ...props
}: React.PropsWithChildren<
  BoxProps & {
    vertical?: boolean;
  }
>) {
  return (
    <Box px={gutter.px} py={vertical ? gutter.py : 0} {...props}>
      {children}
    </Box>
  );
}

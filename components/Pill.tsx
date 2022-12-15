import React from "react";
import { Box } from "@hypobox/react";

export function Pill({ children, ...props }: React.PropsWithChildren<any>) {
  return (
    <Box
      py={1}
      px={3}
      borderRadius="20px"
      bg="lightBlue"
      fs={6}
      fw={9}
      caps
      dib
      c="blue"
    >
      {children}
    </Box>
  );
}

import React from "react";
import { Box } from "@hypobox/react";

import { gutter } from "./Gutter";
import { A } from "./Header";

/*
    <Box as='p' f aic fw caps fontWeight={5} fs={6} c='black' w={1}>
      <Box as='span' w={[1, 1, 'auto']} f aic pr={4}>
        3701
        <Box as='span' px={4}>|</Box>
        3711
        <Box as='span' px={4}>|</Box>
        3717
        <Box as='span' px={4}>|</Box>
        3722
        <Box as='span' px={4}>|</Box>
        3729
      </Box>
      <Box as='span' w={[1, 1, 0.5]}>N. Ravenswood Ave, Chicago, IL 60613</Box>
    </Box>
 */

export function Address() {
  return (
    <Box as="p" caps fontWeight={5} fs={6}>
      <Box as="span" dib pr={4}>
        <span>3701</span>
        <Box as="span" px={4}>
          |
        </Box>
        <span>3711</span>
        <Box as="span" px={4}>
          |
        </Box>
        <span>3717</span>
        <Box as="span" px={4}>
          |
        </Box>
        <span>3722</span>
        <Box as="span" px={4}>
          |
        </Box>
        <span>3729</span>
      </Box>
      <Box as="span" dib>
        N. Ravenswood Ave, Chicago, IL 60613
      </Box>
    </Box>
  );
}

export function Footer() {
  return (
    <Box as="footer" px={gutter.px} py={8} f aic jcb fw>
      <Box
        w={[1, 1, 2 / 3, 3 / 4]}
        ta={{ 0: "center", 2: "left" }}
        pb={[4, 4, 0]}
      >
        <Address />
      </Box>

      <Box
        as="nav"
        w={[1, 1, 1 / 3, 1 / 4]}
        f
        cx={{
          justifyContent: { 0: "center", 2: "flex-end" },
        }}
      >
        <Box
          as="ul"
          f
          fw
          my={0}
          pl={0}
          cx={{
            listStyle: "none",
          }}
        >
          <Box as="li" pl={{ 0: 0, 2: 4 }}>
            <A href="/about" title="About">
              About
            </A>
          </Box>
          <Box as="li" pl={4}>
            |
          </Box>
          <Box as="li" pl={4}>
            <A href="/members" title="Members">
              Members
            </A>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

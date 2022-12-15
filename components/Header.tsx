import React from "react";
import { Box } from "@hypobox/react";
import Link from "next/link";

import { Logo } from "./Logo";
import { Gutter, gutter } from "./Gutter";
import { Hamburger } from "./icons/Hamburger";
import { Cross } from "./icons/Cross";
import { Address } from "./Footer";

export const headerGap = ["75px", "95px", "115px"];

export function A({ children, ...props }: React.PropsWithChildren<any>) {
  return (
    <Box as={Link} href={props.href} fs={6} caps fw={9}>
      {children}
    </Box>
  );
}

export function Header() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    function onScroll() {
      const header = document.getElementById("header");
      if (header) {
        if (window.scrollY > 0) {
          header.classList.add("scrolled");
        } else {
          header.classList.remove("scrolled");
        }
      }
    }

    document.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <Box
      id="header"
      as="header"
      px={gutter.px}
      fix
      w
      z={999}
      h={[75, 95, 115]}
      f
      aic
      jcc
      cx={{
        transition: "height 0.3s cubic-bezier(.04,.85,.55,1)",
        "&.scrolled": {
          height: "75px !important",
        },
      }}
    >
      <Box
        abs
        cover
        bg="white"
        shadow="sm"
        z={0}
        opacity={0}
        cx={{
          transition: "opacity 0.3s cubic-bezier(.04,.85,.55,1)",
          ".scrolled &": {
            opacity: 1,
          },
        }}
      />

      <Box f aic jcb w>
        <Box as={Link} rel fs="0px" href="/" title="Home" z={2}>
          <Logo w={[120, 120, 150]} />
        </Box>

        <Box as="nav" rel z={1} display={{ 0: "none", 2: "block" }}>
          <Box
            as="ul"
            f
            fw
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

        <Box
          as="button"
          rel
          z={2}
          p={2}
          mr={-8}
          w={45}
          fs="0px"
          display={{ 0: "block", 2: "none" }}
          onClick={() => setOpen(!open)}
          cx={{
            border: 0,
            bg: "transparent",
            cursor: "pointer",
          }}
        >
          {open ? <Cross w={20} /> : <Hamburger w={28} />}
        </Box>

        {open && (
          <Box
            as="nav"
            rel
            z={1}
            display={{ 0: "block", 2: "none" }}
            bg="blue"
            fix
            cover
            pt={headerGap}
          >
            <Gutter vertical>
              <Box as="ul" pl={0} my={0} c="white" cx={{ listStyle: "none" }}>
                <Box as="li" mb={2}>
                  <Box as={Link} href="/" fs={2} fw={9}>
                    Home
                  </Box>
                </Box>
                <Box as="li" mb={2}>
                  <Box as={Link} href="/about" fs={2} fw={9}>
                    About
                  </Box>
                </Box>
                <Box as="li" mb={2}>
                  <Box as={Link} href="/members" fs={2} fw={9}>
                    Members
                  </Box>
                </Box>
              </Box>
            </Gutter>

            <Box abs bottom={0} left={0} right={0} p={gutter.px}>
              <Address />
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}

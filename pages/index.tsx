import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { Box } from "@hypobox/react";

import { Logo } from "../components/Logo";
import { Header } from "../components/Header";
import { Address } from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Luminous Directory</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box display={{ 3: "none" }}>
        <Header />
      </Box>

      <Box w="100%" overflow="hidden" bg="blue" minHeight="100vh">
        <Box f jcb flexDirection="column" minHeight="100vh" h={{ 3: "100vh" }}>
          <Box c="white" f fw mx={-16} h="100%" z={1}>
            <Box
              w={[1, 1, 1, 0.5]}
              f
              jce
              flexDirection="column"
              h={{ 3: "100%" }}
              px={4}
            >
              <Box
                pl={[5, 8, 12]}
                pr={[5, 8, 12, 0]}
                pt={["55px", "75px", "95px"]}
                pb={{ 0: 8, 3: 96 }}
              >
                <Logo w="150px" c="black" display={{ 0: "none", 3: "block" }} />

                <Box as="p" pt={6} maxWidth="500px">
                  Named after the building’s origins as the fluorescent light
                  factory Luminous Ceilings Inc., the Luminous Directory is a
                  digital library of the many businesses in this historic,
                  block-long building in Chicago.
                </Box>
              </Box>
            </Box>

            <Box rel w={{ 0: 1, 3: 0.5 }} h={1} px={4} z={1}>
              <Box
                as="h3"
                z={0}
                pt={{ 3: 10 }}
                pl={[5, 8, 12, 16]}
                fs={6}
                fw={9}
                pb={2}
                caps
                position={{ 3: "absolute" }}
                top
                left
              >
                Directory
              </Box>

              <Box
                pt={{ 0: 2, 3: 16 }}
                pb={10}
                px={[5, 8, 12]}
                rel
                h={1}
                overflow="auto"
              >
                <Box
                  z={1}
                  abs
                  top={52}
                  left
                  w
                  h={24}
                  bg="linear-gradient(to top, #0B89D3, rgba(0, 0, 0, 0))"
                  zIndex={-1}
                />

                {Array(1)
                  .fill(0)
                  .map((_, i) => (
                    <Box
                      as={Link}
                      key={i}
                      href={`/members/side-by-side`}
                      db
                      py={2}
                      rel
                      bg="blue"
                      z={2}
                      cx={{
                        cursor: "pointer",
                        "&:hover": {
                          ".__bg": {
                            opacity: 1,
                          },
                        },
                      }}
                    >
                      <Box
                        className="__bg"
                        abs
                        left={-16}
                        right={-16}
                        top={0}
                        bottom={0}
                        bg="white"
                        borderRadius="8px"
                        opacity={0}
                        shadow="sm"
                        cx={{
                          transition:
                            "opacity 0.2s cubic-bezier(.04,.85,.55,1)",
                        }}
                      />

                      <Box as="p" rel c="black">
                        <Box as="span" fs={6} fw={3} pr={2}>
                          205
                        </Box>
                        <Box as="span" fw={9}>
                          Side By Side
                        </Box>
                      </Box>
                    </Box>
                  ))}
              </Box>
            </Box>
          </Box>

          <Box
            as="footer"
            px={[5, 8, 12]}
            pb={[8, 10, 12]}
            bottom={0}
            w={1}
            position={{ 3: "absolute" }}
            z={0}
          >
            <Address />
          </Box>
        </Box>
      </Box>
    </>
  );
}

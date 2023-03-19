import { Flex, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Link from 'next/link'
import { ToogleThemeButton } from '../components/ToogleThemeButton'

const Home: NextPage = () => {
  return (
    // Instead of using the html div element,
    // we'll use the Chakra UI Flex component, which is a flexbox container
    <Flex
      // Altura da container
      height="100vh"
      // Largura do container
      width="100vw" 
      // Alinhamento vertical do container
      align="center" 
      // Alinhamento horizontal do container
      justify="center"
      // Direção do container
      flexDirection="column"
    >
      <Text
        // This color comes straight from our theme
        color="success.700"
        // Tamanho da fonte
        fontSize="4xl" 
        // Peso da fonte
        fontWeight="bold"
        // font alignment
        textAlign="center"
      >
        Button to change application theme on Home

      </Text>
      <ToogleThemeButton />
  {/* 👇🏽 for accessibility and SEO reasons */}
      <Link href="/page2"> 
        <a>
            Go to page 2
        </a>
      </Link>
  {/* ☝🏽 we must wrap the child element of the Link component in an 'a' tag */}
    </Flex>
  )
}

export default Home;

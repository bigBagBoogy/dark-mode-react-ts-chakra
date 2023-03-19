# bigBagBoogie note:

The code you need from this project to make darkmode on an
other project is:

- src/components/ToogleThemeButton.tsx

import it in your page or header-component (wherever you'll use it):
import { ToogleThemeButton } from '../components/ToogleThemeButton'

place it where you import it: <ToogleThemeButton />

you can configure it in theme.ts by adding:
config: {
initialColorMode: 'dark',
useSystemColorMode: false,
},

<h1 align="center">Light ☀️ and Dark 🌙 mode with Chakra UI and Next.js</h1>

<p align="center">This project aims to help developers to use light and dark mode in their projects using <a href="https://chakra-ui.com">Chakra UI</a> and <a href="https://nextjs.org/">Next.js</a>, in addition to <a href="https://www.typescriptlang.org/">Typescript</a>.

```

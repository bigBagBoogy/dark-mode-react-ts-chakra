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

# Demo of the application

[Clicking here](https://light-dark-mode-chakraui-pt-4l58jrokx-jpc0rrea.vercel.app/) will take you to the live application.

# 🚀 Run the project on your machine

```bash
# Clone this repository
$ git clone https://github.com/jpc0rrea/light-dark-mode-chakraui-en

# Access the project folder in terminal/cmd
$ cd light-dark-mode-chakraui-en

# Install the dependencies
$ npm install

# or install using yarn
$ yarn

# Run the application in development mode
$ npm run dev

# or using yarn
$ yarn dev

# The application will start on port:3000 - go to <http://localhost:3000>
```

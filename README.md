
<a name="readme-top"></a>

<div align="center">
  <h3 align="center">Team .EXE Website</h3>
</div>

## About The Project

A collaborative effort made by members of team EXE to expand into horizons of world wide web

## Built With

- [![Next][Next.js]][Next-url]
- [![React][React.js]][React-url]
- [![tailwindcss][tailwindcss.com]][tailwindcss-url]
- <a href="https://www.figma.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="40" height="40"/> </a>
- <a href="https://firebase.google.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="40" height="40"/> </a>
- <a href="https://www.framer.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/framer/framer-icon.svg" alt="framer" width="40" height="40"/> </a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a>

## Getting Started

Follow the below instructions to run the code.

### Prerequisites

- npm
- Node.js

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/anisharma07/EXE-Website-2024.git
   ```
2. Change directory
   ```sh
   cd EXE-Website-2024
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. To run the project, run command:
   ```sh
   npm run dev
   ```
5. .env setup:
   ```sh
   EMAIL=<Your_Email_Address>
    EMAIL_PASS=<Your_Email_App_Password>
    REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
    REACT_APP_FIREBASE_DATABASE_URL=your_firebase_database_url
    REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
    REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
    REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
    REACT_APP_FIREBASE_MEASUREMENT_ID=your_firebase_measurement_id
   ```

## Preview

you can preview the project by going to `https://localhost:3000` in your browser

## Code Structure

**SRC/Components**

- ./src/components
  - `/Home` - to edit the Home page components.
  - `/ui` - to add or edit reusable ui components.

**Home page:**

- ./app/
  - globals.css
  - layout.jsx
  - page.jsx
- to edit home page, start editing components in `./src/components/home`
- to find the theme colors check out `globals.css`

**Projects, Events and Our Team page**

- ./app/
  - our team
    - components
    - page.jsx
  - events
    - components
    - page.jsx
  - projects
    - components
    - page.jsx

<br/>

- To edit these pages, create and edit `components` in respective folders.

**Public Folder**

- assets
  - images
  - icons
  - videos
- you can find required assets in `./public`

## Breakpoints for responsiveness

- sm: { max: "479px" }, // use this for mobile
- md: { max: "912px" }, // use this for tablet
- lg: { max: "1199px" }, // use this for smaller laptops
- `Note:`
  1.  before the name of class u add use these to make the property applied specifically based on device. (e.g. sm:text-white will apply text-color to white for mobile device).
  2.  if you don't add these prefixes, that class is applied for all display sizes.
  3.  add these properties at last.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[tailwindcss.com]: https://img.shields.io/badge/Tailwind-563D7C?style=for-the-badge&logo=tailwindcss&logoColor=white
[tailwindcss-url]: https://tailwindcss.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com

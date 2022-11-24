Hello guys I'm <a href="https://andresflorezlopez.com/">andresflorezlopez</a>

<!-- Table of Contents -->

# :notebook_with_decorative_cover: Table of Contents

- [About the Project](#star2-about-the-project)
  - [Screenshots](#camera-screenshots)
  - [Tech Stack](#space_invader-tech-stack)
  - [Features](#dart-features)
  - [Color Reference](#art-color-reference)
  - [Firebase configuration](#key-environment-variables)
- [Getting Started](#toolbox-getting-started)
  - [Prerequisites](#bangbang-prerequisites)
  - [Installation](#gear-installation)
  - [Running Tests](#test_tube-running-tests)
  - [Run Locally](#running-run-locally)
  - [Deployment](#triangular_flag_on_post-deployment)

<!-- About the Project -->

## :star2: About the Project

The user should be able to see a thumbnail and a small description of each artwork in the main screen of the app. When clicking on a thumbnail the user must be sent to a detailed screen of the artwork containing a better quality image and more detailed information about the piece, the author, and any other data you consider might be relevant for the end user. The user should be able to save some favorite artworks, and should be able to explore them even after the application is completely closed and reopened.

<!-- Screenshots -->

### :camera: Screenshots

<div align="center"> 
  <img src="./assets/screenshotlist.png" alt="screenshot" />
  <img src="./assets/screenshotfavbutton.png" alt="screenshot" />
</div>

<!-- TechStack -->

### :space_invader: Tech Stack

<details>
  <summary>Frontend</summary>
  <ul>
    <li><a href="https://www.typescriptlang.org/">Typescript</a></li>
    <li><a href="https://reactnative.dev/">ReacNative.js</a></li>
    <li><a href="https://reactjs.org/">React.js</a></li>
    <li><a href="https://www.react-native-material.com/">Material.ui</a></li>
    <li><a href="https://reactnavigation.org/">reactnavigation.root</a></li>
  </ul>
</details>

<details>
  <summary>Backend</summary>
  <ul>
    <li><a href="https://firebase.google.com/docs/database">FireDatabase.nosql</a></li>
  </ul>
</details>

<!-- Features -->

### :dart: Features

- Article list: users are going to able to see at least 10 articles from the artwork API
- Article detail: users are going to able to see details about the article
- Add to favorites: users are going to able to mark an article as a favorite to read later or only save it
- Favorite list: users are goint to able to see her/his saved articles

TODO:

- refresh favorite list with real time

<!-- Env Variables -->

### :key: Firebase configuration

To run the project you need a created firebase database in the firebase console <a href="https://firebase.google.com/docs/database">link</a>. For testing you can use the following database:

`apiKey: 'AIzaSyCK9SB3SkFz58c_J59MCm34zDAsqcR3FDg'`
`authDomain: 'modak-ffa97.firebaseapp.com'`
`databaseURL: 'https://modak-ffa97-default-rtdb.firebaseio.com'`
`projectId: 'modak-ffa97'`
`storageBucket: 'modak-ffa97.appspot.com'`
`messagingSenderId: '807642683127'`
`appId: '1:807642683127:web:b16d82ad4d4c07c606a5f2'`
`measurementId: 'G-E6RH3437VC'`
`name: 'name'`
`options: {}`
`automaticDataCollectionEnabled: true`

use the above information to create the database.

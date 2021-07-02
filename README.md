# Welcome to BPM Tools!

This is an app aimed at helping electronic music producers and especially those without a strong music background.
It is temporarily deployed and available from [HERE](https://heuristic-ritchie-6e0337.netlify.app/) but will require further development and polish until I plan to share it with the music production community at large.

## What does this app do?
Currently this page has two sections. More will be added later.

The first section provides a tool for producers to ensure all of the notes they are using musically exist in the same scale. Those without a strong music background, myself included, can find the entire piano roll intimidating since some notes sound "in", some sound "out", and some can be fuzzy. By choosing a specific scale, this application provides the musical notes and tonic that are following structured musical rules to ensure music is produced in key.

The second section provides exact timings for a variety of beat subdivisions. For anyone producing electonic music, there is a constant fight against perfectly quantized sounds and processing. It is a fine line to walk between rhythms that are "on" beat in a human way vs. sounding out of sync. And this constrasts with being exactly robotically in perfect syncronization all the time. This delay calculator will allow users to dial in values on their delays and reverbs on analog or virtual DAW instruments that are very nearly in sync with the tempo of their tracks, but finetune their rhythms for more humanization. This can be effective for adding swing or controlling reverb so that it doesn't drown out sounds directly on beat.

## How does this app work?

This is a 'Create React App'. It's written entirely in javascript and styled with [Chakra](https://chakra-ui.com/docs/getting-started). All of the data and functions are provided client side on load as there is no middle or backend in this application.

Musical modes and scales are predictable patterns and as a result, this app does not have any combinations of tonic or root keys hard coded. Instead, my approach was to design this application like a caesar cipher encryption where the various modes and keys are shifted along the piano roll to modulate the scale patterns.

The delay calculator is a function of 60,000 milliseconds divided by the BPM. This provides the duration of a single beat and it is then multiplied or subdivided to achieve the time of specific notational duration.

Both of these tools make use of state for a responsive experience.

## How do I run this?
This app requires running on node. You will need to run [node](https://nodejs.org/en/) and the [node package manager](https://www.npmjs.com/get-npm).
1. Download this app
2. cd into the directory
3. Global install 'npm serve' if you need to: `npm install -g serve`
4. `serve -s build`
5. Make sick beats!

## Updates:
- Added hide/show functionality so that user can toggle between hiding/displaying useful tools
- Added a sub-bass compression attack time table

## Still to do:
- Add a nav bar for multipage functionality
- - Add a page with thorough explanation on the functionality
- - Add an about page that explans technical details of the site
- Clean up the styling
- Add an EQ range per note chart

## Wishlist items:
- Add a drag n drop chord progression builder
- Provide pianoroll overlay


## The default Create React App readme documentation can be found below:

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

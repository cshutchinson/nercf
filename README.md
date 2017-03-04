#Production-ish Server
##Package Based on https://github.com/reactjs/react-router-tutorial
##Visit the repo for a clear step by step explanation of why this works...
___

##What is this repo?
This repo is a Node server running an Express Web Server. This webserver listens for browser requests and responds with
our React w/ Router application. The Modules are very simple, but that is the intent. Webpack is used to transpile and
bundle our Javascript. NPM serves as our task runner.

Please note the two npm tasks located in package.json. One is for a dev server and the other option is a simulated
production server...in this case our production server is Express -- serving our app on 8080.

---

In contrast, the local dev server is a package called webpack-dev-server. Once you start the app in dev mode,

`npm start`

the web browser will auto refresh with your changes to the transpiled, and bundled javascript file bundle.js delivered
to your browser. If you will keep your browser window open, webpack will watch your js files and refresh the browser
automatically with your changes.

___

The intent of this repo is to show the simplicity of an Express server providing a React / React Router app. Its serves
as a good foundation for Redux. When you understand this, move on to refactoring Redux into this app.


###Setup
`npm install`

# Running Local

`npm start`

# Simulate Production

`NODE_ENV=production npm start`
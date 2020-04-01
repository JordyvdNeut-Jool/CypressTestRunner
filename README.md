# Cypress Recorder Extension

This node server is needed for the Chrome extension [Cypress recorder](https://github.com/JordyvdNeut-Jool/Cypress-Recorder)

## Getting Started With The Cypress Recorder

### First we will have to install a node server that can run the cypress for us.
When you have cloned this repository, install the packages with the following command.

```
npm install
```

To complete the installation of cypress, run the following command. This will open cypress and create the needed files.

```
npm run cypress:open
```

Now you can close cypress and run the server with.

```
node app
```

### Next we will set up the extension.

Clone the Chrome extention [Cypress recorder](https://github.com/JordyvdNeut-Jool/Cypress-Recorder)
When you have cloned the extention. Install the packages with.

```
npm install
```

Now you have to run the build.

```
npm run build
```

When your build is done your have to open your chrome browser and go to manage extensions.

Turn Developer mode on, 'load unpacked' here you have to select your /your/project/dist folder.
The installations are done now you can start testing!

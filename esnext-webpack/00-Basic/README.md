# Aurelia 00-Basic
This application is Aurelia version of the standard 01-Login application demonstrating the basic steps of authentication with Auth0 SaaS.



### Building the app

This app is built using the **[Aurelia CLI](https://www.npmjs.com/package/aurelia-cli)** desktop tool, using this **[online guide](https://aurelia.io/docs/cli)**. The creation process starts with issuing the command `au new 00-Basic` and selecting the first alternative.
```
1. Default ESNext (Default)
   A basic web-oriented setup with Babel and Webpack for modern JavaScript development.
```

This choice results with the following build configuration
```
Project Configuration

    Name: 00-Basic
    Platform: Web
    Bundler: Webpack
    Loader: None
    Transpiler: Babel
    Markup Processor: Minimal Minification
    CSS Processor: None
    Unit Test Runner: Jest
    Unit Test Runner: Karma
    Integration Test Runner: None
    Editor: Visual Studio Code
```
### Running The App

```
npm install
```

or 

```
yarn install
```

followed by 
```
nps
```


**Note**: the command **[`nps`](https://www.npmjs.com/package/nps)** is a better alternative to **`au run --watch`** when using webpack as the compiler / bundler.

### How was this application created and built

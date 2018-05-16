# Aurelia 00-Basic
This application is Aurelia version of the standard 00-Basic application - a skeleton without any Auth0 specific code. While the "look and feel" of this application conforms to the general style of all other Auth0 [quick-starts](https://auth0.com/docs/quickstarts), the code is written using the best practices for writing Aurelia applications. This approach will help Aurelia developers "feel at home" when visiting Auth0 site to learn how to add the support for Auth0 Identity Management services.

![image](https://user-images.githubusercontent.com/2712405/40130788-144f2114-5906-11e8-987c-1155d7d3e711.png)

### Building the app

This app is built using the **[Aurelia CLI](https://www.npmjs.com/package/aurelia-cli)** desktop tool, using this **[online guide](https://aurelia.io/docs/cli)**. The creation process starts with issuing the command `au new 00-Basic` and selecting the first alternative offered by the CLI "wizard".
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

The content of the **[`src`](https://github.com/aurelia-auth0/new-samples/tree/master/esnext-webpack/00-Basic/src)** folder is completely changed from the originally created "Hello, world" code.

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

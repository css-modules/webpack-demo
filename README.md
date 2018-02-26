[ ![Codeship Status for css-modules/webpack-demo](https://codeship.com/projects/abd32560-eb97-0132-9ece-26192dc48311/status?branch=master)](https://codeship.com/projects/83499)

# CSS Modules Webpack Demo

A working demo of [CSS Modules], using [Webpack]'s [css-loader] in [module mode].

## Run the example

```bash
$ npm install
$ npm start & open http://localhost:8080
```

## npm modules required for CSS modules

In this project's `package.json` file you will find a lot of npm modules for this demo application. Since not all of them are required to use CSS modules, we've created the following list to describe their purpose. 

**Required modules**

The following modules are the only ones really needed to get started with CSS modules:

|Module|Description|
|------|------------|
|[Webpack]|Webpack (obviously...)|
|[webpack-dev-server]|(Optional) Supports hotloading of changed files, etc., while developing||
|[style-loader] and [css-loader]|`style-loader` and `css-loader` process your CSS files. `css-loader` is the loader that actually makes [CSS modules] work|

To make CSS modules work with Webpack you only have to include the modules mentioned above, and add the following loader to your `webpack.config.js` file:
```
. . .
{
  test: /\.css$/,
  loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' 
}
. . .
```

**Optional modules**

The following modules control the *actual CSS processing*. They are *not* CSS modules specific, and can be used with both "regular" CSS and CSS modules: 

|Module|Description|
|------|------------|
|[postcss-loader](https://github.com/postcss/postcss-loader)|Allows execution of various CSS post processors in Webpack. Required for `autoprefixer-core` and `postcss-color-rebeccapurple`|
|[autoprefixer-core](https://github.com/ai/autoprefixer-core)|Add vendor-prefixes to your css code (according to the GitHub page, it is deprecated and should be replaced by [autoprefixer](https://github.com/postcss/autoprefixer)|
|[postcss-color-rebeccapurple](https://github.com/postcss/postcss-color-rebeccapurple)|Another CSS post processor. This is only needed to support `rebeccapurple` color in CSS|
|[extract-text-webpack-plugin](https://github.com/webpack/extract-text-webpack-plugin)|Writes the CSS code processed by Webpack into its own CSS-file, and not into the generated bundle JavaScript file.|
  
**Unrelated modules**

These modules are only needed for the demo application:

|Module|Description |
|------|------------|
|[babel]|ESx-to-ES5 compiler. Mostly needed for React code|
|[ejs]|JavaScript templating language|
|[react-to-html-webpack-plugin]|Webpack plug-in that renders React components|
|[node-libs-browser]|Node libraries for in-browser use|
|[gh-pages]|Publishes file to a `gh-pages` branch for GitHub pages|
|[url-loader]|Webpack file handling, e.g. for images|
|[file-loader]|Webpack file handling, e.g. for images|
|[raw-loader]|It’s used to load raw css files (as utf8) into the demo so it can be rendered into `<code>`|

## License

[MIT]

[CSS Modules]: https://github.com/css-modules/css-modules
[Webpack]: http://webpack.github.io
[webpack-dev-server]: https://webpack.github.io/docs/webpack-dev-server.html
[css-loader]: https://github.com/webpack/css-loader
[module mode]: https://github.com/webpack/css-loader/#css-modules
[style-loader]: https://github.com/webpack/style-loader
[url-loader]: https://github.com/webpack/url-loader
[file-loader]: https://github.com/webpack/file-loader
[raw-loader]: https://github.com/webpack/raw-loader
[babel]: https://babeljs.io
[node-libs-browser]: https://github.com/webpack/node-libs-browser
[gh-pages]: https://github.com/tschaub/gh-pages
[react-to-html-webpack-plugin]: https://github.com/markdalgleish/react-to-html-webpack-plugin
[ejs]: http://www.embeddedjs.com/
[MIT]: http://markdalgleish.mit-license.org

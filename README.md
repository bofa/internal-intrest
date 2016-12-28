# react-webpack-boilerplate

Boilerplate for building React app (not components library) with Webpack.

## Install

```shell
npm install react-webpack-boilerplate
# or
git clone https://github.com/LeeWeisheng/react-webpack-boilerplate.git
```

## Usage

Firstly, you should copy all files in react-webpack-boilerplate module(or repo) to your project directory. And then, run `npm install` in your project directory. There are initialized scripts in package.json. One is `npm start` for development, another is `npm run build` for production.

## File Structure

The main `src` directory stores source code. When you run `npm run build` command in terminal, `dist` directory will be created, it contains built files. Following are explanation of file or directory in `src`:

- assets: to store static files like svg images, icon fonts, external javascript library etc.
- components: to store reusable react components.
- configs: to store config files like server address in different environment.
- units: to store application functional modules.
- utils: to store utility functions.
- index.html: app entry file.
- index.jsx: webpack entry file.
- routes.jsx: manages all routes.

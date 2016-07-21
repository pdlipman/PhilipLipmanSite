#### Instead of using grunt, gulp, or webloader, I use npm scripts.

```bash
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "lint": "eslint .",
    "watch-css": "node-sass -w ./scss/site.scss ./public/dist/css/site.css",
    "prebuild-css": "npm run mkdir-font && cp -R node_modules/font-awesome/fonts ./public/dist/",
    "mkdir-font": "mkdir ./public/dist/fonts",
    "build-css": "node-sass ./scss/site.scss ./public/dist/css/site.css",
    "prebuild-js": "npm run lint && npm run mkdir-app && npm run copy-assets",
    "mkdir-app": "mkdir ./public/app",
    "copy-assets": "cp -R ./app/assets ./public/app/assets",
    "watch-js": "watchify -t [ babelify --presets [ react ] ] ./app/main.jsx -o ./public/dist/index.js",
    "build-js": "browserify -t [ babelify --presets [ react ] ] ./app/main.jsx -o ./public/dist/index.js",
    "lr": "live-reload --port 9091 ./public/dist/",
    "watch": "npm run watch-css & npm run watch-js & npm run lr",
    "dist": "npm run mkdir-dist && npm run build-css && npm run build-js",
    "mkdir-dist": "mkdir ./public/dist",
    "clean": "rm -r public/app & rm -r public/dist"
  }
```
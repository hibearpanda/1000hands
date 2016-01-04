# 1000 Hands of the Guru - Website

## Development

### Build Tasks

1. Make a build folder in project root

```
mkdir public/build
```

1. Contact admin for config.js

Config file for mailgun + other services

1. JS bundle

```
npm install
npm run-script build
```

1. SASS

Compile SCSS into CSS and watch during development:

```
sass --watch ./public/styles/styles.scss:./public/build/styles.css
```

### Start Server & Connect
npm start
connect to localhost:3000

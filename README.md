# 1000 Hands of the Guru - Website

## Development

Install dependencies
```
npm install
```

or

```
yarn install
```

Make a build folder in project root

```
mkdir public/build
```

Contact admin for config.js or load the following environment variables:
```
MAILGUN_API
MAILGUN_DOMAIN
```

Build Bundle

```
npm run-script build
```

Compile SCSS into CSS and watch during development

```
sass --watch ./public/styles/styles.scss:./public/build/styles.css
```

Start Server & Connect
```
npm start
```

## Production
Build bundle and SASS
```
npm run build
```

Then start server.

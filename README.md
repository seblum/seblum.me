# seblum.me

[![S3 Publish CI](https://github.com/seblum/blum.me/actions/workflows/publish-node-s3-bucket.yml/badge.svg)](https://github.com/seblum/blum.me/actions/workflows/publish-node-s3-bucket.yml)

This repository contains the source for [seblum.me](https://www.seblum.me). The site started from the [Waxon Vue portfolio template](https://themeforest.net/item/waxon-vuejs-personal-portfolio-template/33025103) and is now a Vue 3 app built with Vue CLI 5 (webpack), Vue Router 4, and Sass.

## Requirements

- Node.js 18 or newer (LTS recommended; CI uses Node 22)
- npm 9+

## Local development

All app commands run from the `plain` directory:

```bash
cd plain

npm install
npm run serve    # dev server with hot reload
npm run build    # production build → plain/dist/
npm run lint     # ESLint (Vue 3 + eslint-plugin-vue)
```

The dev server URL is printed in the terminal (Vue CLI defaults to http://localhost:8080/ unless the port is busy).

## Deployment

Pushes to `master` trigger GitHub Actions: build in `plain/`, upload `dist/` as an artifact, and sync to S3 (see `.github/workflows/publish-node-s3-bucket.yml`). Invalidate or adjust CloudFront as needed after deploy.

## License

The Waxon template is used under its [ThemeForest license](https://themeforest.net/item/waxon-vuejs-personal-portfolio-template/33025103). For questions, contact [hello@seblum.me](mailto:hello@seblum.me).

## Clear CloudFront cache

See the AWS guide: [Managing how long content stays in the cache](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html).

## Helpful links

- [Vue 3 documentation](https://vuejs.org/)
- [Vue CLI deployment](https://cli.vuejs.org/guide/deployment.html)
- [vue-gtag (Vue 3)](https://github.com/MatteoGabriele/vue-gtag)
- [Waxon documentation](http://ibthemespro.com/docs/waxon/)

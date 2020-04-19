# api skeleton

Starter repo for a Hapi + MySQL stack

## Run

```
npm install
npm run dev # run development server w/ hot reloading
```

## Secrets

Secrets are loaded from `./.env`

## Documentation

OpenAPI docs are available at `GET /documentation`

## Starting MySQL

```
docker run \
  --name some-mysql \
  -e MYSQL_ROOT_PASSWORD=REPLACE_WITH_YOUR_PW \
  -d mysql
```

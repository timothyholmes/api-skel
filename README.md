# api skeleton

Starter repo for a Hapi + MySQL stack

## Run

```
npm install
npm start
```

## Secrets

Secrets are loaded from `./.env`

## Starting MySQL

```
docker run \
  --name some-mysql \
  -e MYSQL_ROOT_PASSWORD=REPLACE_WITH_YOUR_PW \
  -d mysql
```

# Konnektis Takehome

## Setup

The simplest way to run this project is to use docker / docker-compose. Install
instructions can be found [here](https://docs.docker.com/compose/install/)

```sh
$ docker-compose up
```

This will create an instance of postgresql, creating required tables as well as
starting the app up.

The app is served on http://localhost:3001


## Tests

In order to run the test-suites, run the following commands

```sh
$ docker-compose up -d    # Run docker image if not already running
$ docker-compose run --rm app npm run test
$ docker-compose run --rm app npm run test:backend
```

## No-Docker Setup

If it is not possible to use docker, you can try setting up project locally.

Requirements:
- Node.js, version 7.6 +
- Postgresql

If you want to run the project without using docker you will need a postgresql
database running.

The application uses all defaults (i.e. database, host, user). If you want to
change these properties you can set `PG` environment variables
(https://www.postgresql.org/docs/9.1/static/libpq-envars.html)

Run the migration file in `/sql` directory to create the table required by the
application:

```sh
$ psql -f sql/migration-001.sql
```

Install all the application dependencies, build the front-end app and run
the server with the following commands:

```sh
$ npm install
$ npm build
$ npm run backend
```

It should then also be possible to run test suites:

```sh
$ npm run test
$ npm run test:backend
```

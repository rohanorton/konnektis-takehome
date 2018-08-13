const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const static = require('koa-static');
const logger = require('koa-logger');
const path = require('path');

const contactsController = require('./controllers/contacts');

// Routes
const api = new Router({prefix: '/api'});
api.get('/contacts', ctx => contactsController.index(ctx));
api.post('/contacts', ctx => contactsController.post(ctx));
api.get('/contacts/:id', ctx => contactsController.get(ctx));
api.put('/contacts/:id', ctx => contactsController.put(ctx));
api.delete('/contacts/:id', ctx => contactsController.delete(ctx));

// Create Application
const app = new Koa();

// Register Middleware
app.use(logger());
app.use(bodyParser());
app.use(api.routes());
app.use(static(path.resolve(__dirname, '../build')));

app.listen(3001);

const koaRouter = require('koa-router');
const homeRoute = require('./home');

const router = new koaRouter();

homeRoute(router);

module.exports = router;
const { Router } = require('express');

const userRouter = require('./users.routes');
const notesRouter = require('./notes.routes');

const routes = Router();
routes.use('/users', userRouter);
routes.use('/notes', notesRouter);

module.exports = routes;

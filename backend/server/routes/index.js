'use strict'

/**
 * Module Dependencies
 */
const _      = require('lodash'),
      errors = require('restify-errors'),
      sibylRouter = require('./sibyl.router')
      // todoRouter = require('./todo.router')

sibylRouter.applyRoutes(server, '/api/sibyls');
//todoRouter.applyRoutes(server, '/api/todo');
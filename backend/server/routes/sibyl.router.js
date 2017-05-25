'use strict'

/**
 * Module Dependencies
 */
const _      = require('lodash'),
      errors = require('restify-errors'),
      Router = require('restify-router').Router

var sibylRouter = new  Router();

/**
 * Model Schema
 */
const Sibyl = require('../models/sibyl')

/**
 * LIST
 */
sibylRouter.get('/', function(req, res, next) {

    Sibyl.apiQuery(req.params, function(err, sibyls) {

        if (err) {
            log.error(err)
            return next(new errors.InvalidContentError(err.errors.name.message))
        }

        res.send(200, sibyls)
        next()
    })

})

/**
 * POST
 */
sibylRouter.post('/', function(req, res, next) {

    let data = req.body || {}
    
    let sibyl = new Sibyl(data)
    sibyl.save(function(err) {

        if (err) {
            log.error(err)
            return next(new errors.InternalError(err.message))
            next()
        }

        res.send(201)
        next()

    })

})



/**
 * GET
 */
sibylRouter.get('/:id', function(req, res, next) {

    Sibyl.findOne({ _id: req.params.id }, function(err, sibyl) {

        if (err) {
            log.error(err)
            return next(new errors.InvalidContentError(err.errors.name.message))
        }

        res.send(200, sibyl)
        next()

    })

})

/**
 * UPDATE
 */
sibylRouter.put('/:id', function(req, res, next) {

    let data = req.body || {}

    if (!data._id) {
		_.extend(data, {
			_id: req.params.id
		})
	}

    Sibyl.findOne({ _id: req.params.id }, function(err, sibyl) {

		if (err) {
			log.error(err)
			return next(new errors.InvalidContentError(err.errors.name.message))
		} else if (!sibyl) {
			return next(new errors.ResourceNotFoundError('Böyle bir yorumcu bulunamadı.'))
		}

		Sibyl.update({ _id: data._id }, data, function(err) {


			if (err) {
				log.error(err)
				return next(new errors.InvalidContentError(err.errors.name.message))
			}


			res.send(200, data)
            next()

		})

	})

})

/**
 * DELETE
 */
sibylRouter.del('/:id', function(req, res, next) {

    Sibyl.remove({ _id: req.params.id }, function(err) {

		if (err) {
			log.error(err)
			return next(new errors.InvalidContentError(err.errors.name.message))
		}

		res.send(204)
        next()

	})

})

module.exports = sibylRouter
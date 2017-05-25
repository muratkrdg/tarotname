'use strict'

const mongoose = require('mongoose'),
      mongooseApiQuery = require('mongoose-api-query'),
      createdModified = require('mongoose-createdmodified').createdModifiedPlugin

const ServiceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    }
}, { minimize: false });


ServiceSchema.plugin(mongooseApiQuery)
ServiceSchema.plugin(createdModified, { index: true })

const Service = mongoose.model('Service', ServiceSchema)
module.exports = Service

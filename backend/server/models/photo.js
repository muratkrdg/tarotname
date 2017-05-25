'use strict'

const mongoose = require('mongoose'),
      mongooseApiQuery = require('mongoose-api-query'),
      createdModified = require('mongoose-createdmodified').createdModifiedPlugin

const PhotoSchema = new mongoose.Schema({
    path: {
        type: String,
        required: true
    },
    extention: {
        type: String,
        enum : ['JPG', 'PNG'],
        default: 'JPG'
    },
    size: {
        type: Number
    }
}, { minimize: false });


PhotoSchema.plugin(mongooseApiQuery)
PhotoSchema.plugin(createdModified, { index: true })

const Photo = mongoose.model('Photo', PhotoSchema)
module.exports = Photo
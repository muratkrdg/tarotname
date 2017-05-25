'use strict'

const mongoose = require('mongoose'),
      mongooseApiQuery = require('mongoose-api-query'),
      createdModified = require('mongoose-createdmodified').createdModifiedPlugin

const SibylCommentSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    sibyl: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Sibyl'
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Customer'
    }
}, { minimize: false });


SibylCommentSchema.plugin(mongooseApiQuery)
SibylCommentSchema.plugin(createdModified, { index: true })

const SibylComment = mongoose.model('SibylComment', SibylCommentSchema)
module.exports = SibylComment
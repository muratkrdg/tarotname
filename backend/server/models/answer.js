'use strict'

const mongoose = require('mongoose'),
      mongooseApiQuery = require('mongoose-api-query'),
      createdModified = require('mongoose-createdmodified').createdModifiedPlugin

const AnswerSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    }
    questionId: {type: mongoose.Schema.Types.ObjectId, ref: 'Question'},
}, { minimize: false });


AnswerSchema.plugin(mongooseApiQuery)
AnswerSchema.plugin(createdModified, { index: true })

const Answer = mongoose.model('Answer', AnswerSchema)
module.exports = Answer
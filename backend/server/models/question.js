'use strict'

const mongoose = require('mongoose'),
      mongooseApiQuery = require('mongoose-api-query'),
      createdModified = require('mongoose-createdmodified').createdModifiedPlugin

const QuestionSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    detail: {
        type: String
    },
    time: {
        type: String,
        enum : ['NONE', 'DAY', 'NIGHT'],
        default: 'NONE'
    },
    customerId: {type: mongoose.Schema.Types.ObjectId, ref: 'Customer'},
    sibylId: {type: mongoose.Schema.Types.ObjectId, ref: 'Sibyl'},
    serviceId: {type: mongoose.Schema.Types.ObjectId, ref: 'Service'},
    answerId: {type: mongoose.Schema.Types.ObjectId, ref: 'Answer'},
    photos: [{type: mongoose.Schema.Types.ObjectId, ref: 'Photo'}],
    tarots:[{ type: String }],
    locked: {
        type: Boolean,
        default: false
    },
    lockedBy: {type: mongoose.Schema.Types.ObjectId, ref: 'Sibyl'}
}, { minimize: false });


QuestionSchema.plugin(mongooseApiQuery)
QuestionSchema.plugin(createdModified, { index: true })

const Question = mongoose.model('Question', QuestionSchema)
module.exports = Question
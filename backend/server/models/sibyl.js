'use strict'

const mongoose = require('mongoose'),
      mongooseApiQuery = require('mongoose-api-query'),
      createdModified = require('mongoose-createdmodified').createdModifiedPlugin

const SibylSchema = new mongoose.Schema({
    nickname: {
        type: String,
        required: true,
        trim: true,
    },
    name: {
        type: String,
        trim: true
    },
    surname: {
        type: String,
        trim: true
    },
    slug: { 
        type: String, 
        index: { unique: true } 
    },
    photoUrl: {
        type: String
    },
    stars: {
        type: Number
    },
    tagline: {
        type: String
    },
    description: {
        type: String
    },
    comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'SibylComment'}],
    answers: [{type: mongoose.Schema.Types.ObjectId, ref: 'Answer'}],
    services: [{type: mongoose.Schema.Types.ObjectId, ref: 'Service'}],
    roles: [{type: mongoose.Schema.Types.ObjectId, ref: 'Role'}],
}, { minimize: false });


SibylSchema.plugin(mongooseApiQuery)
SibylSchema.plugin(createdModified, { index: true })

const Sibyl = mongoose.model('Sibyl', SibylSchema)
module.exports = Sibyl

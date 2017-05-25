'use strict'

const mongoose = require('mongoose'),
      mongooseApiQuery = require('mongoose-api-query'),
      createdModified = require('mongoose-createdmodified').createdModifiedPlugin

const CustomerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    coupleName: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    sex: {
        type: String,
        enum : ['NONE','MALE', 'FEMALE'],
        default: 'NONE'
    },
    birthPlace: {
        type: String
    },
    birthDate: {
        type: Date,
        default: Date.now
    },
    birthHour: {
        type: Number
    },
    relationStatus: {
        type: String,
        enum : ['NONE', 'SINGLE', 'COUPLE', 'COMPLEX', 'MARRIED', 'DIVORCED', 'SEPERATED'],
        default: 'NONE'
    },
    ,
    coupleStatus: {
        type: String,
        enum : ['NONE', 'SINGLE', 'COUPLE', 'COMPLEX', 'MARRIED', 'DIVORCED', 'SEPERATED'],
        default: 'NONE'
    }, 
    questions: [{type: mongoose.Schema.Types.ObjectId, ref: 'Question'}]
}, { minimize: false });


CustomerSchema.plugin(mongooseApiQuery)
CustomerSchema.plugin(createdModified, { index: true })

const Customer = mongoose.model('Customer', CustomerSchema)
module.exports = Customer

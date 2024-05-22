const mongoose = require('mongoose');

const datasetSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Education_Qualification: {
        type: String,
        required: true,
        enum : ['Undergraduate', 'Postgraduate', 'Doctrate']
    },
    Gender: {
        type: String,
        required: true,
        enum : ['Male', 'Female']
    },
    Community: {
        type: String,
        required: true,
        enum: ['General', 'OBC', 'SC/ST', 'Minority']
    },
    Religion: {
        type: String,
        required: true,
        enum: ['Hindu', 'Muslim', 'Chirstian', 'Others']
    },
    Exservice_men : {
        type: String,
        enum: ['Yes', 'No']
    },
    Disability: {
        type: String,
        enum: ['Yes', 'No']
    },
    Sports: {
        type: String,
        enum: ['Yes', 'No']
    },
    Annual_Percentage: {
        type: String
    },
    Income: {
        type: String
    },
    India: {
        type: String,
        enum: ['Out', 'In']
    },
    Outcome: {
        type: Number,
    },
    Link: {
        type: String
    }
})

const Dataset = mongoose.model('Dataset', datasetSchema);

module.exports = Dataset;
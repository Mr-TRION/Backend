const mongoose = require('mongoose');
const Dataset = require('./models/datasetModel');

mongoose.connect('mongodb+srv://Prakash:qiPHeJ1OEhvfNxIN@cluster0.bn2zb.mongodb.net/Dataset?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })


const seedData = [
    {
        "Name": "A",
        "Education_Qualification" : "Undergraduate",
        "Gender" : "Male",
        "Community" : "General",
        "Religion" : "Hindu",
        "Exservice_men": "Yes",
        "Disability" : "No",
        "Sports" : "Yes",
        "Annual_Percentage" : "90-100",
        "Income" : "Upto 1.5L",
        "India" : "In",
        "Outcome" : "0"
    },
    {
        "Name": "Ab",
        "Education_Qualification" : "Undergraduate",
        "Gender" : "Male",
        "Community" : "General",
        "Religion" : "Hindu",
        "Exservice_men": "Yes",
        "Disability" : "No",
        "Sports" : "Yes",
        "Annual_Percentage" : "90-100",
        "Income" : "Upto 1.5L",
        "India" : "In",
        "Outcome" : "0"
    },
    {
        "Name": "Abc",
        "Education_Qualification" : "Undergraduate",
        "Gender" : "Male",
        "Community" : "General",
        "Religion" : "Hindu",
        "Exservice_men": "Yes",
        "Disability" : "No",
        "Sports" : "Yes",
        "Annual_Percentage" : "60-70",
        "Income" : "3L to 6L",
        "India" : "In",
        "Outcome" : "0"
    },
    {
        "Name": "Abcd",
        "Education_Qualification" : "Doctrate",
        "Gender" : "Female",
        "Community" : "General",
        "Religion" : "Hindu",
        "Exservice_men": "Yes",
        "Disability" : "No",
        "Sports" : "Yes",
        "Annual_Percentage" : "80-90",
        "Income" : "Upto 1.5L",
        "India" : "In",
        "Outcome" : "0"
    },
    {
        "Name": "Abcde",
        "Education_Qualification" : "Postgraduate",
        "Gender" : "Male",
        "Community" : "General",
        "Religion" : "Hindu",
        "Exservice_men": "Yes",
        "Disability" : "No",
        "Sports" : "Yes",
        "Annual_Percentage" : "90-100",
        "Income" : "3L to 6L",
        "India" : "In",
        "Outcome" : "0"
    },
]

Dataset.insertMany(seedData).then(res => console.log(res)).catch(e => console.log(e));
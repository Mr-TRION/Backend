const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const Dataset = require('./models/datasetModel');

mongoose.connect('mongodb+srv://Prakash:qiPHeJ1OEhvfNxIN@cluster0.bn2zb.mongodb.net/Dataset?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })

const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3001', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))

app.get('/home', async (req, res) => {
    try {
        let size = 60;
        let data = await Dataset.find({}).limit(size).sort({created: -1});
        res.json(data);
    } catch (error) {
        console.error(error);
        return res.status(500).send(`Server error`);
    }
})

app.get('/fltr', async (req, res) => {
    const {educationLevel, communityKota, sport} = req.params;
    try {
        let size = 300;
        let data = await Dataset.find({}).limit(size).sort({created: -1});
        res.json(data);
    } catch (error) {
        console.error(error);
        return res.status(500).send(`Server error`);
    }
})


app.get('/filter/:educationLevel/:marks/:communityKota/:sport/:disablity/:income/:gender/:service', async (req, res) => {
    let {educationLevel, communityKota, sport, disablity, income, gender, service, marks} = req.params;
    try {
        if(communityKota == "SC-ST") communityKota = "SC/ST";
        let size = 30;
        let data = await Dataset.find({"Education_Qualification" : `${educationLevel}` , "Annual_Percentage" : `${marks}`,"Community": `${communityKota}`, "Sports": `${sport}`,
                                        "Disability": `${disablity}`, "Income": `${income}`, "Gender": `${gender}`}).limit(size).sort({created: -1});
        res.json(data);
    } catch (error) {
        console.error(error);
        return res.status(500).send(`Server error`);
    }
})

app.get('/findId/:_id', async (req, res) => {
    const {_id} = req.params;
    try {
        let data = await Dataset.findById(_id);
        res.json(data);
    } catch (error) {
        console.error(error);
        return res.status(500).send(`Server error`);
    }
})


app.get('/data', (req, res) => {
    res.json({
        "Author" : "Prakash",
        "Status" : "Active"
    })
})

app.listen(3000, () => {
    console.log("APP IS LISTENING ON PORT 3000!")
})

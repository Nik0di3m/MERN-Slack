import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Pusher from 'Pusher';
import mongoData from './mongoData.js'
import { ApiKeys } from './apikey.js'
// app config
const app = express();
const port = process.env.PORT || 8000;



// middlewares
app.use(cors());
app.use(express.json());



// db config

const mongoURI = `mongodb+srv://Nikodem:${ApiKeys}@cluster0.pv5tq.mongodb.net/SlackDataBase?retryWrites=true&w=majority`



mongoose.connect(mongoURI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

mongoose.connection.once('open', () => {
    console.log('Db connected')


})

// api router
app.get('/', (req, res) => res.status(200).send("Welcome from api🚀🚀"))


app.post('/new/channel', (req, res) => {

    const dbData = req.body

    mongoData.create(dbData, (err, db) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(db)
        }
    })
})


app.post('/new/message', (req, res) => {
    const message = req.body
    const id = req.query.id

    mongoData.update(
        { _id: id },
        { $push: { conversation: message } },
        (err, db) => {
            if (err) {
                res.status(500).send(err)
            } else {
                res.status(201).send(db)
            }
        }
    )

})


app.get('/get/channelList', (req, res) => {
    mongoData.find((err, db) => {
        if (err) {
            res.status(500).send(err)
        } else {
            let channel = []

            db.map((item) => {
                const channelInfo = {
                    id: item._id,
                    name: items.channelName
                }

                channel.push(channelInfo)
            })
            res.status(200).send(channel)
        }
    })
})

app.get('/get/conversation', (req, res) => {
    const id = req.query.id

    mongoData.find({ _id: id }, (err, db) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(db)
        }
    })
})

// listeners
app.listen(port, () => console.log(`listening on localhost:${port}`))
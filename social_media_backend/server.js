/* eslint-disable no-undef */
const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

const db = require('./models')
const Role = db.role

var corsOptions = {
    origin: 'http://localhost:8081'
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

db.mongoose
    .connect(`mongodb+srv://tvargas:${process.env.SECRET_KEY}@users.r1sfo.mongodb.net/social_media_db?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('Successfully connected to MongoDB.')
        initial()
    })
    .catch(err => {
        console.error('Connection error', err)
        process.exit()
    })

//Routes
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the application.'})
})

require('./routes/auth.routes')(app)
require('./routes/user.routes')(app)

function initial() {
    Role.estimatedDocumentCount((err, count) => {
        if(!err && count === 0) {
            new Role({
                name: 'user'
            }).save(err => {
                if(err) {
                    console.log('error', err)
                }
                console.log('added "user" to roles collection')
            })
            new Role({
                name: 'moderator'
            }).save(err => {
                if(err) {
                    console.log('error', err)
                }
                console.log('added "moderator" to roles collection')
            })
            new Role({
                name: 'admin'
            }).save(err => {
                if(err) {
                    console.log('error', err)
                }
                console.log('added "admin" to roles collection')
            })
        }
    })
}

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})
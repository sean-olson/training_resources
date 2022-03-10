const express = require('express');
const { graphqlHTTP } = require('express-graphql')
const mongoose = require('mongoose')
const cors = require('cors')
const schema = require('./server/schema/schema')

const app = express()
const api_port = process.env.api_port || 4000

app.use(cors())

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema
}))

mongoose.connect(
    `mongodb+srv://${process.env.mongo_user_name}:${process.env.mongo_user_password}@graphql-demo-cluster.m9dwa.mongodb.net/${process.env.mongo_database}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => {
    app.listen(api_port, () => {
        console.log(`listening for requests on port ${api_port}`)
    }) 
}).catch((err) => {
    console.log(err);
})


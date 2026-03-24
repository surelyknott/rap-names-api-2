const express = require('express')
const app = express() // wherever we see app, we know we're using express
const cors = require('cors')
const PORT = process.env.PORT || 8000

app.use(cors())
app.use(express.static(__dirname))

const rappers = {
    'eminem':{
        'age': 53, 
        'birthName': 'Marshall Bruce Mathers III',
        'birthLocation': 'St. Joseph, Missouri, U.S.'
    },
    'nas':{
        'age': 52, 
        'birthName': 'Nasir bin Olu Dara Jones',
        'birthLocation': 'New York City, U.S.'
    },
    'big bob':{
        'age': 72, 
        'birthName': 'Robert Hellyuh-Got-Got',
        'birthLocation': 'Birmingham, U.K.'
    }
}

// app.get('/', (request, response) => {
//     response.sendFile(__dirname + '/index.html')
// }) 

app.get('/api/:names', (request, response) => { // the colon let's us know it's a query parameter
    const rapperName = request.params.names.toLowerCase()
    if(rappers[rapperName]){ // bracket notation still allows us to look at the object and use it's key
        response.json(rappers[rapperName])
    }
    else{
        response.json(rappers['big bob'])
    }
})

app.use((req, res) => {
  res.status(404).json({
    error: "Endpoint not found"
  })
})

app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}! You better go catch it!`)
})
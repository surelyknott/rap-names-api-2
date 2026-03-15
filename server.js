const express = require('express')
const app = express() // wherever we see app, we know we're using express
const PORT = 8000

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
        'birthName': 'Robert Hellyuh',
        'birthLocation': 'Birmingham, U.K.'
    },
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
}) 

app.get('/api/:rapperName', (request, response) => { // the colon let's us know it's a query parameter
    const rappersName = request.params.rapperName.toLowerCase()
    if(rappers[rappersName]){ // bracket notation still allows us to look at the object and use it's key
        response.json(rappers[rappersName])
    }
    else{
        response.json(['big bob'])
    }
    // response.json(rappers)
}) 

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on port ${PORT}! You better go catch it!`)
})
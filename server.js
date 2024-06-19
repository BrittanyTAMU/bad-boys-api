const express = require('express')
const app = express()
// const cors = require('cors')
const PORT = 8000

// app.use(cors())

let bad = {
    'Bad Boys': {
        'Date': 1995,
        'Director': 'Michael Bay',
    },
    'Bad Boys II': {
        'Date': 2003,
        'Director': 'Michael Bay',
    },
    'Bad Boys for Life': {
        'Date': 2020,
        'Director': 'Adil & Bilall',
    },
    'Bad Boys Ride or Die': {
        'Date': 2024,
        'Director': 'Adil & Bilall',
    },
    'unknown':{
        'Date': 0,
        'Director': 'DOES NOT EXIST, Jackass',
    }
};

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const movieName = request.params.name
    if(bad[movieName]){
        response.json(bad[movieName])
    }else{
        response.json(bad['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
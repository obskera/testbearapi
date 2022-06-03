const { response } = require('express')
const express = require('express')
const app = express()

const PORT = 8000

const bears = {
   'ice bear' : {
       'name': 'Ice Bear',
       'type': 'Polar Bear'
   },
   'grizz' : {
       'name': 'Grizz',
       'type': 'Grizzly Bear'
   },
   'panda' : {
       'name': 'Panda',
       'type': 'Great Panda'
   },
   'unknown' : {
       'name': 'Unknown',
       'type': 'Unknown'
   }

}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res) => {
    const bearName = req.params.name.toLowerCase()
    console.log(bearName)
    if (bears[bearName]) {
        res.json(bears[bearName])
    } else {
        console.log('Unknown request, returned default')
        res.json(bears['unknown'])
    }
})

app.listen(PORT, () => {
    console.log(`The server is now running on ${PORT}, you better go catch it!`)
})
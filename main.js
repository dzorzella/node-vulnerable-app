const express = require('express')
const app = express()
const port = 3000

app.get('/:name', (req, res) => {
    input = req.params['name']
    res.header('Content-type: text/html')
    res.send('<html><body>Hello ' + input + '</body></html>')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
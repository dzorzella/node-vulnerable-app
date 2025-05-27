const express = require('express')
const app = express()
const port = 3000

app.get('/:name', (req, res) => {
    input = req.params['name']
    console.log(input)
    res.send('<html><body>Hello ' + input + '</body></html>\n')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
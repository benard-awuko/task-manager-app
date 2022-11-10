let express = require('express');
let app = express();
let tasks = require('./routes/tasks')

//Middleware
app.use(express.json())

app.get('/hello',(req, res)=>{
    res.send('Hello World')
})

app.use('/api/v1/tasks', tasks)


let port = 3000
app.listen(port, ()=>{
    console.log(`Listening on port ${port}...`)
})

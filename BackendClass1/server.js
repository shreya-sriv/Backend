const express = require('express');
const app = express();
app.listen(3000, () => {
    console.log("Server Started at port no. 3000");
});

app.get('/', (request, response) => {
    response.send("hello..how are you")
});

app.post('/api/cars', (request,response) => {
    const {name,brand} = request.body;
    console.log(name);
    console.log(brand);
    response.send("car Submitted Sucessfully");
})

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myDatabase', {
    useNewurlParser:true,
    useUnifiedTopology:true
})
.then(() => {console.log("connection success")})
.catch( (error) => {console.log("received an error")} );
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const port = 3000
const app = express();

app.use(cors());
app.use(bodyParser.json());


app.all('*',function(req, res, next)
{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methhods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(json());

//data storage
let data = [
    {'id': 1, 'title': 'Messi', 'status': 'active'},
    {'id': 2, 'title': 'Ney', 'status': 'active'},
    {'id': 3, 'title': 'Zidane', 'status': 'inactive'}
];

app.get('/data', (req, res)=>{
    res.json(data);
});

app.get('/data/:id', (req, res)=>{
    res.json(data);
});

app.post('/data', (req, res)=>{
    const {title, status} = req.body;

    if(!title|| !status){
        return(res.status(400).json({error: 'Title and status are needed'}));
    }

        newData = {
        id: String(data.length + 1),
        title,
        status
    }
});


app.delete('/data/:id', (req, res)=>{
    const dataId = req.params.id;

    const dataIndex = data.findIndex(data => data.id === dataId);

    if (dataIndex === -1){
        res.status(404).json({error: 'Data not found'});
    }

    data.splice(dataIndex, 1);{
        res.status(200).json({error: 'Data deleted succesfully'})
    }
})

app.listen(port, function(){
console.log('Your server is running', port);
});

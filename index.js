const app = require("express")();
const List = require("./models/List");
const bodyParser = require("body-parser");
app.use(bodyParser.json())


app.post('/resource', (req,res)=>{
    res.send("This is a post route")
})

app.get('/lists', (req, res)=>{
    List.find({}).then(lists=>{
        res.json(lists);
    })
})

app.get('/lists/:id', (req, res)=>{
    List.findById(req.params.id).then(list=>{
        res.json(list);
    })
})

app.get('/list/name/:name', (req, res)=>{
    List.find({name: req.params.name}).then(lists=>{
        res.json(lists);
    })
})

app.post('/list', (req, res)=>{
    console.log(req.body);
    List.create(req.body).then(list=>{
        console.log('Successfully created '+req.body.name)
        res.json(list);
    })
})

app.post('/list/:id/item', (req, res)=>{
    console.log(req.body);
    List.findByIdAndUpdate(
        req.params.id,
        {$push: {items: req.body}},
        {new: true}
    ).then(list=>{
        res.json(list);
    })
})

app.listen(4000, ()=>{
    console.log("I'm on 4000")
})
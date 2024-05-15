const express = require('express');
const app = express();
const { createTodo, updateTodo } =  require('./types.js');
const { todoModel } =  require('./models/todoSchema.js');
const cors = require('cors');


app.use(express.json());
app.use(cors());

const PORT = 3000;


app.get('/',(req,res)=>{
    res.send("hello")
})

app.get('/todo',async (req,res)=>{
    const todos = await todoModel.find();
    res.json({
        todos
    })
})

app.post('/todo',async(req,res)=>{
    const createPlayload = req.body;
    const parsedPayLoad = createTodo.safeParse(createPlayload);
    console.log(parsedPayLoad);
    if(!parsedPayLoad.success){
        res.status(411).json({
            msg:'you sent the wrong inputs'
        })
        return;
    }
    const {title,description} = createPlayload;
   let createdTodo =  await todoModel.create({
        title,
        description 
    })

    res.json({
        msg : `${createdTodo.title} created successfully`
    })


})

app.put('/completed', async (req, res) => { 
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: 'To do with such id not found'
        });
        return;
    }
    const id = req.body.id;
    const foundTodo = await todoModel.findOne({ _id: id });
    foundTodo.completed = true;
    await foundTodo.save();

    res.status(200).json({
        msg: 'Todo marked as completed'
    });
});



app.listen(PORT,(req,res)=>{
    console.log(`app listening at port ${PORT}`);
})
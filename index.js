const  express = require('express');
const ItemRouter = require('./Routes/Itemrouter')

PORT = 5000

const app = express()
app.use(express.json())
app.use('/item',ItemRouter)


app.get('/', (req, res) => {
    res.send({
        message:"Welcome to express"
    });
    
});


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});



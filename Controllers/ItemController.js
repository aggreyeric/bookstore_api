const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()






exports.ItemCreate = async (req, res) => {
 const {name, description, catID}   = req.body
 const item = await prisma.item.create({
     data:{
         name,
         description,
         categoryID:catID
     }
 })

 if(!item){
     res.status(400).send({
         error: "Item wasnt created"
     });
 }

  res.status(201).send(item);
};



exports.AllItems = async (req, res) =>{

    const allitems = await prisma.item.findMany()
     
    if(!allitems){
        res.status(400).send({
            error: "Something is wrong"
        });
    }

    res.status(200).send(allitems);

}
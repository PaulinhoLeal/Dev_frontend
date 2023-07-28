const express = require("express")
const { default: mongoose } = require("mongoose")
const app = express()
const port = 8050
const connectionString = "mongodb+srv://admin:admin123@appdatabase.3r1zzwb.mongodb.net/ "
const Produto = require("./models/produto")
app.use(express.json)


app.get("/listar-produtos", async (req,res)=>{
    try {
        let produtos=await Produto.find()
        return res.status(200).json(produtos)
        
    } catch (error) {
        return res.status(500).json(error)
    }
})

app.post("/adiconar-produtos",async (req,res)=>{
    let {nome,descricao,img,valor,categoria}=req.body

    let produto = {
        nome,
        descricao,
        img,
        valor,
        categoria
    }
    try {
        await Produto.create(produto)
        return res.status(201).json({message:"Produto cadastrado com sucesso!"})
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
})

mongoose.connect(connectionString,{
    dbName: 'Loja_Produtos'

}).then(()=>{
    console.log("MongoDB Up!")
    console.log(`http://localhost:${port}`)
    app.listen(port)
}).catch((error)=>{
    console.log(error)
})

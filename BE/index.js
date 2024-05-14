import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

const app = express()
const port = 3000

app.use(express.json())
app.use(cors())

const productSchema = new mongoose.Schema({
    title: String,
    image:String,
    price:Number
  });

const ProductsModel = mongoose.model('products', productSchema);


app.get('/myapp', async(req, res) => {

    const products = await ProductsModel.find();
  res.send(products)
})

app.get('/myapp/:id', async(req, res) => {
    const {id} = req.params

    const products = await ProductsModel.findById(id);
  res.send(products)
})


app.post('/myapp', async(req, res) => {
    const obj = req.body
    const product = new ProductsModel(obj);

    await product.save();
    res.send(product)
  })


  app.put('/myapp/:id', async(req, res) => {
    const {id} = req.params
    const obj = req.body

    const product = await ProductsModel.findByIdAndUpdate(id,obj);

    res.send(product)
  })
  app.delete('/myapp/:id', async(req, res) => {
    const {id} = req.params

    const product = await ProductsModel.findByIdAndDelete(id);
    res.send(product)
  })

  mongoose.connect('mongodb+srv://bd813qhzt:auV2YDhd4BgCCDMz@yusif.4wzanzc.mongodb.net/')
  .then(() => console.log('Connected!'));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
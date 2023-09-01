const { products } = require('../../database/models')

const postProducts = async (req, res) => {
    try {
        const data = await products.create({
          ...req.body,
        })
        res.send(data)
    } catch (error) {
        console.log('error', error)
    }
}
const getProducts = async (req, res) => {
    try {
        console.log('getProducts')
        const data = await products.findAll({
            where: {
                activo: 1,
            },
        })
        res.send(data)
    } catch (error) {
        console.log('error', error)
    }
}
const putProducts = async (req, res) => {
    try {
      //console.log("req.body",req.body)
      const {name,price,idTypeTours,description}=req.body
      const body ={
        name,
        description,
        idTypeTours,
        price
      }
        const data = await products.update(
            body,{
                where: {
                    id: req.body.id,
                },
            })
        res.send(data)
    } catch (error) {
        console.log('error', error)
    }
}

module.exports = {
    postProducts,
    getProducts,
    putProducts,
}

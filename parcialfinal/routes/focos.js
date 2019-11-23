
const  express = require ('express')
const router = express.Router()
const Foco = require('../models/foco')

//get all
router.get('/', async (req, res ) => {  // si le pongo un async, await se tarda en responder
    try{
        const focos =  await Foco.find()
        res.json(focos)
    }catch(err){
        res.status(500).json({ message: err.message})
    }
})

// get 1
router.get('/:id', getFoco, (req, res )=>{
    res.send(res.focos)
    res.render('focos')  
})

//create
router.post('/', async(req, res )=>{
    const foco = new Foco({
        tipo: req.body.tipo,
        consumo: req.body.consumo,
        eficacia: req.body.eficacia,
        marca: req.body.eficacia
    })
    try{
        const newFoco = await foco.save()
        res.status(201).json(newFoco)
    } catch(err){
        res.status(400).json({message: err.message})
    } res.redirect('/foco')
})

//update
router.patch('/:id', (req, res )=>{
    if(req.body.tipo != null){
        res.foco.tipo = req.body.tipo
    }
    if(req.body.consumo != null){
        res.foco.consumo = req.body.consumo
    }
    if(req.body.eficacia != null){
        res.foco.eficacia = req.body.eficacia
    }
    if(req.body.marca != null){
        res.foco.marca = req.body.marca
    }
})

//delet
router.delete('/:id', getFoco, async(req, res )=>{
    try{
        await res.foco.remove()
        res.json({message: "deleted"})
    }catch(err){
        res.status(500).json({message: err.message})
    }
    res.redirect('/')
})

function getFoco(res, req, next){
    let foco
    try{
        foco= Foco.find(req.params.tipo)
        if(foco == null){
            return res.status(404).json({
                message: " No se encontro ningun resultado"
            })
        }
     }catch(err){
        return res.status(500).json({
            message: err.message
        })
     }
     res.foco = foco 
     next()
}

module.exports=router




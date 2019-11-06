const Register = require('../models/Register');

const insert =(req, res) =>{
    let register = new Register(req.body);
    register.save((err) => {
        if(err) return res.status(500).json({
            message: 'Algo salió mal al momento de insertar'
        })
        res.status(200).json({
            message: 'Insercion exitosa'
        })
    })
};

const update = (req, res)=>{
    let register = req.body

    if(!register._id){
        return res.status(400).json({
            message: 'El campo id es obligatorio'
        })
    }
    Register.update({_id: register._id}, register)
    .then (value=>{
        res.status(200).json({
            message: 'Operacion de modificacion exitosa'
        })
    })
    .catch(err=>{
        res.status(500).json({
            message: 'Algo salió mal al momento de modificar'
        })
    })
}

const deleteById = (req, res)=>{
    let register = req.body
    if(!register._id){
        return res.status(400).json({
            message: 'El campo id es obligatorio'
        })
    }
    Register.deleteOne({_id:register._id})
    .then (value=>{
        res.status(200).json({
            message: 'Operacion de eliminar exitosa'
        })
    })
    .catch(err=>{
        res.status(500).json({
            message: 'Algo salió mal al momento de eliminar'
        })
    })
}

const getAll = (req, res) =>{
    Register.find((err, registers)=>{
        if(err) return res.status(500).json({
            message:'algo salio mal al momento de mostrar'
        })
        if(registers){
            res.status(200).json(registers)
        }
        else{
            res.status(404).json({
                message:'no hay ningun registro'
            })
        }
    })
}

const getOneById=(req, res)=>{
    let id=req.params._id
    Register.findById(id, (err, register)=>{
        if(err) return res.status(500).json({
            message:'algo salio mal al momento de registrar'
        })
        if(registers){
            res.status(200).json(register)
        }
        else{
            res.status(404).json({
                message:'no se encontró el registro solicitado'
            })
        }

    })

}

module.exports ={
    insert, 
    update,
    deleteById,
    getAll,
    getOneById
};
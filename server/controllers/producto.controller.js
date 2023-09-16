const { response } = require("express");
const Producto = require("../models/producto.model");


module.exports.crear_producto = (req, res) =>{
    const {nombre, precio, descripcion} = req.body;
    Producto.create({
        nombre,
        precio,
        descripcion
    })
    .then(producto => res.json(producto))
    .catch(err => res.json({message: "Hubo un error"+err}));
}

module.exports.ver_todos = (req,res) =>{
    Producto.find()
    .then(productos => res.json(productos))
    .catch(err => res.json({message: "Hubo un error"+err}))
}

module.exports.ver_uno = (req, res) =>{
    Producto.findOne({_id: req.params.id})
    .then(producto => res.json(producto))
    .catch(err => res.json({message: "Hubo un error"+err}))
}
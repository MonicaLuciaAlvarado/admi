const mongoose = require("mongoose");

const EsquemaProducto = new mongoose.Schema({
    nombre: String,
    precio: Number,
    descripcion: String
}, {timestamps: true, versionKey: false});

const Producto = mongoose.model("losProductos", EsquemaProducto);
module.exports=Producto;
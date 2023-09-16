const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/administar_productos", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Conectado con base de datos"))
    .catch(err => console.log("Error al conectarse con la base de datos", err));
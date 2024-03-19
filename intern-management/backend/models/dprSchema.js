const mongoose = require("mongoose");
const date=new Date(Date.now())
const dprSchema = new mongoose.Schema({

    name: {
        type: String
    },
    email: {
        type: String
    },

    date:{
        type:Date,
        default:Date.now()
    },

    dpr:{
        type: String
    }
   
});
const Dpr = new mongoose.model("dpr", dprSchema);


module.exports = Dpr;
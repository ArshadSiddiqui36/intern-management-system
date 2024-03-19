const mongoose = require("mongoose");

const leaveSchema = new mongoose.Schema({

    name: {
        type: String
    },
    paid:{
        type:Number,
         default:1
    },
    unpaid:{
        type:Number,
        
    },
    email: {
        type: String
    },
    designation: {
        type: String
    },
    admin: {
        type: String
    },
    start:{
        type:Date
    },
    end:{
        type:Date
    },
    status: {
        type: String
    },
    reason: {
        type: String
    }
   
});
const Leave = new mongoose.model("leave", leaveSchema);


module.exports = Leave;
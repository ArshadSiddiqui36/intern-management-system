const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// Schema...
const employeeSchema = new mongoose.Schema({

    name: {
        type: String,
        
    },
     photo:{
         type: String,
         default:"https://res.cloudinary.com/dyageorwt/image/upload/v1640272716/jxrzalcptrdvdptktvmr.png"
     }
    ,
    email: {
        type: String,
       
        unique: true
    },
    password: {
        type: String,
       
        
    },
    designation: {
        type: String,
       
    },
    role:{
        type:String
    },
    phone: {
        type: String,
        
    },
    address: {
        type: String,
        
    },
    dob:{
        type:Date,
        default:new Date("0000-00-00")
    }
   
});

employeeSchema.pre("save", async function(next) {

    if(this.isModified("password")){
      
        this.password = await bcrypt.hash(this.password, 10);
        
        this.confirmPassword = await bcrypt.hash(this.password, 10);
        
    }
    next();
});




const Employee = new mongoose.model("Employee", employeeSchema);


module.exports = Employee;
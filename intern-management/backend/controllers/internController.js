const Intern = require('../models/employeeSchema');
const Leave = require('../models/leaveSchema');
const bcrypt = require('bcryptjs')
const Dpr = require('../models/dprSchema');
const Attendence = require('../models/attendenceSchema');
const Task = require('../models/taskSchema');
const cloudinary=require("cloudinary").v2;
const Ann = require('../models/announcementSchema');
const Query = require('../models/querySchema');

cloudinary.config({ 
  cloud_name:process.env.cloud_name, 
  api_key: process.env.api_key, 
  api_secret:process.env.api_secret,
  secure: true
});

exports.adminAdd = async (req, res) => {
  try{
  const name = req.body.firstName + req.body.lastName;
  console.log(name)
  const { email, password } = req.body;
  const data = new Intern({ name, email, password, designation: "admin", role: "Admin", phone: 0, address: "" });
  const response = await data.save();
  console.log(response)
  res.status(200).json({ message: 'Admin Registered Successfully' })
  }
  catch(error){
    res.sendStatus(401)
  }
}
exports.internAdd = async (req, res) => {
  try{
    
  const {  email, password, designation, role, phone, address } = req.body;
  const name=req.body.firstName+" "+req.body.lastName
  const data = new Intern({ name, email, password, designation, role, phone, address });
  const response = await data.save();
  
  res.status(200).json({ message: 'Intern Registered Successfully' })
  }
  catch(error){
    res.sendStatus(401)
  }
}

exports.update = async (req, res) => {
  console.log(req.body)
  const {dob,designation, phone, address } = req.body.value
  const name=req.body.value.firstName+" "+req.body.value.lastName
  // console.log(req.body.reader)
  try {
   
    
   const photo =await  cloudinary.uploader.upload(req.body.reader)
  
    const result = await Intern.findOneAndUpdate({ email: req.token.email }, {

      $set: {
        name: name,
        designation: designation,
        phone: phone,
        address: address,
        photo:photo.url,
        dob:dob
      }
    }, {
      new: true,
      useFindAndModify: false
    })

     res.json("updated Sucessfully!")
    // }

  } catch (err) {
    console.log(err)
     res.sendStatus(401)
  }



}


exports.addLeave = async (req, res) => {
  try {

    const data = await Intern.findOne({ email: req.token.email});
    const name = data.name;
    const check= await Intern.find({}).sort({_id:1}).limit(1);
    console.log(check)
    console.log(req.body)
    const {  startdate, enddate, reason } = req.body;
         
    const addLeave = new Leave({ name:data.name, email:req.token.email, designation: data.designation, status: "pending", start:startdate, end:enddate,  reason });
    
    const response = await addLeave.save();
    res.send(response)
  }
  catch (error) {
    console.log(error)
    res.sendStatus(401)
  }

}
exports.getUpdateStatus = async (req, res) => {
  try{
    const result = await Leave.findOneAndUpdate({ email: "try@gmail.com" }, {

      $set: {
        status: req.body.status
        
      }
    }, {
      new: true,
      useFindAndModify: false
    })
    console.log(result)
      res.send({value:"true"})
  }
  catch(error){
   res.sendStatus(401)
  }
}

exports.getleavestatus = async (req, res) => {

  try {
    // console.log(req.headers)
    const data = await Leave.find({ email: req.token.email });
    console.log(data)
    res.send(data);
  } catch (e) {
    res.status(500).send(e);
  }
}
exports.getEmployee = async (req, res) => {
  try {
    const data = await Intern.findOne({ email: req.token.email });
    // console.log(data)
    res.send(data);
  } catch (e) {
    res.status(500).send(e);
  }
}
exports.getAllEmployee = async (req, res) => {
  try {
    const data = await Intern.find();
    console.log(data)
    res.send(data);
  } catch (e) {
    res.staus(500).send(e);
  }
}
exports.getadminleave = async (req, res) => {

  try {
    console.log("h")

    const data = await Leave.find();
    console.log(data)
    res.send(data);
  } catch (e) {
    res.staus(500).send(e);
  }
}

exports.addDpr = async (req, res) => {
  try {
    const data = await Intern.findOne({ email: req.token.email });
    // const { dpr } = req.body;
    const date=new Date(Date.now()).getMonth()
    console.log(date)
    const dprData = new Dpr({ name:data.name, email:data.email, dpr:req.body.message });
    await dprData.save();
    res.status(200).json({ message: 'Created Dpr Successfully' })
  } catch (error) {
    console.log(error)
    res.status(500).send(error);
  }
}
exports.getdpr = async (req, res) => {

  try {
    // console.log(req.headers)
    const data = await Dpr.find();
  
    // data=[ { name: 'Lee', age: 21 },
    // { name: 'Ajay', age: 20 },
    // { name: 'Jane', age: 20 }]
    const m=data.reduce((acc, obj) => {
      value=obj.date
      const key = new Date(value).getFullYear()+"-" +new Date(value).getMonth() + "-" + new Date(value).getDate()  
  
      if (!acc[key]) {
         acc[key] = [];
      }
      // Add object to list for given key's value
      acc[key].push(obj);
      return acc;
   }, {});
   console.log(m)
    const ab=Object.entries(m)
    console.log(ab)
    for(let i in m){
    // i.forEach(element => {
      
      console.log(m[i])
    }
    console.log(data)
    res.send(ab);
  } catch (e) {
    res.staus(500).send(e);
  }
}
exports.addAttendence = async (req, res) => {
  try {
   
    const data = await Intern.findOne({ email: req.token.email })
    console.log(data)
    const { morning, evening } = req.body;
    const group1 = req.body.group1;
    console.log(group1)
    if(group1=="value1") {
      const attendenceData = new Attendence({ name: data.name, email: data.email, designation: data.designation,morning:Date.now(), evening:null})  
      const a =await attendenceData.save(); 
      const b=new Date(a.morning).getHours()
      const c=new Date(a.morning).getMinutes()
      console.log("timing")
      console.log(b+":"+c);
    } else if(group1=="value2") {
      const j=await Attendence.findOne({ email: req.token.email, morning: new Date(2021-12-26)})
     console.log(j)
     console.log(new Date("2000-02-01"))
      firstdate=new Date(new Date(Date.now()).getFullYear() +"-"+(new Date(Date.now()).getMonth()+1)+"-"+(new Date(Date.now()).getDate()+1));
       seconddate=new Date(new Date(Date.now()).getFullYear() +"-"+(new Date(Date.now()).getMonth()+1)+"-"+(new Date(Date.now()).getDate()));
      console.log(firstdate)
      const result = await Attendence.findOneAndUpdate({ email: req.token.email, morning:{ $lte: firstdate,$gte:seconddate}}, {

        $set: {
          evening:Date.now()
        }
      }, {
        new: true,
        useFindAndModify: false
      })
    }
    else{
      return res.sendStatus(401)
    }
    res.status(200).json({ message: "Attendence applied Sucesfully" })
  } catch (error) {
    res.status(500).send(error);
  }

}
exports.getgraphattendencestatus = async (req, res) => {
 try{

 }
 catch(error){
   
 }
}

exports.getattendencestatus = async (req, res) => {

  try {
    console.log("gggggg")
    const data = await Attendence.find();
    console.log(data)
    res.send(data);
  } catch (e) {
    res.status(500).send(e);
  }
}
exports.getdprStatus = async (req, res) => {

  try {
    console.log("gggggg")
    const data = await Dpr.find();
    console.log(data)
    res.send(data);
  } catch (e) {
    res.status(500).send(e);
  }
}
exports.getEmployeeAttendance = async (req, res) => {
console.log("jjjjjjjj")
  try {
    console.log(req.token.email)
    const data = await Attendence.find({email:req.token.email});
    console.log(data)
    res.send(data);
  } catch (e) {
    res.status(500).send(e);
  }
}
exports.getMorning = async (req, res) => {
  console.log("gg")
  // const data = await Attendence.findOne({ email: req.token.email,morning:Date.now() });
  // const name =data.name ;
  firstdate=new Date(new Date(Date.now()).getFullYear() +"-"+(new Date(Date.now()).getMonth()+1)+"-"+(new Date(Date.now()).getDate()+1));
       seconddate=new Date(new Date(Date.now()).getFullYear() +"-"+(new Date(Date.now()).getMonth()+1)+"-"+(new Date(Date.now()).getDate()));
      console.log(firstdate)
      const data = await Attendence.findOne({ email: req.token.email, morning:{ $lte: firstdate,$gte:seconddate}})

  // console.log(data)
  if (data != null) {
    console.log("jjjjjj")
    res.send({value:1})
  }
  else
    res.sendStatus(401)
}
exports.getEvening = async (req, res) => {
  firstdate=new Date(new Date(Date.now()).getFullYear() +"-"+(new Date(Date.now()).getMonth()+1)+"-"+(new Date(Date.now()).getDate()+1));
  seconddate=new Date(new Date(Date.now()).getFullYear() +"-"+(new Date(Date.now()).getMonth()+1)+"-"+(new Date(Date.now()).getDate()));
 console.log(firstdate)
 const data = await Attendence.findOne({ email: req.token.email, morning:{ $lte: firstdate,$gte:seconddate}})

  console.log(data)
   if(data==null){
     res.send({value:2})
  }
  else if (data.evening != null ) {
    res.send({value:1})
  }
  else
    res.sendStatus(401)
}
exports.leaveDate = async (req, res) => {
  console.log("gg")
  const data = await Leave.findOne({ email: req.token.email, $and: [{ start: { $lte: req.body.date } }, { end: { $gte: req.body.date } }] });
  // const name =data.name ;
  console.log(data)
  if (data == null) {
    res.send({ data: 2 })
  }
  else
    res.send({ data: 1 })
}

exports.addTask = async (req, res) => {
  try{
    console.log(req.body.deadline);
    console.log(req.body.todo);
    console.log(req.body.assignedby);
    
  const data = await Intern.findOne({email:"try@gmail.com"});
  const { todo, deadline, assignedby  } = req.body;
  const taskData = new Task({ name: data.name, email: data.email, designation: data.designation,todo,assignedby,deadline});
  const a = await taskData.save();
  res.status(200).json({ message: "Task Saved Successfully" })
  }
  catch (error) {
    res.status(500).send(error);
  }

}

exports.deletTask=async (req, res)=> {
  try {
  
    const delTask = await Task.findOneAndRemove({email:"try@gmail.com", todo:"Login"})
    res.status(200).json({ message: "Task Removed Successfully" })
  } catch (error) {
    console.log(error)
    res.status(500).send(error);
   
  }
}

exports.getTask = async (req, res) => {
  try {
    const data = await Task.find({ email: req.token.email });
    res.send(data);
  } catch (e) {
    res.status(500).send(e);
  }
}

exports.addAnn = async (req, res) => {
  try{
  const data = await Intern.findOne({email:"try@gmail.com"});
  const { annName, annBody, date  } = req.body;
  const annData = new Ann({ name: data.name, email: data.email, designation: data.designation,annName, annBody, date,});
  const a = await annData.save();
  res.status(200).json({ message: "Announcement Saved Successfully" })
  }
  catch (error) {
    res.status(500).send(error);
  }
}

exports.getAnn = async (req, res) => {
  try {
    const data = await Ann.find({ email: "try@gmail.com" });
    res.send(data);
    res.status(200).json({ message: "Announcement Fetched Successfully" })
  } catch (e) {
    res.status(500).send(e);
  }
}


exports.addQuery = async (req, res) => {
  try{
  const { name, email, query  } = req.body;
  const queryData = new Query({  name, email, query});
  await queryData.save();
  res.status(200).json({ message: "Query Saved Successfully" })
  }
  catch (error) {
    res.status(500).send(error);
  }
}

exports.getQuery = async (req, res) => {
  try {
    const data = await Query.find();
    res.send(data);
    res.status(200).json({ message: "Query Fetched Successfully" })
  } catch (e) {
    res.status(500).send(e);
  }
}




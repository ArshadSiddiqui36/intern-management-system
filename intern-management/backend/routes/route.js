const express = require('express')
const router = express.Router();
const internCtrl = require('../controllers/internController')
const mainCtrl =require("../controllers/mainCont")
const authCtrl =require("../controllers/authCont")
const service=require("../services/service")
router.post('/register',internCtrl.adminAdd)
router.post('/internadd',authCtrl.tokenVerify,authCtrl.checkAdminRole,internCtrl.internAdd)
router.post('/login',mainCtrl.login)
//leave routes
router.post("/leave",authCtrl.tokenVerify,authCtrl.checkInternRole,internCtrl.addLeave )
router.post("/leaveDate" ,authCtrl.tokenVerify,authCtrl.checkInternRole,internCtrl.leaveDate)
router.get("/leavestatus",authCtrl.tokenVerify,authCtrl.checkInternRole,internCtrl.getleavestatus);
router.get("/adminleave",internCtrl.getadminleave)

//dpr routes
router.post("/dpr",authCtrl.tokenVerify,authCtrl.checkInternRole,internCtrl.addDpr);
router.get("/getdpr",authCtrl.tokenVerify,internCtrl.getdpr)
router.get("/getdprStatus",authCtrl.tokenVerify,internCtrl.getdprStatus)

//employee routes
router.get("/getEmployee",authCtrl.tokenVerify,internCtrl.getEmployee)
router.get("/getAllEmployee",authCtrl.tokenVerify,internCtrl.getAllEmployee)
router.post("/update",authCtrl.tokenVerify, internCtrl.update);

//attendance routes
router.post("/attendance", authCtrl.tokenVerify,authCtrl.checkInternRole,internCtrl.addAttendence)
router.get("/getattendence", internCtrl.getattendencestatus)
router.get("/getEmployeeAttendance", authCtrl.tokenVerify,internCtrl.getEmployeeAttendance)
router.get("/getEmployeeAttendance", authCtrl.tokenVerify,internCtrl.getEmployeeAttendance)
router.get("/getMorning", authCtrl.tokenVerify,internCtrl.getMorning)
router.get("/getEvening", authCtrl.tokenVerify,internCtrl.getEvening)

//task routes
router.post("/task", internCtrl.addTask)
router.get("/getTask",authCtrl.tokenVerify,internCtrl.getTask)
router.delete("/deltask",internCtrl.deletTask)

//Announcement routes
router.post("/addAnn",internCtrl.addAnn);
router.get("/getAnn",internCtrl.getAnn);

//query routes
router.post("/query",internCtrl.addQuery);
router.get("/getquery",internCtrl.getQuery);

router.post("/validEmailUser", authCtrl.validEmailUser)
router.post("/forgotPassword",service.transporter,service.emailtoken)
router.post("/changepassword",authCtrl.tokenVerify,authCtrl.changepassword)
router.post("/getUpdateStatus",internCtrl.getUpdateStatus)
module.exports = router;
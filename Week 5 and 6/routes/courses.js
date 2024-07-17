const express = require("express") ;
const router = express.Router() ;

const{ getCourses,getCoursebyCategories }= require("../controllers/getCourses")
const {createCourse} = require("../controllers/createCourse") ;
const {updateCourse }= require("../controllers/updateCourse");
const {deleteCourse} = require("../controllers/deleteCourse") ; 

router.get("/getCourses",getCourses) ;
router.get("/getCourses/:category",getCoursebyCategories) ;
router.post("/createCourses",createCourse) ;
router.put("/updateCourse/:id",updateCourse);
router.delete("/deleteCourse/:id",deleteCourse) ;


module.exports = router ;
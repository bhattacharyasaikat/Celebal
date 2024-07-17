const Course = require("../model/Courses")

exports.createCourse = async (req,res) =>{
try {
    const {title,description,category} = req.body ;

    const response = await Course.create({title,description,category}) ;

    res.status(200).json({
        succeess:true,
        data:response,
        message :"Course created successfully" 
    })
} catch (error) {
    res.status(500).json({
        success: false,
        message: "Error in creating courses"
    })
}
}
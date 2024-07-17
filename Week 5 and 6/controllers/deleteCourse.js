const Course = require("../model/Courses");
exports.deleteCourse = async(req, res)=> {
    try {
        const id = req.params.id;
        const course = await Course.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            message: "Course deleted successfully" 
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error in deleting courses"
        })
    }
}
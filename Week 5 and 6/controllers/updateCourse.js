const Course = require("../model/Courses");
exports.updateCourse= async (req, res) => {
    try {
        const id = req.params.id;
        const { title, description, category } = req.body;

        const course = await Course.findByIdAndUpdate(
            {
                _id: id,
            },
            {
                title,
                description,
                category,
                updatedAt:Date.now()
            }
        
        )

        res.status(200).json({
            success:true,
            data: course,
            message: "course updates successfully"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error in updating courses"
        })
    }
}
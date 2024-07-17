const Course = require("../model/Courses");
exports.getCourses = async (req, res) => {
    try {
        const allCourse = await Course.find({});
        res.status(200).json({
            success: true,
            data: allCourse,
            message: "All courses is fetched"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error in fetching courses"
        })
    }
}


// fetch by categories

exports.getCoursebyCategories = async (req, res) => {
    const category = req.params.category;
    try {
        const coursesByCategories = await Course.find({ category: category });
        if (coursesByCategories.length === 0) {
            return res.status(404).json({
                success: false,
                message: `No courses found for category '${category}'.`
            });
        }
        res.status(200).json({
            success: true,
            data: coursesByCategories,
            message: `Courses found for category '${category}'.`
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error in fetching courses"
        }
    )
}
}
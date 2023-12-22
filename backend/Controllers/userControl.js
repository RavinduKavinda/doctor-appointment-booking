import User from "../models/UserSchema.js";

//User update
export const updateUser = async (req, res) => {
    const id = req.params.id;

    try {
        const updatedUser = await User.findByIdAndUpdate(
            id,
            { $set: req.body },
            { new: true}
        );

        res
            .status(200)
            .json({
                success: true,
                message: "Successfully Updated!",
                data: updatedUser,
            });

    } catch (error) {
         res
            .status(500)
            .json({
                success: false,
                message: "Failed to Update!",
            });
    }
}

//User Delete
export const deleteUser = async (req, res) => {
    const id = req.params.id;

    try {
        await User.findByIdAndDelete(
            id,
        );

        res
            .status(200)
            .json({
                success: true,
                message: "Successfully Deleted!",
            });

    } catch (error) {
         res
            .status(500)
            .json({
                success: false,
                message: "Failed to Delete!",
            });
    }
}

//Single User
export const getSingleUser = async (req, res) => {
    const id = req.params.id;

    try {
        const user = await User.findById(
            id,
        );

        res
            .status(200)
            .json({
                success: true,
                message: "Successfully found!",
                data: user,
            });

    } catch (error) {
         res
            .status(404)
            .json({
                success: false,
                message: "Failed to found user!",
            });
    }
}

//All Users
export const getAllUser = async (req, res) => {

    try {
        const users = await User.find({});

        res
            .status(200)
            .json({
                success: true,
                message: "Users found!",
                data: users,
            });

    } catch (error) {
         res
            .status(404)
            .json({
                success: false,
                message: "Failed to found users!",
            });
    }
}
import UserSchema from "../models/UserSchema.js";

//User update
export const updateUser = async (req, res) => {
    const id = req.params.id;

    try {
        const updatedUser = await UserSchema.findByIdAndUpdate(
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
                data: updatedUser,
            });
    }
}
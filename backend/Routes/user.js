import express from "express";
import {
    updateUser,
    deleteUser,
    getSingleUser,
    getAllUser
} from "../Controllers/userControl.js";
import { authenticate } from "../auth/verifyToken.js";

const router = express.Router();

router.get("/:id",authenticate, getSingleUser);
router.get("/",getAllUser);
router.put("/:id",updateUser);
router.delete("/:id",deleteUser);

export default router;
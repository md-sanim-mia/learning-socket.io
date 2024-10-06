import express from "express";
import { loginUser, userRegister } from "../routerconteler/userRouterConteler.js";

const router=express.Router();

router.post('/register',userRegister)
router.post('/login',loginUser)

export default router
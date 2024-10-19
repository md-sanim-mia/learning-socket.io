import express from "express";
import { loginUser, logoutUser, userRegister } from "../routerconteler/userRouterConteler.js";

const router=express.Router();

router.post('/register',userRegister)
router.post('/login',loginUser)
router.post('/logout',logoutUser)

export default router
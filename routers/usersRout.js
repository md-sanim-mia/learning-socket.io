import express from 'express'
import { currentChatters, getUserSearch } from '../routerconteler/userHandileConteler.js'
import isLogin from '../middlieware/islogin.js'

const router=express.Router()
router.get('/search',isLogin,getUserSearch)

router.get('/currentchatter',isLogin,currentChatters)
export default router

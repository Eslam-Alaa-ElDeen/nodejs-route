import { Router } from 'express'
import {  signup } from './auth.service.js';
const router = Router(); 
router.post("/signup", async (req, res, next) => {
    const result = await signup(req.body)
    return res.status(201).json({ message: "Done signup", result })
})



export default router
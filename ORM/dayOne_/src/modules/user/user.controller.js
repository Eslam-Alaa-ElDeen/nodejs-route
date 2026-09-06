import {Router}from "express"
import express from "express"
import { userModel } from "../../database/models/user.model.js"
import { getAllUsers } from "./user.service.js"

export const userRouter=Router()

userRouter.get('/',getAllUsers)

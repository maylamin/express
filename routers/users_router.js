const express = require('express')
const userService = require('../services/users_service')
const usersRouter = express.Router();


usersRouter.route('/').get(userService.getAllusers)
usersRouter.route('/login').post(userService.login)
usersRouter.route('/register').post(userService.register)
usersRouter.route('/:id').get(userService.getUserById).patch(userService.upDateUser)








module.exports=usersRouter;

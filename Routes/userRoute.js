const express = require('express');
const userController = require('../controllers/user');
const userRoute = express.Router();

userRoute.post('/signup', userController.signup);
userRoute.post('/signin', userController.signin);
userRoute.post('/reset-password', userController.resetPassword);
userRoute.post('/new-password', userController.newPassword);
userRoute.post('/:email', userController.activationLink);
userRoute.get('/activate/:activationToken', userController.activateAccount);
userRoute.get('/allusers', userController.allusers);
userRoute.post('/resume/resume-model', userController.resumeData);
userRoute.get('get/resume-model', userController.getResumeModel);
module.exports = userRoute;

const express = require('express');
const AppController = require('../controllers/AppController.js');
const StudentsController =  require('../controllers/StudentsController.js');

const router = express.Router();

router.get('/', AppController.getHomepage);

router.get('/students', StudentsController.getAllStudents);

router.get('/students/:major', StudentsController.getAllStudentsByMajor);

export default router;
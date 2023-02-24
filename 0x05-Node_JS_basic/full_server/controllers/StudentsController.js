const readDatabase  = require('../utils.js');

export default class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const data = await readDatabase('./database.csv');
      let response = 'This is the list of our students\n';
      for (const {field, count, students} of data) {
        response += `Number of students in ${field}: ${count}. List: ${students.join(', ')}\n`;
      }
      res.status(200).send(response);
    } catch (err) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const data = await readDatabase('./database.csv');
      const students = data.find(({field}) => field === major.toLowerCase());
      if (!students) {
        res.status(404).send(`No students found for major ${major}`);
      } else {
        const response = `List: ${students.students.join(', ')}`;
        res.status(200).send(response);
      }
    } catch (err) {
      res.status(500).send('Cannot load the database');
    }
  }
}
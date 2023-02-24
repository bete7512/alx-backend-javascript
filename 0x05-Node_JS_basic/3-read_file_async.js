const fs = require('fs');

function countStudents(path) {
  const message = [];
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const students = data.trim().split('\n').slice(1);
      const fields = {};
      students.forEach((student) => {
        const values = student.split(',');
        if (values.length === 4) {
          const field = values[3];
          if (!(field in fields)) {
            fields[field] = [];
          }
          fields[field].push(values[0]);
        }
      });
      message.push(`Number of students: ${students.length}`);
      console.log(`Number of students: ${students.length}`);
      Object.keys(fields).forEach((field) => {
        const studentCount = fields[field].length;
        const studentList = fields[field].join(', ');
        message.push(`Number of students in ${field}: ${studentCount}. List: ${studentList}`);
        console.log(`Number of students in ${field}: ${studentCount}. List: ${studentList}`);
      });
      resolve(message);
    });
  });
}

module.exports = countStudents;

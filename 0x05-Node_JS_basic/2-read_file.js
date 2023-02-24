const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8').toString().split('\n');
    const students = data.slice(1, data.length - 1);
    console.log(`Number of students: ${students.length}`);
    students.shift();
    const subjects = {};
    for (const row of students) {
      const student = row.split(',');
      if (!subjects[student[3]]) subjects[student[3]] = [];
      subjects[student[3]].push(student[0]);
    }
    for (const subject in subjects) {
      if (subject) {
        console.log(
          `Number of students in ${subject}: ${
            subjects[subject].length
          }. List: ${subjects[subject].join(', ')}`,
        );
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;

const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8').toString().split('\n');
    const students = data.slice(1);
    const cs = students.filter((student) => student.includes('CS'));
    const swe = students.filter((student) => student.includes('SWE'));
    console.log(`Number of students: ${students.length}`);
    console.log(`Number of students in CS: ${cs.length}. List: ${cs.map((student) => student.split(',')[0]).join(', ')}`);
    console.log(`Number of students in SWE: ${swe.length}. List: ${swe.map((student) => student.split(',')[0]).join(', ')}`);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;

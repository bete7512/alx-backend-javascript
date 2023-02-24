const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8').toString().split('\n');
    const students = data.slice(1);
    const obj = {};
    obj.CS = students.filter((student) => student.includes('CS'));
    obj.SWE = students.filter((student) => student.includes('SWE'));
    console.log(`Number of students: ${students.length}`);
    for (const key in obj) {
      if (obj[key].length > 0) {
        console.log(
          `Number of students in ${key}: ${obj[key].length}. List: ${obj[key]
            .map((student) => student.split(',')[0])
            .join(', ')}`,
        );
      }
    }
    //   process.stdout.write(`Number of students in CS: ${cs.length}. List: `)
    //  cs.map((student) =>  process.stdout.write(student.split(',')[0]).join(', '));
    //  swe.map((student) =>  process.stdout.write(student.split(',')[0]).join(', '));
    // process.stdout.write(`Number of students in SWE: ${swe.length}.
    // List: ${swe.map((student) => student.split(',')[0]).join(', ')}\n`);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;

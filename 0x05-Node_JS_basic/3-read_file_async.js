const fs = require('fs');

function countStudents (path) {
  const promise = new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
        return
      }
      const students = data.split('\n');
      console.log(`Number of students: ${students.length - 1}`);
      students.shift();
      let cs = 0;
      let swe = 0;
      students.forEach((student) => (student.includes('CS') ? cs++ : swe++));
      console.log(
        `Number of students in CS: ${cs}. List: ${students
          .filter((student) => student.includes('CS'))
          .map((student) => student.split(',')[0])
          .join(', ')}`
      );
      console.log(
        `Number of students in SWE: ${swe}. List: ${students
          .filter((student) => student.includes('SWE'))
          .map((student) => student.split(',')[0])
          .join(', ')}`
      );
      resolve(students);
    });
  });
  return promise;
}

module.exports = countStudents;

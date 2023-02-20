const fs = require('fs');
function countStudents (path) {
  try {
    const data = fs.readFileSync(path, 'utf8').toString();
    const students = data.split('\n');
    console.log(`Number of students: ${students.length - 1}`);
    students.shift();
    const subjects = {};
    for (const row of students) {
        const student = row.split(',');
        if (!subjects[student[3]]) subjects[student[3]] = [];
        subjects[student[3]].push(student[0]);
    }
    for (const subject in subjects) {
        if (subject) console.log(`Number of students in ${subject}: ${subjects[subject].length}. List: ${subjects[subject].join(', ')}`);
    }
    // const cs = students.filter((student) => student.includes('CS'));
    // const swe = students.filter((student) => student.includes('SWE'));
    // console.log(`Number of students in CS: ${cs.length}. List: ${cs.map((student) => student.split(',')[0]).join(', ')}`);
    // console.log(`Number of students in SWE: ${swe.length}. List: ${swe.map((student) => student.split(',')[0]).join(', ')}`);

    // let cs = 0;
    // let swe = 0;
    // students.forEach((student) => student.includes('CS') ? cs++ : swe++);
    // console.log(
    //   `Number of students in CS: ${cs}. List: ${students
    //     .filter((student) => student.includes('CS'))
    //     .map((student) => student.split(',')[0])
    //     .join(', ')}`
    // );
    // console.log(
    //     `Number of students in SWE: ${swe}. List: ${students
    //     .filter((student) => student.includes('SWE'))
    //     .map((student) => student.split(',')[0])
    //     .join(', ')}`
    // );
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;

// const fs = require('fs');

// const countStudents = (path) => {
//   try {
//     let data = fs.readFileSync(path, 'utf8').toString().split('\n');
//     data = data.slice(1, data.length - 1);
//     console.log(`Number of students: ${data.length}`);
//     const subjects = {};
//     for (const row of data) {
//       const student = row.split(',');
//       if (!subjects[student[3]]) subjects[student[3]] = [];
//       subjects[student[3]].push(student[0]);
//     }
//     for (const subject in subjects) {
//       if (subject) console.log(`Number of students in ${subject}: ${subjects[subject].length}. List: ${subjects[subject].join(', ')}`);
//     }
//   } catch (error) {
//     throw new Error('Cannot load the database');
//   }
// };
// module.exports = countStudents;
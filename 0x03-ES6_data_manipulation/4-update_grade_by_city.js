export default function updateStudentGradeByCity(students, city, newGrades) {
  const sts = students.filter((student) => student.location === city);
  return sts.map((student) => {
    const grade = newGrades.find((grade) => grade.studentId === student.id);
    if (grade) {
      // eslint-disable-next-line no-param-reassign
      student.grade = grade.grade;
    } else {
      // eslint-disable-next-line no-param-reassign
      student.grade = 'N/A';
    }
    return student;
  });
}

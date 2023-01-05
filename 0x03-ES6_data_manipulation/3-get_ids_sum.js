export default function getStudentIdsSum(students) {
  return students.reduce((sum, student) => student.id + sum, 0);
}

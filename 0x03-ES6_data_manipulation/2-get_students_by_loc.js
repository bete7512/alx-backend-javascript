export default function getListStudentIds(students, city) {
  // eslint-disable-next-line eqeqeq
  return students.filter((student) => student.location == city);
}

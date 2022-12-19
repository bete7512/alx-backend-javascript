export default function createIteratorObject (report) {
  for (const value in { ...report }) {
    console.log(value);
  }
}

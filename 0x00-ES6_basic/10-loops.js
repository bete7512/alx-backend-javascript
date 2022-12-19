export default function appendToEachArrayValue(array, appendString) {
  let returns = []
  for (let value of array) {
    returns.push(appendString + value);
  }
  return returns;
}

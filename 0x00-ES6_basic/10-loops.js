export default function appendToEachArrayValue(array, appendString) {
  const returns = [];
  for (const value of array) {
    returns.push(appendString + value);
  }
  return returns;
}

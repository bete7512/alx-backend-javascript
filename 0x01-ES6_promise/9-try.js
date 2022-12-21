export default function guardrail(mathFunction) {
  const queue = [];
  let result = '';
  try {
    result = mathFunction();
    queue.push(result);
    queue.push('Guardrail was processed');
  } catch (e) {
    result = e.toString();
    queue.push(result);
    queue.push('Guardrail was processed');
  }
  return queue;
}

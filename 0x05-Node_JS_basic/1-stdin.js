process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  const fname = process.stdin.read();
  if (fname) process.stdout.write(`Your name is: ${fname}`);
});
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});

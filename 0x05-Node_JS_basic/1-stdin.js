const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));

// Usage inside aync function do not need closure demo only*
(async () => {
  try {
    // console.log("");
    const name = await prompt("Welcome to Holberton School, what is your name?\n");

    // Can use name for next question if needed
    // const lastName = await prompt(`Hello ${name}, what's your last name?: `);
    // Can prompt multiple times
    console.log("Your name is:", name);
    console.log("This important software is now closing");
    rl.close();
  } catch (e) {
    console.error("Unable to prompt", e);
  }
})();

// When done reading prompt, exit program
rl.on("close", () => process.exit(0));

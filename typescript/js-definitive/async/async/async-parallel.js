const { resolveHello, resolveWorld } = require("./hello-world");

async function parallel() {
  await Promise.all([
    (async () => console.log(await resolveHello()))(), // logs in 2 second
    (async () => console.log(await resolveWorld()))(), // logs in 1 second
  ]);

  console.log("Finally");
}

parallel();

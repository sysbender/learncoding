const { resolveHello, resolveWorld } = require("./hello-world");

async function concurrentStart() {
  const hello = resolveHello();
  const world = resolveWorld();

  console.log(await hello); // logs after 2 seconds
  console.log(await world); // logs after 2 seconds
}

concurrentStart();

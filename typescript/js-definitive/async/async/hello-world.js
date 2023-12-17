function resolveHello() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello");
    }, 2000);
  });
}

function resolveWorld() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("World");
    }, 1000);
  });
}

module.exports = { resolveHello, resolveWorld };

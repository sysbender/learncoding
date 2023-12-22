export default function hello(name = "ES6Module") {
  console.log(` Hello ${name}`);
}

export const pi = 3.14;
const PI = 3.141;
const Pi = 3.1415;
export { Pi, PI };

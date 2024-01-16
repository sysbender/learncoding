// iterator is verbose
// function* generatorFunction(){  use yield to pause }
// const generatorObject = generatorFunction()

function* mygen() {
  let step = 0;
  while (step < 4) {
    ++step;
    yield `step=${step}`;
  }
}

const mygenObj = mygen();
for (const item of mygenObj) {
  console.log(item);
}

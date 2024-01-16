const credits = ((num) => {
  let credits = num;
  console.log(`init credits = ${num}`);
  return () => {
    credits -= 1;
    if (credits > 0) {
      console.log(` Playing game, remaining credits = ${credits}`);
    } else {
      console.log("Playing game, no credits left");
    }
  };
})(3);

credits();
credits();
credits();

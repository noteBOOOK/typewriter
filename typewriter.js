const sentence = "hello there from lighthouse labs";
let timerCounter = 0;

for (const char of sentence) {
  setTimeout( () => {
    process.stdout.write(char);
  }, timerCounter)
  timerCounter += 50;
  if (timerCounter === (sentence.length * 50)) {
    setTimeout( () => console.log(""), timerCounter)
  }
}


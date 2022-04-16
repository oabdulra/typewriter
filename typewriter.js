

const sentence = "hello there from lighthouse labs\n";
let timeInc = 0;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, timeInc);
  timeInc += 50;
}

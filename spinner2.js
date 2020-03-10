let time = 100;
let array = ["|", "/", "-", "\\", "|"];
for (let spinner of array) {
  setTimeout(() => {
    process.stdout.write("\r" + spinner);
  }, time += 500);
}



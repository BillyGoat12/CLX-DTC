const print = (number) => {
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.info("CLXDTC");
    } else if (i % 3 === 0) {
      console.info("CLX");
    } else if (i % 5 === 0) {
      console.info("DTC");
    } else {
      console.info(i);
    }
  }
};

print(100);

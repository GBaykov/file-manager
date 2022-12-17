const parseArgs = () => {
  const filtredArgs = process.argv.filter((argv) => argv.startsWith("--"));
  for (let arg of filtredArgs) {
    const flafIndex = process.argv.indexOf(arg);
    if (flafIndex !== -1) {
      console.log(
        `${process.argv[flafIndex].slice(2)} is ${process.argv[flafIndex + 1]}`
      );
    } else {
      console.log(flafIndex);
    }
  }
};

parseArgs();

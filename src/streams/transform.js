import { stdin, stdout } from "process";
import { pipeline, Transform } from "stream";

const transform = async () => {
  const myTransform = new Transform({
    transform(chunk, encoding, cb) {
      cb(null, chunk.toString().split("").reverse().join("") + "\n");
    },
  });
  pipeline(stdin, myTransform, stdout, (err) => err);
};

await transform();

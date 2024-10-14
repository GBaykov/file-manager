import { cpus, arch, homedir, userInfo, EOL } from "os";

export const operatingSystem = async (comand) => {
  if (comand === "--EOL") {
    console.log(JSON.stringify(EOL));
  } else if (comand === "--cpus") {
    const cores = cpus().map((core) => {
      return {
        core_model: core.model,
        clock_rate: `${(core.speed / 1000).toFixed(1)} GHz`,
      };
    });
    console.log(cpus().length);
    console.log(cores);
  } else if (comand === "--homedir") {
    console.log(homedir());
  } else if (comand === "--username") {
    console.log(userInfo().username);
  } else if (comand === "--architecture") {
    console.log(arch());
  } else {
    console.log("Invalid input");
  }
  //   } catch (err) {
  //     console.log("Operation failed");
  //   }
};

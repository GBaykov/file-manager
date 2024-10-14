import { join } from "path";
import { cwd, chdir } from "process";

export const up = () => chdir(join(cwd(), "../"));

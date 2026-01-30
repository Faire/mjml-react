import { exec as execCb } from "child_process";
import * as fs from "fs";
import util from "util";

const exec = util.promisify(execCb);

async function buildMjmlReact() {
  await exec("yarn build-dist");
  moveFilesToDist();
}

const FILES_TO_COPY = ["package.json", "LICENSE", "README.md"];
function moveFilesToDist() {
  FILES_TO_COPY.forEach((fileToCopy) => {
    const destination = `dist/${fileToCopy}`;
    if (fileToCopy === "package.json") {
      const file = fs.readFileSync(fileToCopy);
      const packageJson = JSON.parse(file.toString().replace(/dist\//g, ""));

      // Remove fields that shouldn't be in the published package
      delete packageJson.devDependencies;
      delete packageJson.scripts;
      delete packageJson.release; // Remove semantic-release config!
      delete packageJson.packageManager;

      fs.writeFileSync(destination, JSON.stringify(packageJson, null, 2));
    } else {
      fs.copyFileSync(fileToCopy, destination);
    }
  });
}

buildMjmlReact();

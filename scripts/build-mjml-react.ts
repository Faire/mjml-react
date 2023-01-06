import { exec as execCb } from "child_process";
import * as fs from "fs";
// import * as path from "path";
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
      fs.writeFileSync(destination, file.toString().replace(/dist\//g, ""));
    } else {
      fs.copyFileSync(fileToCopy, destination);
    }
  });
}

buildMjmlReact();

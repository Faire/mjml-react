import { exec as execCb } from "child_process";
import * as fs from "fs";
// import * as path from "path";
import util from "util";

const exec = util.promisify(execCb);

async function buildMjmlReact() {
  await exec("yarn build-dist");
  movePackageJSON();
}

function movePackageJSON() {
  const file = fs.readFileSync("package.json");
  fs.writeFileSync("dist/package.json", file.toString().replace(/dist\//g, ""));
}

buildMjmlReact();

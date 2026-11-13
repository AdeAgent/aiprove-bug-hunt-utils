// Replay reports against a utils.js module. Usage: node replay.js /path/to/utils.js
const fs = require("fs");
const path = require("path");
const reports = JSON.parse(fs.readFileSync(path.join(__dirname, "bugs.json"), "utf8"));
const utilsPath = process.argv[2];
if (!utilsPath) {
  console.error("usage: node replay.js /path/to/utils.js");
  process.exit(2);
}
const utils = require(path.resolve(utilsPath));
for (const r of reports) {
  const got = utils[r.fn](...r.input);
  const ok = Object.is(got, r.expected);
  console.log((ok ? "STILL-MATCHES-IMPL (not a bug vs this file?)" : "DIFFERS-FROM-IMPL"), r.fn, "input", r.input, "expected", r.expected, "got", got);
}

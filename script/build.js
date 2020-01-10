const commander = require("commander");
const rollup = require("rollup");
const resolve = require("rollup-plugin-node-resolve");
const commonjs = require("rollup-plugin-commonjs");
const babel = require("rollup-plugin-babel");
const rollupTypescript = require("rollup-plugin-typescript");
const rimraf = require("rimraf");
const fs = require("fs-extra");
const path = require("path");
const minify = require("rollup-plugin-babel-minify");
const packg = require("../package.json");
const JSZip = require("jszip");
const base64 = require("./base64");
const builtins = require("rollup-plugin-node-builtins");
const globals = require("rollup-plugin-node-globals");

const isDev = process.env.NODE_ENV !== "production";
const isMIN = process.env.MIN;
const isRumtime = process.env.RUNTIME;

function removeBuildFolder() {
  rimraf("build", function(err) {});
}

function processPackageJson() {
  const requiredField = [
    "type",
    "name",
    "displayName",
    "description",
    "version",
    "private",
    "main",
    "author",
    "license",
    "logo",
    "include",
    "platforms",
    "templates"
  ];
  const pgxPackage = {};
  requiredField.forEach(fieldName => {
    let fieldVal = packg[fieldName];
    if (fieldName === "logo") {
      let logoPath = path.resolve(fieldVal);
      console.log("logoPath:", logoPath);
      if (fs.existsSync(logoPath)) {
        fieldVal = base64.encode(logoPath);
        console.log("b64s::", fieldVal);
      } else {
        throw new Error(`Extension logo is required!`);
      }
    }
    pgxPackage[fieldName] = fieldVal;
  });
  fs.writeFileSync(
    path.join(__dirname, "../build/package.json"),
    JSON.stringify(pgxPackage),
    "utf8"
  );
}

function processBuildPGX() {
  if (process.argv.indexOf("--package") > -1) {
    var zip = new JSZip();
    let fileList = fs.readdirSync(path.join(__dirname, "../build/"), {
      encoding: "utf8"
    });
    fileList.forEach(item => {
      console.log("Add file to zip:", item);
      zip.file(item, fs.readFileSync(path.join(__dirname, "../build/", item)));
    });
    fs.mkdirsSync(path.join(__dirname, "../dist/"));
    let stream = zip.generateNodeStream({ type: "nodebuffer" });
    let wSteam = fs.createWriteStream(
      path.join(__dirname, "../dist/provider.pgx")
    );
    stream.pipe(wSteam);
  }
}
// see below for details on the options
const inputOptions = {
  input: [isRumtime ? "src/index.runtime.ts" : "src/index.ts"],
  plugins: [
    builtins(),
    globals(),
    // resolve({ browser: true, module: true }),
    resolve({ mainFields: ["module", "main"], browser: true }),
    commonjs({
      // non-CommonJS modules will be ignored, but you can also
      // specifically include/exclude files
      include: ["node_modules/**"], // Default: undefined
      // if true then uses of `global` won't be dealt with by this plugin
      ignoreGlobal: true, // Default: false
      // if false then skip sourceMap generation for CommonJS modules
      sourceMap: true // Default: true
    }),
    rollupTypescript(),
    babel({
      exclude: "node_modules/**",
      extensions: [".js"]
    }),
    isMIN ? minify() : null
  ]
};
const outputOptions = {
  file: isRumtime ? "build/pgd-custom-element.js" : "build/index.js",
  format: "iife",
  sourcemap: true
};
async function build() {
  removeBuildFolder();
  // create a bundle
  const bundle = await rollup.rollup(inputOptions);
  // generate code
  await bundle.generate(outputOptions);
  // or write the bundle to disk
  await bundle.write(outputOptions);
}

const arg = process.argv.slice(2);
if (arg.indexOf("--watch") > -1) {
  const watchOptions = {
    ...inputOptions,
    output: [outputOptions],
    watch: {
      exclude: ["node_modules/**", "libs/**"]
    }
  };
  const watcher = rollup.watch(watchOptions);
  const Events = {
    start: "START",
    bundleStart: "BUNDLE_START",
    bundleEnd: "BUNDLE_END",
    end: "END",
    error: "ERROR",
    fatal: "FATAL"
  };
  watcher.on("event", (event, ...data) => {
    switch (event.code) {
      case Events.start:
        if (isDev) console.log("Start building ...");
        if (!isDev) console.log("Start building for production!");
        //removeBuildFolder();
        break;
      case Events.bundleStart:
        break;
      case Events.bundleEnd:
        processPackageJson();
        console.log("Build success ...");
        break;
      case Events.end:
        break;
      case Events.error:
        console.error("[BUNDLE:ERROR]", event);
        break;
      case Events.fatal:
        console.error("[BUNDLE:FATAL]", event);
        //removeBuildFolder();
        break;
      default:
        break;
    }
  });
} else {
  build().then(() => {
    processPackageJson();
    processBuildPGX();
  });
}

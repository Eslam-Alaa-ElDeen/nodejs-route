const { log } = require("console");
const path=require("path");

// console.log({__dirname});
// console.log({__filename});

// console.log(path.basename(__dirname));
// console.log(path.basename(__filename));

// console.log(path.extname(__dirname));
// console.log(path.extname(__filename));

// console.log(path.dirname(__dirname));
// console.log(path.dirname(__filename));

// console.log(path.join("folder1","./main.js"));

// console.log(path.isAbsolute(__dirname));  //true
// console.log(path.isAbsolute(__filename)); //true
// console.log(path.isAbsolute("./path.js"));//false

// console.log(path.resolve("./main.js"));

// console.log(path.resolve("./path.js"));  //come with the absolute path of relative path

// console.log(path.normalize("folder1///main////fasf//main.js"));

// console.log(path.parse(__dirname)); //convert to obj
// console.log(path.parse(__filename));

// console.log(path.format(path.parse(__dirname)));  //convert from obj to url (absolute)

console.log(path.parse(__dirname));


console.log(path.format(
    {
  root: 'C:\\',
  dir: 'C:\\Users\\T.B\\Desktop\\nodejs-route\\NodeJS\\day-01',
  base: '3bgany',
  ext: '',
  name: '3bgany'
}
));




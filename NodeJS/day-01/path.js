//REPL -> read evaluate print loop 
//instal and run Node 
//node --watch (file name)

// module : is a file or folder have codes i should to seperte from the main project to make isolation....
const path=require("path")

// console.log(path.sep);
// console.log(path.delimiter);
// console.log(path.posix);

// console.log(__dirname);
// console.log(__filename);
// console.log(path.extname(__filename));
// console.log(path.basename(__dirname));

// console.log(path.parse(__dirname));

// const pathDir={
//   root: 'C:\\',
//   dir: 'C:\\Users\\T.B\\Desktop\\nodejs-route\\NodeJS',
//   base: 'day-01',
//   ext: '',
//   name: 'day-01'
// };

// console.log(path.format(pathDir));

// absolute path and relative path

// const relative="/JavaScript/day-01"  //relative

// const absolute="C:/Users/T.B/Desktop/nodejs-route/NodeJS/day-01"  //abolute

// console.log(path.isAbsolute(absolute));

// console.log(path.join(__dirname,"./package.json"));  //concate between two pathes

// console.log(path.resolve());  //equl to __dirname and always refet to root dir


// path.normalize(__dirname) //give here a bad path and it convert it to normal path that resolve the path


//modules - файли, які містять якусь логіку, змінні і тд

//Дефолтна нода(без ТС) використовує module commandJS

//MODULES
// const {helper} = require('./helpers/helper');

// const helperModule = require('./helpers/helper');
// helperModule.helper();

//GLOBAL VARIABLES

// console.log(__dirname, 'dirname');
// console.log(__filename, 'filename');
// console.log(process.cwd(), 'process.cwd');
//
// helper();

//DEFAULT NODE MODULES

//PATH
// const path = require('path');

// const joinedPath = path.join(__dirname, 'helper', 'helper.js'); //формує динамічно шлях
// const resolvedPath = path.resolve('helper', 'helper.js');
// const  normalizedPath = path.normalize('//////foo/bar//isdncisdnivsdv/dv/s/dv/sd/v/ds/v/ds');
// console.log(normalizedPath);

//FILESYSTEM(FS)

// const fs = require('fs');
// const pathToFile = path.join(__dirname,'data', 'text.txt');
// const pathToCreatedFile = path.join(__dirname,'data', 'text2.txt');

// fs.readFile(pathToFile, (err, data)=>{
//     if(err) throw new Error();
//     console.log(data.toString())
// });
// fs.appendFile(pathToFile, 'hello okten', (err)=>{
//     if(err) throw new Error();
// });

// fs.writeFile(pathToCreatedFile, 'hello from okten',(err)=>{
//     if(err) throw new Error();
// });

// fs.truncate(pathToCreatedFile, (err)=>{
//     if(err) throw new Error();
// });

// fs.unlink(pathToCreatedFile, (err)=>{
//     if(err) throw new Error();
// });

// fs.readdir(path.join(__dirname, 'data'), (err, files)=>{
//     if(err) throw new Error();
//     console.log(files)
// })

// fs.mkdir(path.join(__dirname, 'data2'),(err)=>{
//     if(err) throw new Error();
// });
// fs.rmdir(path.join(__dirname, 'data2'),(err)=>{
//     if(err) throw new Error();
// });

//OS

// const os = require('os');

// console.log(os.arch());
// console.log(os.cpus());


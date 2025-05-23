// File handling 
/*-->File handling in Node.js is facilitated by the built-in fs (file system) module. 
   It provides methods for interacting with the file system, 
   enabling operations such as reading, writing, creating, deleting, and renaming files and directories. 
   The fs module offers both synchronous and asynchronous methods for these operations.

   */
const { error } = require("console")
const fs = require ("fs")

// **Write
 /*
 fs.writeFile ("./text.txt" ,"Hello world i am async code",(err)=>{
 console.log(err)
 })
 */

//* Read

//sync way code
//const res =fs.readFileSync("./text.txt", "utf8")
//console.log(res)

//------------->
/*
//async way code
fs.readFile("./text.txt","utf8",(error,response) => {
    if(error){
        console.log(error)
    }
    else
    { 
        console.log(response)
    }
}) 

*/

// * Update  /append

//fs.appendFileSync("./text.txt " ,new Date(). toDateString())

fs.appendFile("./Log.txt" , `hellow world this is suraj and logged in at ${new Date() .toDateString()}\n` , (err,res)=>{
    if (err){
        console.log(err)
    }
    else{
        console.log(res)
    }
})

 
// 
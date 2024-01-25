/* 

CURD OPERATIONS: (operations performed on Files)
C--> create
U--> update
R--> rename
D--> delete
 
*/

//Create a Folder named as Vaibhav
//fs.mkdir sync/async() --> used to create a new folder
const fs=require('fs');
fs.mkdirsync("vaibhav");

//create a file in vaibhav folder and  name it as data.txt
//fs.writefile sync/async()--> used to create a file 
fs.writeFileSync('vaibhav/data.txt',"This is data file.");

//add more data into the file at the end of existing data
fs.appendFileSync('vaibhav/data.txt',"HEllo Its Vaibhav.");

//Read the data without getting the buffer data at first
 const data=-fs.readFileSync("vaibhav/data.txt","UFT-8");
 console.log(data);


 //Rename the file name to box.txt
 fs.renameSync('vaibhav/data.txt',"vaibhav/box.txt");

 
 //Delete the file
 fs.unlinkSync("vaibhav/box.txt");

 
 //Delete the Folder
 fs.rmdSync("vaibhav");



 


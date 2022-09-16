

const { fstat } = require("fs");
const filesistem  = require("fs/promise");

 const createFile =  async (filename, data)  =>  {

    try {
        await fs.writeFile(filename,data);
        console.log("file name was successfully created ");
    } catch (error) {
        console.log(error);
    }
 };

 createFile("f1.txt","welcome to my first node js code");



const readFile =  async (fileToRead) => {
   try {
    const data = await fs.readFile(fileToRead);
    console.log(data.toString());
   } catch (error) {
    console.log(error);
   }
}
    

readFile("f1.txt");
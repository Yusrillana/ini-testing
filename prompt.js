var readLineSync = require('readline-sync');
const lantai = readLineSync.question("mau ngepel lantai(1-100)?");

let i = 1
while(i <= lantai){
        console.log(i)
        i++
        console.log(`lagi ngepel lantai ${i}`);
}
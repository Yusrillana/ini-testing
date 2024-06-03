const readLineSync = require('readline-sync');
const lantai = readLineSync.question("mau ngepel lantai(1-100)?");

let i = 2;
do {
    console.log(i)
    console.log(`lagi mengepel ${i}`);
    i++;
}
while (i <= lantai)


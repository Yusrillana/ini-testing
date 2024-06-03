var readLineSync = require('readline-sync');
const berapaLantai = readLineSync.question("mau ngepel lantai(1-100)?");
const BerapaRuang= readLineSync.question("ruangan berapa(1-100)?");

for (lantai = 1; lantai <= berapaLantai; lantai++){
    console.log(lantai)
    console.log(`lagi ngepel lantai ${lantai}`);

        for(ruang = 1; ruang <= BerapaRuang; ruang++){
            console.log(ruang) 
            console.log(`lagi diruang ${ruang} di lantai ${lantai}`);
        }
    }
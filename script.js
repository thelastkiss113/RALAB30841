
// Feeling Loopy 
//   // const csvString =
//   //   'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26';


//   let cell1 = '';
//   let cell2 = '';
//   let cell3 = '';
//   let cell4 = '';

//   let currentCell = 1;

//   for (let i = 0; i < csvString.length; i++) {
//     //checking for new cell
//     if (csvString[i] === ',') {
//       currentCell++;
//       continue;
//     }
//     // checking for a new row
//     if (csvString[i] === '\n') {
//       cell1 = '';
//       cell2 = '';
//       cell3 = '';
//       cell4 = '';
//       currentCell = 1;
//       continue;
//     }

//     switch (currentCell) {
//       case 1:
//         cell1 += csvString[i];
//         break;
//       case 2:
//         cell2 += csvString[i];
//         break;
//       case 3:
//         cell3 += csvString[i];
//         break;
//       case 4:
//         cell4 += csvString[i];
//         break;

//       default:
//         console.log(`cell${currentCell} doesn't exist`);
//         break;
//     }

//     if (
//       (currentCell === 4 && csvString[i + 1] === '\n') ||
//       i + 1 === csvString.length
//     ) {
//       console.log(cell1, cell2, cell3, cell4);
//     }
//   }

//Declare a variable that stores the number of columns in each row of data within the CSV.

//Instead of hard-coding four columns per row, expand your code to accept any number of columns. This should be calculated dynamically based on the first row of data.

console.log("Part 2 ");
const csvString =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";

let dataArray = []; // main array that will contain the sub arrays
let cell = ""; // cell of the table of data
let subArray = [];

const rows = csvString.split("\n");   //split at \n

//for loop to increase number of columns

let word = rows[0]; //  first row check # of columns
let numberOfColumns = 1;
for (let i = 0; i < word.length; i++) {
  if (word[i] === ",") {
    numberOfColumns++;
  }
}
// console.log(`num of col is ${numberOfColumns}`);

// Using the numberOfColumns
// let columns = csvString.split(",");
// console.log(columns);

// for (let i = 0; i < columns.length; i++) {
//   for (let j = 0; j < columns[j].length; j++) {}
// }

// adding \n at the end of each string so that it can be used in the if else
for (let i = 0; i < rows.length; i++) {
  rows[i] += "\n";
}

// total number of rows
const length = rows.length;

// console.log(rows);

for (let i = 0; i < length; i++) {
  let str = rows[i];
  // console.log(str);
  for (let j = 0; j < str.length; j++) {
    // console.log(str[j]);
    if (str[j] !== "," && str[j] !== "\n") {
      // console.log(str[j]);
      cell += str[j];
    } else {
      // console.log(cell);
      // adding cell to sub ary
      subArray.push(cell);
      cell = "";
    }
  }

  // adding subArray to dataArray
  dataArray.push(subArray);

  // console.log("");
  // console.log(str);
  // console.log(subArray);
  subArray = [];
}

console.log(dataArray);

// part 3 - Transforming Data
console.log("Part 3");

let colArray = dataArray[0]; 
console.log( "Columns = colArray");

// Transform rows into an array of objects using the header row as keys
let dataArray2 = dataArray.slice(1).map(row => {
  let obj = {};
  row.forEach((cell, index) => {
    obj[colArray[index]] = cell;
  });
  return obj;
});
console.log(dataArray2);

// part 4 - Sorting and Manipulating Data
console.log("Part 4");

// popping off the end
dataArray2.pop();
console.log(dataArray2);

// Insert a new record at index 1
dataArray2.splice(1, 0, {
  ID: "48",
  Name: "Barry",
  Occupation: "Runner",
  Age: "25",
});
console.log(dataArray2);

// Calculate the average age
let totalAge = dataArray2.reduce((sum, person) => sum + Number(person.Age), 0);
console.log("Total age is", totalAge);

let averageAge = totalAge / dataArray2.length;
console.log(`The average age is ${averageAge}`);

// part 5 - Full circle
console.log("Part 5");
const circleArray = [...dataArray2]; // Copy dataArray2 to circleArray
console.log(circleArray);
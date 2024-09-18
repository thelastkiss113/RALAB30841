
// Feeling Loopy 
//   // const csvString =
//   //   'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26';

//   const csvString =
//     'Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232';

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

let dataArray = []; // main ary that will contain the sub arrays
let i = 0;
let cell = ""; // cell of the table of data
let subAry = [];

const rows = csvString.split("\n");
// console.log(rows);

// Counting the number of columns
let word = rows[0]; // using the first row to check the number of columns
let numOfCol = 1;
for (let i = 0; i < word.length; i++) {
  // if , is found, increment number of columns
  if (word[i] === ",") {
    numOfCol++;
  }
}
// console.log(`num of col is ${numOfCol}`);

// Using the numOfCol
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
      subAry.push(cell);
      cell = "";
    }
  }

  // adding sub ary to main ary
  dataArray.push(subAry);

  // console.log("");
  // console.log(str);
  // console.log(subAry);
  subAry = [];
}

console.log(dataArray);

// part 3 - Transforming Data
console.log("Part 3");
let colAry = dataArray[0];
console.log("columns are ", colAry);
let dataArray2 = [];

for (let i = 1; i < dataArray.length; i++) {
  let table = {};
  for (j = 0; j < dataArray[i].length; j++) {
    let id = dataArray[0][j];
    // console.log("id: ", id);
    console.log(dataArray[i][j]);
    table[id] = dataArray[i][j];
    // console.log(table[id]);
    // console.log(id);
    // console.log(table);
  }
  console.log("");
  console.log(table);
  // console.log("");
  dataArray2.push(table);
  // console.log(dataArray2);
}

console.log(dataArray2);

// part 4 - Sorting and Manipulating Data
console.log("Part 4 ");

// popping off the end
dataArray2.pop();
console.log(dataArray2);

// insert at index 1
dataArray2.splice(1, 0, {
  ID: "48",
  Name: "Barry",
  Occupation: "Runner",
  Age: "25",
});
console.log(dataArray2);

// Calculating the average length
let total = 0;
console.log(dataArray2);
for (let i = 0; i < dataArray2.length; i++) {
  // console.log(`index ${i}:`, dataArray2[i].Age);
  total += Number(dataArray2[i].Age);
}
console.log("total is", total);

let colLength2 = Object.keys(dataArray2[0]).length;
console.log("Number of keys is", colLength2);

console.log(`The average of all ages in the object is ${total / colLength2}`);

// part 5 - full circle
console.log("Part 5");
const circleAry = [];
console.log(dataArray2);

// for loop for keys

// for loop for values
for (let i = 0; i < dataArray2; i++) {}
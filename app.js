/** BÀI 1:
    let str = "program";
    let a = [];
    for (let i = str.length - 1; i >= 0; i--) {
    a.push(str[i]);
    }
    console.log(...a);
 */

// let str = "data";
// let o = Object(str);

// console.log(o);

/**
    BÀI 3
    let str = "this is A Test";
    let a = str.toLowerCase().split(" ");
    let result = a.map(function (value) {
    return value.replace(value.charAt(0), value.charAt(0).toUpperCase());
    //chọn kí tự đầu chuyển thành chữ hoa
    });

    console.log(...result);
*/

/**
Bài 4
    let Arr = [
    "one",
    "two",
    "three",
    "one",
    "one",
    "four",
    "five",
    "four",
    "five",
    "five",
    ];

    let a = new Set(Arr);
    console.log(a);

 */

/**
 Bài 5

let Arr = [5, 2, 3, 4, 1];
for (let i = 0; i < Arr.length; i++) {
  for (let j = i + 1; j < Arr.length; j++) {
    if (Arr[i] > Arr[j]) {
      let t = Arr[i];
      Arr[i] = Arr[j];
      Arr[j] = t;
    }
  }
}
console.log(Arr);
 */

let futureAcademyList = [
  {
    name: "Kien",
    age: 18,
    chucVu: "Trưởng Phòng",
    luong: "2000$",
  },
  {
    name: "Huy",
    age: 19,
    chucVu: "Bảo Vệ",
    luong: "1000$",
  },
  {
    name: "Hà",
    age: 20,
    chucVu: "Giám Đốc",
    luong: "3000$",
  },
];

function Read() {
  futureAcademyList.forEach(function (e) {
    console.log(
      `Tên-${e.name} \n Tuổi-${e.age} \n Chức Vụ-${e.chucVu} \n Lương-${e.luong}`
    );
  });
}

function checkName(name) {
  let findIndex = futureAcademyList.findIndex(function (el) {
    return el.name === name;
  });
  return findIndex;
}

let input = prompt("what do you want(C,R,U,D)").toUpperCase();
//Create
if (input === "C") {
  let name = prompt("Enter name");
  let findIndex = checkName(name);
  //Nếu không thấy
  if (findIndex < 0) {
    let age = prompt("Enter age");
    let chucVu = prompt("Enter chucVu");
    let luong = prompt("Enter luong");
    let newFutureAcademyList = {
      name,
      age,
      chucVu,
      luong,
    };
    futureAcademyList.push(newFutureAcademyList);
  } else console.log("Person already");
}

//Read
else if (input === "R") Read();
//Update
else if (input === "U") {
  let name = prompt("Enter name");
  //check name
  let findIndex = checkName(name);
  if (findIndex < 0) console.log("Person doesn't exist");
  let updateInput = prompt("Enter content update");
  if (updateInput === "Tuổi") {
    let age = prompt("Enter updated age");
    futureAcademyList[findIndex].age = age;
    Read();
  } else if (updateInput === "Chức Vụ") {
    let chucVu = prompt("Enter updated chucVu");
    futureAcademyList[findIndex].chucVu = chucVu;
    Read();
  } else if (updateInput === "Lương") {
    let luong = prompt("Enter updated luong");
    futureAcademyList[findIndex].luong = luong;
    Read();
  }
}

//Delete
else if (input == "D") {
  let name = prompt("Enter name");
  //check if name
  let findIndex = checkName(name);
  if (findIndex < 0) console.log("Contact doesn't exist");
  else {
    let deleteInput = prompt("Enter content delete");
    if (deleteInput === "Tuổi") {
      let age = prompt("Please Enter Delete age");
      futureAcademyList.splice(1, age);
      Read();
    } else if (deleteInput === "Chức Vụ") {
      let chucVu = prompt("Please Enter Delete chucVu");
      futureAcademyList.splice(1, chucVu);
      Read();
    } else if (deleteInput === "Lương") {
      let luong = prompt("Please Enter Delete luong");
      futureAcademyList.splice(1, luong);
      Read();
    }
  }
}

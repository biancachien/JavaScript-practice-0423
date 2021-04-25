//function

//基本型態=================================================
//宣告
// function addMoney() {
//   console.log(addMoney);
// }
// //執行
// addMoney();

//有參數的function=========================================
//宣告
// function addMoney(price1, price2, discount) {
//   console.log("price1:", price1);
//   console.log("price2:", price2);
//   console.log("discount:", discount);
//   console.log("total:", price1 + price2 - discount);
// }
// //執行
// //結帳頁面
// addMoney(2000, 100, 50);
// //購物車頁面
// addMoney(3000, 200, 100);

//有回傳值的function (return)===============================
// function addMoney(price1, price2, discount) {
//   let result = price1 + price2 - discount;
//   //return把回傳值丟出去function外面
//   return result;
// }

// //接住回傳值
// let total = addMoney(5000, 5000, 1000);
// console.log("total:", total);

//有回傳值的function (return) +if..else======================
// function addMoney(price1, price2, discount) {
//   let result = price1 + price2 - discount;
//   let message = "普通會員";

//   if (result >= 50000) {
//     message = "尊榮會員";
//     return message;
//   }
//   if (result >= 20000) {
//     message = "白金會員";
//     return message;
//   }

//   return message;
// }

// let msg = addMoney(10000, 20000, 5000);
// console.log("msg:", msg);

//建構函式(構造函數)function constructor=======================
// function createCard(initName) {
//   this.name = initName;
// }

// //new 建立或構造的意思
//建構物件
// const a1 = new createCard("小明");
// const a2 = new createCard("小明2");
// const a3 = new createCard("小明3");
// const a4 = new createCard("小明4");
// const a5 = new createCard("小明5");
// console.log(a1);
// console.log(a2);
// console.log(a3);
// console.log(a4);
// console.log(a5);



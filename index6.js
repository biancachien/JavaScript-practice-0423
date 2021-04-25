//JavaScript的class=======================================
// class Card {
//   constructor(initName) {
//     this.name = initName;
//   }
// }

// const c1 = new Card("bianca");
// console.log("c1", c1);
// console.log(c1.name);

//上面的class同下列寫法
// function createCard(initName) {
//   this.name = initName;
// }
// const a1 = new createCard("bianca");
// console.log(a1);

//JavaScript的this========================================
//this為當下誰執行函式就為誰
// class Card {
//   constructor(initName) {
//     this.name = initName;
//   }
//   //放一個function
//   hello() {
//     console.log("hello", this.name);
//   }
// }

// const c1 = new Card("bianca");
// c1.hello();

// //object裡有name會改變this變成a
// const a = { name: "AA" };
// a.hellooooo = c1.hello;
// a.hellooooo();

//this綁定class的作法==========================================
//第一種-bind
// class Card {
//     constructor(initName) {
//       this.name = initName;
//       //this綁定class的作法
//       this.hellooo=this.hello.bind(this)
//     }
//     //放一個function
//     hello() {
//       console.log("hello", this.name);
//     }
//   }

//   const c1 = new Card("bianca");
//   console.log('c1',c1)
//   c1.hellooo();

//   //object裡有name但不會被改變，因為上面的綁定
//   const a = { name: "AA" };
//   a.hellooooo = c1.hellooo;
//   a.hellooooo();

//   //第二種-箭頭函式
//   class Card {
//     constructor(initName) {
//       this.name = initName;
//     }
//     //用箭頭函式綁定this
//     hello = () => {
//       console.log("hello", this.name);
//     }
//   }

//   const c1 = new Card("bianca");
//   console.log('c1',c1)
//   c1.hello();

//   //object裡有name但不會被改變，因為上面的綁定
//   const a = { name: "AA" };
//   a.hellooooo = c1.hello;
//   a.hellooooo();

//繼承(extend)===============================================
//原型//父層
class Car {
  constructor(initName) {
    this.name = initName;
  }
  start() {
    console.log("車子啟動");
  }
}

class Porshe extends Car {
  constructor(namePorshe) {
    //用super來調用父層Car的constructor
    super(namePorshe);
  }

  start2() {
    //用super取得父層Car的內容，再做加工
    super.start();
    console.log("車子排氣");
  }

  start() {
    //直接蓋過父層Car的內容
    console.log("porshe車子啟動");
  }
}

const p1 = new Porshe("bianca的保時捷");
p1.start2();
p1.start();
console.log("name", p1.name);

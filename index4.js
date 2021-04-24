//for loop
// for (let i = 0; i < 10; i++) {}

//for loop 搭配 array
// let classA = [1, 2, 3];
// for (let i = 0; i < classA.length; i++) {
//   console.log("i:", classA[i]);
// }

//for loop 搭配 if..else
let classA = [100, 200, 300];
console.log(classA);
for (let i = 0; i < classA.length; i++) {
  if (i === 2) {
    classA[i] = 999;
  }
}

console.log(classA);

//for loop 搭配 array+object
const posts = [
  {
    name: "bianca",
    desc: "貼文1",
  },
  {
    name: "nick",
    desc: "貼文2",
  },
];

for (let i = 0; i < posts.length; i++) {
  if (i === 1) {
    let post = posts[i];
    console.log(post);
  }
}

//callback 回呼
window.addEventListener("load", function () {
  const p1 = document.getElementById("title");
  //innerText:在html上顯示文字
  p1.innerText = "訂閱";

  const b1 = document.getElementById("btn");
  b1.addEventListener("click", function () {
    console.log("點下去");
  });

  const box1 = document.getElementById("box");
  //innerHTML:在html上顯示HTML標籤內容
  box1.innerHTML = "<p>Test</p>";

  const in1 = document.getElementById("input1");
  in1.addEventListener("keyup", function (e) {
    console.log("e.target.value", e.target.value);
  });
});

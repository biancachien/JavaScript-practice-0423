const content = document.getElementById("content");
const date = document.getElementById("date");
const time = document.getElementById("time");
const addedBtn = document.getElementById("addedBtn");
const deletedBtn = document.getElementById("deletedBtn");
const list = document.getElementById("list");

const listContent = [];

function render() {
  //渲染頁面的list
  let htmlStr = "";

  listContent.forEach(function (item) {
    htmlStr =
      htmlStr +
      `
    <div class="item">
      <div>
        <p>內容：${item.content}</p>
        <p>時間：${item.date} ${item.time}</p>
      </div>
    </div>
    `;
  });

  list.innerHTML = htmlStr;
}

//按新增按鈕-新增一筆在最前面
addedBtn.addEventListener("click", function () {
  //unshift:塞一個值到最前面
  listContent.unshift({
    content: content.value,
    date: date.value,
    time: time.value,
  });
  //直接用上面的function render
  render();
});

//按刪除按鈕-刪除最後一筆
deletedBtn.addEventListener("click", function () {
  //shift:移除最後一個值
  listContent.shift();
  //直接用上面的function render
  render();
});

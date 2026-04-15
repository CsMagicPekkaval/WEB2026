const container = document.getElementById("container");

let text = "";

// ⭐ 一開始就先產生一次（很多人忘這個）
function init() {
  add_new_chars();
  render();
}

// 顯示
function render() {
  container.textContent = text;
}

// 隨機 a-z
function randomChar() {
  return String.fromCharCode(97 + Math.floor(Math.random() * 26));
}

// 加 1~3 個字
function add_new_chars() {
  let count = Math.floor(Math.random() * 3) + 1;

  for (let i = 0; i < count; i++) {
    text += randomChar();
  }
}

// keyup
document.addEventListener("keyup", function () {
  add_new_chars();
  render();
});

// ⭐ 啟動
init();
const container = document.getElementById("container");

// 連續打錯次數
let counter = 0;

// ⭐ 初始化（一開始就要有字）
container.textContent = add_new_chars(3);

// 隨機產生字串
function add_new_chars(x, randomMode = true) {
  let n = x;

  // 隨機 1~x
  if (randomMode) {
    n = Math.floor(Math.random() * x) + 1;
  }

  let str = "";
  for (let i = 0; i < n; i++) {
    str += String.fromCharCode(97 + Math.floor(Math.random() * 26));
  }

  return str;
}

// keyup 事件
document.addEventListener("keyup", function (e) {
  let text = container.textContent;
  let firstChar = text.substring(0, 1);

  // ✅ 按對
  if (e.key === firstChar) {
    container.textContent = text.substring(1);
    counter = 0;
  } 
  // ❌ 按錯
  else {
    counter++;

    // ⭐ 連錯 3 次 → 額外 +3 個字
    if (counter >= 3) {
      container.textContent += add_new_chars(3, false);
      counter = 0;
    }
  }

  // ⭐ 每次都要加 1~3 個字
  container.textContent += add_new_chars(3);
});
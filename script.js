document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault();  // 阻止默认提交，防止 405 错误

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // 假设用户名是 "admin"，密码是 "1234"
  if (username === "admin" && password === "1234") {
      alert("登录成功！");
      window.location.href = "dashboard.html";  // 成功后跳转
  } else {
      alert("用户名或密码错误，请重试！");
  }
});
// 渲染产品列表
function renderProductList() {
  const sortedProducts = [...new Set(products)].sort(); // 去重并排序
  const productList = document.getElementById("productList");
  productList.innerHTML = ""; // 清空列表

  sortedProducts.forEach((product) => {
    const li = document.createElement("li");
    const a = document.createElement("a");

    // 跳转到 models/ 目录下的型号详情页面
    a.href = `models/${product.toLowerCase()}.html`;
    a.textContent = product;

    li.appendChild(a);

    // **改动**：默认显示所有产品
    li.style.display = "list-item"; 
    productList.appendChild(li);
  });
}

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

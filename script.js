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
 // 产品列表
    const products = [
    "MSF8302GR", "MSF8308GR", "MSF17GR-NTCV", "MSF3610GR", "MSF3615GR",
      "MSF8301GR",  "MSF8302GR", 
      "MSF8303GR", "MSF8304GR", 
      "MSF8305GR",  "MSF8306GR", 
      "MSF8307GR",  "MSF8308GR", 
      "test","MBF15FSGR",
"MBF15RSGR",
"MBF8001GR",
"MBF8002GR",
"MBF8003GR",
"MBF8004GR",
"MBF8005GR",
"MBF8006GR",
"MBF8007GR",
"MBF8008GR",
"MBF8010GR",
"MBF8011GR",
"MBF8129GR",
"MBF8501GR",
"MBF8502GR",
"MBF8503GR",
"MBF8504GR",
"MBF8505GR",
"MBF8506GR",
"MBF8507GR",
"MBF8508GR",
"MBF8519GR",
"MBF8520GR",
"MBF8531GR",
"MBF8532GR",
"MCF8701GR",
"MCF8703ES",
"MCF8703GR",
"MCF8704GR",
"MCF8705GR",
"MCF8707GR",
"MCF8708GR",
"MCF8709GR",
"MCF8720GR",
"MCF8721ES",
"MCF8721GR",
"MCF8722GR",
"MCF8723GR",
"MCF8724GR",
"MCF8725GR",
"MCF8726GR",
"MCF8727GR",
"MCF8728GR",
"MCF8729GR",
"MCF8732GR",
"MCF8733GR",
"MGF24FGR",
"MGF24RGR",
"MGF36FGR",
"MGF36RGR",
"MGF44GR",
"MGF67GR",
"MGF8401GR",
"MGF8402GR",
"MGF8403GR",
"MGF8404GR",
"MGF8405GR",
"MGF8406GR",
"MGF8407GR",
"MGF8408GR",
"MGF8409GR",
"MGF8410GR",
"MGF8412GR",
"MGF8413GR",
"MGF8414GR",
"MGF8415GR",
"MGF8420GR",
"MGF8423GR",
"MGF8428GR",
"MGF8448GR",
"MGF8450GR",
"MGF8451GR",
"MGF8452GR",
"MGF8453GR",
"MGF8454GR",
"MPF8201GR",
"MPF8202GR",
"MPF8203GR",
"MBB23GGR",
"MBB23GR",
"MBB48GGR",
"MBB48GR",
"MBB59GGR",
"MBB59GR",
"MBB69GGR",
"MBB69GR",
"MBB90GGR",
"MBB90GR",
"MBC24GR",
"MBC36GR",
"MBC50GR",
"MBC65GR",
"MBC80GR",
"MBC95GR",
"MKC23GR",
"MKC58GR",
"MKC68GR",
"MKC90GR",
"SBB48GGR",
"SBB48GR",
"SBB48SGGR",
"SBB59GGR",
"SBB59GR",
"SBB69GGR",
"SBB69GR",
"SBB69SGGR",
"SBB90GGR",
"YR140-AP-161",
"YR280-AP-161",
"YR450-AP-161",
"YR450S-AP-161",
"YR800-AP-261",
"ATFS-35ES",
"ATFS-40",
"ATFS-40ES",
"ATFS-50",
"ATFS-50ES",
"ATFS-75",
"ATFS-75ES",
"ATTG-24",
"ATTG-36",
"ATTG-48",
"ATO-10B",
"ATO-12G4B",
"ATO-24G",
"ATO-24G2B",
"ATO-24G6B",
"ATO-2B24G",
"ATO-2B48G",
"ATO-36G",
"ATO-36G4B",
"ATO-48G2B",
"ATO-4B",
"ATO-4B12G",
"ATO-4B36G",
"ATO-6B",
"ATO-6B24G",
"ATMG-24",
"ATMG-36",
"ATMG-48",
"ATSP-18-1",
"ATSP-18-2 ",
"YR140-AP-161",
"YR280-AP-161",
"YR450-AP-161",
"YR450S-AP-161",
"YR800-AP-261"
    ];
// 渲染产品列表
function renderProductList() {
  const productList = document.getElementById("productList");
  productList.innerHTML = ""; // 清空列表

  products.forEach((product) => {
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.href = `${product.toLowerCase()}.html`; // 跳转到产品详情页面
    a.textContent = product;
    li.appendChild(a);
    // ⚠️ 让列表默认可见，否则搜索时不会出现
    li.style.display = "list-item"; 

    productList.appendChild(li);
  });
}

// 搜索功能
function searchProduct() {
  const input = document.getElementById("searchInput").value.toUpperCase();
  const listItems = document.querySelectorAll("#productList li");

  listItems.forEach((item) => {
    const text = item.textContent || item.innerText;
   // 匹配关键字时显示，否则隐藏
   item.style.display = text.toUpperCase().includes(input) ? "list-item" : "none";
  });
}

// 关闭公告栏
function closeAnnouncement() {
  document.getElementById("announcementBar").style.display = "none";
}

// 初始化产品列表
renderProductList();

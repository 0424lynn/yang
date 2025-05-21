document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");

 


  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault(); // 阻止默认提交，防止 405 错误

      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;

      // 修改用户名和密码验证，添加新的admin/4321账户
      if (username === "admin" && password === "1234") {
        // 普通管理员账户
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("userRole", "normalAdmin");
        localStorage.setItem("lastActivityTime", Date.now());
        window.location.href = "dashboard.html";
      } else if (username === "admin" && password === "4321") {
        // 超级管理员账户（您的专用账户）
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("userRole", "superAdmin");
        localStorage.setItem("lastActivityTime", Date.now());
        window.location.href = "dashboard.html";
      } else {
        alert("Username or password is incorrect. Please try again!");
      }
    });
  }

  // **📌 4️⃣ 让 `dashboard.html` 只能在登录后访问**
  if (window.location.pathname.includes("dashboard.html")) {
    const isLoggedIn = localStorage.getItem("loggedIn");

    if (!isLoggedIn) {
      alert("Please log in first!");
      window.location.href = "index.html"; // **未登录则跳转回 `login.html`**
    }

    // **📌 记录用户活动时间**
    function updateActivityTime() {
      localStorage.setItem("lastActivityTime", Date.now());
    }

    // 监听用户操作（鼠标、键盘）
    document.addEventListener("mousemove", updateActivityTime);
    document.addEventListener("keydown", updateActivityTime);

    // **📌 5️⃣ 定时检查是否超时（每 1 分钟检查一次）**
    setInterval(function () {
      const lastActivityTime = localStorage.getItem("lastActivityTime");
      const currentTime = Date.now();

      if (lastActivityTime && currentTime - lastActivityTime > 3600000) {
        // 超过 1 小时（3600000 毫秒）
        alert("Session expired. Please log in again.");
        localStorage.removeItem("loggedIn"); // 清除登录状态
        localStorage.removeItem("lastActivityTime"); // 清除时间记录
        window.location.href = "index.html"; // 重新跳转到登录页
      }
    }, 60000); // 每 1 分钟检查一次

    // **📌 6️⃣ 退出登录功能**
    const logoutButton = document.getElementById("logout");
    if (logoutButton) {
      logoutButton.addEventListener("click", function () {
        localStorage.removeItem("loggedIn"); // 清除登录状态
        localStorage.removeItem("lastActivityTime"); // 清除时间记录
        alert("You have logged out.");
        window.location.href = "index.html"; // 跳转回登录页
      });
    }
  }
});

 // 产品列表
    const products = [
    "MSF8302GR", "MSF8308GR", "MSF17GR-NTCV", "MSF3610GR", "MSF3615GR",
      "MSF8301GR",  "MSF8302GR", 
      "MSF8303GR", "MSF8304GR", 
      "MSF8305GR",  "MSF8306GR", 
      "MSF8307GR", 
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
"HD350-AP-161",
"YR450-AP-161",
"YR450S-AP-161",
"YR800-AP-261",
"ATFS-40",
"ATFS-50",
"ATFS-35ES",
"ATFS-75",
"ATTG-24",
"ATTG-36",
"ATTG-48",
"ATCM-36",
"ATSB-36",
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
"ATSP-18-2",
"AGR-10B",
"AGR-24G",
"AGR-2B24GL",
"AGR-2B24GR",
"AGR-36G",
"AGR-4B",
"AGR-4B12GL",
"AGR-4B12GR",
"AGR-4B36GR",
"AGR-6B",
"AGR-6B24GR",
"AGR-8B",

    ];
// **📌 渲染产品列表**
function renderProductList() {
  const productList = document.getElementById("productList");

  // **防止 productList 为空**
  if (!productList) {
    console.error("❌ `productList` 未找到，检查 HTML 里是否有 `<ul id='productList'></ul>`");
    return;
  }

  productList.innerHTML = ""; // 清空列表

  products.forEach((product) => {
    const li = document.createElement("li");
    const a = document.createElement("a");

    // **确保 HTML 文件名和产品名一致（保持大写）**
    a.href = `${product}.html`;
    a.textContent = product;
    a.target = "_blank"; // 在新标签页打开

    li.appendChild(a);
    li.style.display = "none"; // **默认隐藏所有产品**
    productList.appendChild(li);
  });

  console.log("✅ `renderProductList()` 执行成功，产品数量:", products.length);
}

// **📌 搜索功能**
function searchProduct() {
  const input = document.getElementById("searchInput");

  if (!input) {
    console.error("❌ `searchInput` 未找到，检查 HTML 里是否有 `<input id='searchInput'>`");
    return;
  }

  const filter = input.value.toUpperCase();
  const listItems = document.querySelectorAll("#productList li");

  let matchFound = false;
  listItems.forEach((item) => {
    const text = item.textContent || item.innerText;
    if (text.toUpperCase().includes(filter) && filter.length > 0) {
      item.style.display = "list-item";
      matchFound = true;
    } else {
      item.style.display = "none"; // **输入为空时隐藏**
    }
  });

  if (!matchFound && filter.length > 0) {
    console.warn(`⚠️ 没有找到匹配的产品型号: "${filter}"`);
  }
}

//序列号检查
function checkSerialNumber() {
  console.log("🔍 Running checkSerialNumber() from script.js...");

  let inputSerial = document.getElementById("serialInput").value.trim();
  console.log(`🔍 Step 1: Raw inputSerial: '${inputSerial}'`);
  const feedback = document.getElementById("serialFeedback");

  // Clear previous feedback
  feedback.innerHTML = "";

  // 新增的总长度检查
  const expectedLength = 18;
  if (inputSerial.length > expectedLength) {
    feedback.innerHTML = `<span style='color: red;'>❌ Serial number is too long. Expected ${expectedLength} characters, but found ${inputSerial.length}.</span><br>`;
  } else if (inputSerial.length < expectedLength) {
    feedback.innerHTML += `<span style='color: red;'>❌ Serial number is too short. Expected ${expectedLength} characters, but found ${inputSerial.length}.</span><br>`;
  }

  if (!inputSerial) {
    feedback.innerHTML += `<span style='color: red;'>❌ Please enter a serial number.</span>`;
    console.warn("⚠️ No serial number entered.");
    return;
  }

  let formattedResult = "";
  let isCorrect = true;
  let exceededPart = "";
  let extraChars = "";

  // ✅ **解析 Product Model (7 位)**
  let productModel = inputSerial.substring(0, 7);
  let rest = inputSerial.substring(7);

  let aIndex = rest.indexOf("A");
  if (aIndex === -1) {
    feedback.innerHTML += `<span style='color: red;'>❌ Invalid Serial Number: Model Number- Too Short) ❌ Or missing "A".</span>`;
    return;
  }

  let beforeA = rest.substring(0, aIndex);
  if (beforeA.length > 0) {
    exceededPart = "Product Model";
    extraChars = beforeA;
  }
  rest = rest.substring(aIndex);

  // ✅ **解析 Customer Code**
  let match = rest.match(/^A([A-Z]{0,2})([A-Z]*)/);
  let customerCode = match ? "A" + match[1] : "";
  let extraCustomer = match ? match[2] : "";
  
  // 客户编码要求：如果没有AUS或CAJ，直接报错；如果客户编码长度大于3，报错
  if (!/^(AUS|CAJ)$/.test(customerCode)) {
    feedback.innerHTML += `<span style='color: red;'>❌ Invalid Customer Code: Must include 'AUS' no more than 3 characters long.</span>`;
    return;
  }
  if (customerCode.length > 3) {
    feedback.innerHTML += `<span style='color: red;'>❌ Invalid Customer Code: Must include 'AUS' no more than 3 characters long.</span>`;
    return;
  }

  rest = rest.substring(customerCode.length + extraCustomer.length);

  // ✅ **解析 Configuration**
  match = rest.match(/^([0-9]*)([^CTNOP]*)/);
  let configuration = match ? match[1] : "";
  let extraConfiguration = match ? match[2] : "";

  if (configuration.length > 1) {
    extraConfiguration = configuration.substring(1) + extraConfiguration;
    configuration = configuration.substring(0, 1);
  }

  rest = rest.substring(configuration.length + extraConfiguration.length);

  // ✅ **解析 Production Location**
  let productionLocation = "";
  let extraLocation = "";

  // 只取第一个字母作为生产地字符（T 或 C）
  if (/^[TC]$/.test(rest[0])) {
    productionLocation = rest[0]; // 取第一个字符作为生产地
    rest = rest.substring(1); // 移除生产地字符
  } else {
    productionLocation = ""; // 如果没有 T 或 C，生产地为空
  }

  // ✅ **解析 Production Date**
  let productionDate = rest.substring(0, 3); // 生产日期的前三个字符
  let extraDate = "";

  if (productionDate.length > 3) {
    extraDate = productionDate.substring(3); // 处理超出的部分
    productionDate = productionDate.substring(0, 3);
    exceededPart = "Production Date";
  }
  rest = rest.substring(3);

  // ✅ **解析 Daily Production Count**
  let dailyProductionCount = rest.substring(0, 3);
  let extraCount = "";

  if (dailyProductionCount.length > 3) {
    extraCount = dailyProductionCount.substring(3); // 处理超出的部分
    dailyProductionCount = dailyProductionCount.substring(0, 3);
    exceededPart = "Daily Production Count";
  }

  if (/[^0-9]/.test(dailyProductionCount)) {
    exceededPart = "Daily Production Count";
    extraCount += dailyProductionCount.replace(/[0-9]/g, "");
  }

  let parts = [
    { name: "Product Model", value: productModel, extra: extraChars },
    { name: "Customer Code", value: customerCode, extra: extraCustomer },
    { name: "Configuration", value: configuration, extra: extraConfiguration },
    { name: "Production Location", value: productionLocation, extra: extraLocation },
    { name: "Production Date", value: productionDate, extra: extraDate },
    { name: "Daily Production Count", value: dailyProductionCount, extra: extraCount }
  ];

  parts.forEach((part) => {
    let displayPart = "";
    let errorMessage = "";
    let correctPart = part.value;
    let extraPart = part.extra || "";

    if (extraPart.length > 0) {
      displayPart = `<span style='color: green;'>${correctPart}</span>
                   <span style='color: red; background: yellow;'>${extraPart}</span>`;
      errorMessage = `<small style="color:red;">(${part.name} - Too Long) ❌ Must be exactly ${correctPart.length} characters.</small>`;
      isCorrect = false;
    } else if (!correctPart || correctPart.includes("_")) {
      displayPart = `<span style='color: red; font-weight: bold;'>${correctPart.padEnd(correctPart.length, "_")}</span>`;
      errorMessage = `<small style="color:red;">(${part.name} - Too Short) ❌ Must be exactly ${correctPart.length} characters.</small>`;
      isCorrect = false;
    } else {
      displayPart = `<span style='color: green; font-weight: bold;'>${correctPart}</span>`;
      errorMessage = `<small style="color:green;">(${part.name}) ✅</small>`;
    }

    formattedResult += displayPart + " " + errorMessage + "<br>";
  });

  feedback.innerHTML += `Checked Serial Number:<br>${formattedResult}`;
  feedback.innerHTML += isCorrect
    ? "<br><span style='color: green; font-size: 18px;'>✅ Serial number is correct.</span>"
    : "<br><span style='color: red; font-size: 18px;'>❌ Serial number contains errors.</span>";

  console.log("✅ Serial number check completed.");
}

document.addEventListener("DOMContentLoaded", function () {
  console.log("✅ script.js loaded and waiting for button click...");
  
  // 初始化产品列表
  renderProductList();
  
  // 添加序列号检查按钮事件监听
  const checkSerialBtn = document.getElementById("checkSerialBtn");
  if (checkSerialBtn) {
    checkSerialBtn.addEventListener("click", checkSerialNumber);
  }
  
  // 添加退出登录按钮事件监听
  const logoutBtn = document.getElementById("logout");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", function() {
      // 清除登录状态
      localStorage.removeItem("loggedIn");
      localStorage.removeItem("userRole");
      localStorage.removeItem("lastActivityTime");
      // 跳转到登录页面
      window.location.href = "index.html";
    });
  }
  
  // 检查用户权限并显示/隐藏地图按钮
  const userRole = localStorage.getItem("userRole");
  const mapButton = document.getElementById("mapButton");
  
  if (mapButton && userRole === "superAdmin") {
    // 只有超级管理员(admin/4321)才能看到地图按钮
    mapButton.style.display = "inline-block";
  }
  
  // 检查用户权限并显示/隐藏地图链接
  const mapSection = document.getElementById("mapSection");
  
  if (mapSection && userRole === "superAdmin") {
    // 只有超级管理员(admin/4321)才能看到地图
    mapSection.style.display = "block";
  }
});

// **📌 搜索功能**
function searchProduct() {
  const input = document.getElementById("searchInput");

  if (!input) {
    console.error("❌ `searchInput` 未找到，检查 HTML 里是否有 `<input id='searchInput'>`");
    return;
  }

  const filter = input.value.toUpperCase();
  const listItems = document.querySelectorAll("#productList li");

  let matchFound = false;
  listItems.forEach((item) => {
    const text = item.textContent || item.innerText;
    if (text.toUpperCase().includes(filter) && filter.length > 0) {
      item.style.display = "list-item";
      matchFound = true;
    } else {
      item.style.display = "none"; // **输入为空时隐藏**
    }
  });

  if (!matchFound && filter.length > 0) {
    console.warn(`⚠️ 没有找到匹配的产品型号: "${filter}"`);
  }
}

// 登录表单处理
const loginForm = document.getElementById("login-form");
if (loginForm) {
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // 阻止默认提交

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // 用户名和密码验证
    if (username === "admin" && password === "1234") {
      // 普通管理员账户
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("userRole", "normalAdmin");
      localStorage.setItem("lastActivityTime", Date.now());
      window.location.href = "dashboard.html";
    } else if (username === "admin" && password === "4321") {
      // 超级管理员账户（您的专用账户）
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("userRole", "superAdmin");
      localStorage.setItem("lastActivityTime", Date.now());
      window.location.href = "dashboard.html";
    } else if (username === "user" && password === "1234") {
      // 普通用户账户
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("userRole", "user");
      localStorage.setItem("lastActivityTime", Date.now());
      window.location.href = "dashboard.html";
    } else {
      alert("用户名或密码错误，请重试！");
    }
  });
}

// **📌 关闭公告栏**
function closeAnnouncement() {
  const announcementBar = document.getElementById("announcementBar");
  if (announcementBar) {
    announcementBar.style.display = "none";
  }
}

// **📌 初始化**
document.addEventListener("DOMContentLoaded", function () {
  renderProductList();
});
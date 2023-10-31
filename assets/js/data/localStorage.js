// Handle save data user for register
function saveUserToLocalStorage(username, password) {
  // Lấy dữ liệu từ Local Storage (nếu có)
  let userArr = JSON.parse(localStorage.getItem("USER")) || [];

  let userObj = {
    username: username,
    password: password,
  };

  // Thêm userObj mới vào mảng userArr
  userArr.push(userObj);

  // Lưu mảng userArr vào Local Storage
  localStorage.setItem("USER", JSON.stringify(userArr));
}

// Handle is 'isLogin' for login
function checkUser(user) {
  const userIsLogin = localStorage.setItem("userIsLogin", JSON.stringify(user));
}

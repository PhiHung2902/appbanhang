const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = form.username.value;
  const password = form.password.value;
  const confirm_password = form.confirm_password.value;
  if (existUser(username) == false) return;
  if (
    validation(username, password, confirm_password) &&
    isStrongPassword(password)
  ) {
    saveUserToLocalStorage(username, password, false);
    alert("Register Successfully !!!");
    window.location.href = "login.html";
  }
});

function validation(username, password, confirm_password) {
  if (password === confirm_password) {
    return true;
  } else {
    alert("password is not confirm !");
    return false;
  }
}

function isStrongPassword(password) {
  // Kiểm tra xem mật khẩu có khoảng trắng ở đầu
  if (/\s/.test(password[0])) {
    alert("Mật khẩu không đúng định dạng (khoảng trắng đầu dòng)");
    return false;
  }

  // Kiểm tra độ dài của mật khẩu (ít nhất 8 ký tự)
  if (password.length < 5) {
    alert("Độ dài của mật khẩu ít nhất 8 ký tự");
    return false;
  }

  // Kiểm tra xem mật khẩu có chứa ít nhất một ký tự số
  if (!/\d/.test(password)) {
    alert("Mật khẩu có chứa ít nhất một ký tự số");
    return false;
  }

  return true;
}
function existUser(username) {
  const userStorage = JSON.parse(localStorage.getItem("USER"));
  const userExistsInUsers1 = listUser.some((user1) =>
    user1.username.includes(username)
  );
  const userExistsInUsers2 = userStorage.some((user2) =>
    user2.username.includes(username)
  );

  if (userExistsInUsers1) {
    alert("Tên tài khoản đã tồn tại.");
    return false;
  }

  if (userExistsInUsers2) {
    alert("Tên tài khoản đã tồn tại.");
    return false;
  }
  return true;
}

const userStorage = JSON.parse(localStorage.getItem("USER"));
const isLogin = JSON.parse(localStorage.getItem("isLogin"));
const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = form.username.value;
  const password = form.password.value;
  if (username == "admin" && password == "admin") {
    window.location.href = "admin.html";
    return;
  }
  authencation(username, password);
  localStorageAuthencation(username, password);
});

function authencation(username, password) {
  listUser.forEach((user) => {
    if (user.username === username && user.password === password) {
      JSON.stringify(localStorage.setItem("isLogin", true));
      checkUser(user);
      console.log(userStorage);
      alert("Login successfully 1");
      window.location.href = "index.html";
      return;
    }
  });
}

function localStorageAuthencation(username, password) {
  userStorage.forEach((user, index) => {
    if (user.username === username && user.password === password) {
      localStorage.setItem("isLogin", "true");
      checkUser(user);
      alert("Login successfully 2");
      window.location.href = "index.html";
      return;
    }
  });
}

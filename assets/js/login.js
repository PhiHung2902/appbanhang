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
  // if (localStorageAuthencation(username, password)) {
  //   localStorageAuthencation(username, password);
  // } else {
  //   authencation(username, password);
  // }
  const userExistsInUsers2 = listUser.some(
    (user1) => user1.username === username
  );
  if (userExistsInUsers2) {
    authencation(username, password);
  } else {
    localStorageAuthencation(username, password);
  }
  console.log(userExistsInUsers2);
});

function authencation(username, password) {
  let flag = false;
  for (let i = 0; i < listUser.length; i++) {
    const element = listUser[i];
    if (element.username === username && element.password == password) {
      flag = true;
      JSON.stringify(localStorage.setItem("isLogin", true));
      checkUser(listUser[i]);
      window.location.href = "index.html";
    }
  }
  if (flag) {
    alert("Login successfully 1");
  } else {
    alert("Login fail 1");
  }
  return flag;
}

function localStorageAuthencation(username, password) {
  let flag = false;
  for (let i = 0; i < userStorage.length; i++) {
    const element = userStorage[i];
    if (element.username === username && element.password === password) {
      flag = true;
      localStorage.setItem("isLogin", "true");
      checkUser(userStorage[i]);
      window.location.href = "index.html";
    }
  }
  if (flag) {
    alert("Login successfully 2");
  } else {
    alert("Login fail 2");
  }
  return flag;
}

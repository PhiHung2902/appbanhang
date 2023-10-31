const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = form.username.value;
  const password = form.password.value;
  const confirm_password = form.confirm_password.value;
  if (validation(username, password, confirm_password)) {
    saveUserToLocalStorage(username, password, false);
    alert("Register Successfully !!!");
    window.location.href = "login.html";
  } else {
    alert("password is not confirm !");
  }
});

function validation(username, password, confirm_password) {
  if (password === confirm_password) {
    return true;
  } else {
    return false;
  }
}

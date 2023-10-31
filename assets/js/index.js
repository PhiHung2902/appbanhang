const infoUser = JSON.parse(localStorage.getItem("userIsLogin"));
const navAction = document.querySelector(".nav_action");
const bottomBar = document.querySelector(".bottom-bar");
const listBar = document.querySelector(".bar-list");
const barUser = document.querySelector(".bar-user");

localStorage.setItem("PRODUCT", JSON.stringify(products));
const render = () => {
  let isLogin = JSON.parse(localStorage.getItem("isLogin"));
  if (isLogin == true) {
    renderNavaction();
    renderBarUser();
    bottomBar.classList.remove("active");
  } else {
    const htmls = `<div class="nav_button register">
    <button class="nav_action-btn register-btn"><a href="register.html">REGISTER</a></button>
  </div>
  <div class="nav_button login">
    <button class="nav_action-btn login-btn">
      <a href="login.html">LOGIN</a>
    </button>
  </div>`;
    navAction.innerHTML = htmls;
    bottomBar.classList.add("active");
    barUser.style.display = "none";
  }
};
const handleSignOut = () => {
  JSON.stringify(localStorage.setItem("isLogin", "false"));
  localStorage.removeItem("CART");
  window.location.href = "index.html";
  render();
};
render();

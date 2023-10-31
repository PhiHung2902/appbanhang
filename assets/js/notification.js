const overlay = document.querySelector(".overlay");
// NO LOGIN
const isLogin = JSON.parse(localStorage.getItem("isLogin"));

// ADD TO CART
function renderNotificationAddToCart() {
  overlay.classList.add("active");
  if (isLogin) {
    const htmls = `<div class="message_box">
  <div class="overlay_header success">ADD PRODUCT SUCCESSFULLY</div>
  <div class="overlay_desciption">
  You have successfully added the product to your cart, please check it
  again!
  </div>
  <button class="overlay_button success">I UNDERSTAND</button>
  </div>`;
    overlay.innerHTML = htmls;
  } else {
    const htmls = `<div class="message_box">
    <div class="overlay_header fail">ADD PRODUCT FAILED</div>
    <div class="overlay_desciption">
    You need to log in to add products to your cart!
    </div>
    <button class="overlay_button fail">I UNDERSTAND</button>
    </div>`;
    overlay.innerHTML = htmls;
  }
}
const closeOverlay = () => {
  overlay.classList.remove("active");
};

document.addEventListener("click", (event) => {
  if (event.target.matches(".overlay_button")) {
    closeOverlay();
  }
});

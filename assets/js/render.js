const scroolSmooth = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const renderBarUser = () => {
  const htmls = `
    <a href="#" class="bar-item_link bar-user_link">
      <div class="bar-user_img">
        <img src="./assets/img/user.jpg" alt="bar-user" />
      </div>
      <span>${infoUser.username}</span>
    </a>`;
  barUser.innerHTML = htmls;
};

const renderNavaction = () => {
  const htmls = `
  <div class="action_item bell">
    <i class="fa-solid fa-bell"></i>
  </div>
  
  <div class="action_item user">
    <i class="fa-solid fa-user"></i>
    <ul class="user_popup">
      <li class="popup_item">
        <p>Hello! ${infoUser.username}</p>
      </li>
      <li class="popup_item-line"></li>
      <li class="popup_item">
        <p>Sản phẩm yêu thích</p>
        <i class="fa-solid fa-heart"></i>
      </li>
      <li class="popup_item" onclick="ordersFunction()">
        <p>Đơn hàng của bạn</p>
        <i class="fa-regular fa-file-lines"></i>
      </li>
      <li class="popup_item">
        <p>Trung tâm hỗ trợ</p>
        <i class="fa-regular fa-circle-question"></i>
      </li>
    </ul>
  </div>`;
  navAction.innerHTML = htmls;
};

const handleSideBarHome = () => {
  window.location.href = "index.html";
};

const barItem = document.querySelectorAll(".bar-item");

const barItemActive = (value) => {
  barItem.forEach((item, index) => {
    if (value == index) {
      document.querySelector(".bar-item.active").classList.remove("active");
      item.classList.add("active");
      console.log(this);
      return;
    }
    item.addEventListener("click", () => {
      document.querySelector(".bar-item.active").classList.remove("active");
      item.classList.add("active");
    });
  });
};
barItemActive();

/// Render ALL PRODUCT PAGE
const cartPage = document.querySelector(".cart-page");
const numberPage = document.querySelector(".number_page");
const slidePage = document.querySelector(".slide");
const productPage = document.querySelector(".product-page");
const ordersPage = document.querySelector(".orders-page");
const titlePage = document.querySelector(".title-product");

const renderProductPage = (value) => {
  scroolSmooth();
  product.innerHTML = "";
  cartPage.classList.add("active");
  slidePage.classList.add("active");
  numberPage.classList.add("active");
  ordersPage.classList.add("active");
  if (!value) {
    titlePage.innerText = "TẤT CẢ SẢN PHẨM";
    const htmls = products.map((item, index) => {
      const formattedTotal = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(item.price);
      return `<div class="product-item">
          <div class="product-img">
            <img src="${item.img}" alt="" />
          </div>
          <div class="product-detail">
            <h3 class="product-name">${item.name}</h3>
            <div class="product-price">
              <span class="">${formattedTotal}</span>
            </div>
            <div class="product-action">
              <button class="detail-btn" data = ${index} onclick="detailProduct()">THÔNG TIN</button>
              <button class="addtocart-btn" data=${
                item.id - 1
              } onclick="addToCart()">THÊM GIỎ HÀNG</button>
            </div>
          </div>
        </div>`;
    });
    product.innerHTML = htmls.join("");
    product.classList.remove("active");
  } else {
    if (value == null) {
      const htmls = `<h1>Không tìm thấy sản phẩm nào</h1>`;
      product.innerHTML = htmls;
      product.classList.remove("active");
    } else {
      const htmls = value.map((item, index) => {
        titlePage.innerText = "SEARCH RESULTS";
        const formattedTotal = new Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND",
        }).format(item.price);
        return `<div class="product-item">
            <div class="product-img">
              <img src="${item.img}" alt="" />
            </div>
            <div class="product-detail">
              <h3 class="product-name">${item.name}</h3>
              <div class="product-price">
                <span class="">${formattedTotal}</span>
              </div>
              <div class="product-action">
                <button class="detail-btn" data = ${index} onclick="detailProduct()">THÔNG TIN</button>
                <button class="addtocart-btn" data=${
                  item.id - 1
                } onclick="addToCart()">THÊM GIỎ HÀNG</button>
              </div>
            </div>
          </div>`;
      });
      product.innerHTML = htmls.join("");
      product.classList.remove("active");
    }
  }
};
document.addEventListener("click", (event) => {
  if (event.target.matches(".addtocart-btn")) {
    addToCart();
  }
});
//// Render CART PAGE
const headerCart = document.querySelector(".header-cart");
const cartPlaceHolder = document.querySelector(".cart_place-order");
const cartContent = document.querySelector(".cart-content");
const renderCartPage = () => {
  scroolSmooth();
  let cartLocal = JSON.parse(localStorage.getItem("CART"));
  cartPage.classList.remove("active");
  ordersPage.classList.add("active");
  slidePage.classList.add("active");
  numberPage.classList.add("active");
  product.classList.add("active");
  detailPage.classList.add("active");
  wrapperProd.classList.remove("active");
  titlePage.innerText = "GIỎ HÀNG";
  if (cartLocal === null) {
    headerCart.classList.add("active");
    cartPlaceHolder.classList.add("active");
    const htmls = `<div class="no_product-cart">
    <div class="no_product-img">
      <img src="./assets/img/cart-img.png" alt="cart" />
    </div>
    <h2 class="no_product-title">
      KHÔNG CÓ SẢN PHẨM NÀO TRONG GIỎ HÀNG CỦA BẠN
    </h2>
    <a href="index.html" class="no_product-link">SHOPPING NGAY</a>
  </div>`;
    cartContent.innerHTML = htmls;
  } else {
    headerCart.classList.remove("active");
    cartPlaceHolder.classList.remove("active");
    const htmls = cartLocal.map((item, index) => {
      const formattedTotal = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(item.price);
      return `<div class="cart-item" data="${index}">
      <div class="cart-product_info">
        <div class="cart-product_img">
          <img src="${item.img}" alt="" />
        </div>
        <div class="cart-product_name">
          ${item.name}
        </div>
      </div>
  
      <div class="cart-product_quanlity">
        <input class="quanlity_product" id="quanlity_product" type="number" value="1" min="1" max="99"/>
      </div>
  
      <div class="cart-product_price">
        <span>${formattedTotal}</span>
      </div>
  
      <div class="cart-product_action">
        <button onclick="deleteProduct(${index})">Delete</button>
      </div>
    </div>`;
    });
    cartContent.innerHTML = htmls.join("");
  }
};

//// ORDERS
const renderWhenClickBuy = (value) => {
  const cartContent = document.querySelector(".cart-content");
  const cartPlaceOrder = document.querySelector(".cart_place-order");
  const headerCart = document.querySelector(".header-cart");
  cartContent.innerHTML = `<h1 class="bought_render">Thank you for your trust</h1>`;
  cartPlaceOrder.classList.add("active");
  headerCart.classList.add("active");
  scroolSmooth();
};

// tính tổng tiền
const totalPrice = document.querySelector(".total_price");
const renderTotalPrice = (data, element) => {
  // const productCart = JSON.parse(localStorage.getItem("CART"));
  const productCart = JSON.parse(localStorage.getItem(data));
  if (productCart == null) {
    return;
  }
  const total = productCart.reduce(
    (total, productCart) => total + productCart.price,
    0
  );
  const formattedTotal = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(total);
  const htmls = `<span class="total">Tổng tiền:</span>
  <span class="price">${formattedTotal}</span>`;
  element.innerHTML = htmls;
};

const searchInput = document.querySelector(".search_input");

const searchButton = document.querySelector(".search_icon");
let searchArr = [];
searchButton.addEventListener("click", () => {
  detailPage.classList.add("active");
  wrapperProd.classList.remove("active");
  searchProduct(searchInput.value.toUpperCase());
  renderProductPage(searchArr);
  searchArr = [];
});

function searchProduct(value) {
  products.filter((item, index) => {
    if (item.name.toUpperCase().includes(value)) {
      searchArr.push(item);
    }
  });
}

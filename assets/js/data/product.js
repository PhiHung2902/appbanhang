const products = [
  {
    id: 1,
    name: "Iphone 8 64GB LL/A",
    price: 2990000,
    img: "./assets/img/product/iphone8.jpg",
  },
  {
    id: 2,
    name: "Iphone 8 Plus 128GB 99%",
    price: 3590000,
    img: "./assets/img/product/iphone8plus.jpg",
  },
  {
    id: 3,
    name: "Iphone X 256GB 99%",
    price: 5290000,
    img: "./assets/img/product/iphonex.jpg",
  },
  {
    id: 4,
    name: "Iphone XS 512GB 99%",
    price: 5890000,
    img: "./assets/img/product/iphonexs.jpg",
  },
  {
    id: 5,
    name: "Iphone XS MAX 64GB 99%",
    price: 5990000,
    img: "./assets/img/product/iphonexsmax.jpg",
  },
  {
    id: 6,
    name: "Iphone 11 128GB 95%",
    price: 6890000,
    img: "./assets/img/product/iphone11.jpg",
    detail: {
      dateOfManufacture: "10/9/2019",
      releaseDate: "20/9/2019",
      size: "150.9 x 75.7 x 8.3 mm (5.94 x 2.98 x 0.33 in)",
      weight: "194g",
      technologyScreen: "Liquid Retina IPS LCD",
      sizeScreen: "6.1 inches",
      screenResolution: "828 x 1792 pixels",
      ios: 13,
      cpu: "Hexa-core (2x2.65 GHz Lightning + 4x1.8 GHz Thunder)",
      chip: "Apple A13 Bionic (7 nm+)",
      gpu: "Apple GPU (4-nhân đồ họa)",
      memory: "128GB RAM 4GB",
      pin: "3110 mAh (11.91 Wh)",
    },
  },
  {
    id: 7,
    name: "Iphone 11 Pro 64GB New",
    price: 7190000,
    img: "./assets/img/product/iphone11pro.jpg",
    detail: {
      dateOfManufacture: "10/9/2019",
      releaseDate: "20/9/2019",
      size: "	144 x 71.4 x 8.1 mm (5.67 x 2.81 x 0.32 in)",
      weight: "188g",
      technologyScreen: "Super Retina XDR OLED, HDR10, Dolby Vision",
      sizeScreen: "5.8 inches",
      screenResolution: "1125 x 2436 pixels",
      ios: 13,
      chip: "	Apple A13 Bionic (7 nm+)",
      cpu: "	Hexa-core (2x2.65 GHz Lightning + 4x1.8 GHz Thunder)",
      gpu: "	Apple GPU (4-nhân đồ họa)",
      memory: "64GB RAM 4GB",
      pin: "	3046 mAh (11.67 Wh)",
    },
  },
  {
    id: 8,
    name: "Iphone 11 Pro Max 64GB 99%",
    price: 7190000,
    img: "./assets/img/product/iphone11promax.jpg",
    detail: {
      dateOfManufacture: "10/9/2019",
      releaseDate: "20/9/2019",
      size: "158 x 77.8 x 8.1 mm (6.22 x 3.06 x 0.32 in)",
      weight: "226g",
      technologyScreen: "Super Retina XDR OLED, HDR10, Dolby Vision",
      sizeScreen: "6.5 inches",
      screenResolution: "1242 x 2688 pixels",
      ios: 13,
      chip: "Apple A13 Bionic (7 nm+)",
      cpu: "Hexa-core (2x2.65 GHz Lightning + 4x1.8 GHz Thunder)",
      gpu: "Apple GPU (4-nhân đồ họa)",
      memory: "64GB RAM 4GB",
      pin: "3969 mAh (15.04 Wh)",
    },
  },
  {
    id: 9,
    name: "Iphone 12 128GB 99%",
    price: 10490000,
    img: "./assets/img/product/iphone12.jpg",
    detail: {
      dateOfManufacture: "13/10/2020",
      releaseDate: "23/10/2020",
      size: "146.7 x 71.5 x 7.4 mm (5.78 x 2.81 x 0.29 in)",
      weight: "189g",
      technologyScreen: "Super Retina XDR OLED, HDR10, Dolby Vision, 800 nits",
      sizeScreen: "6.1 inches",
      screenResolution: "1170 x 2532 pixels",
      ios: 14.1,
      chip: "Apple A14 Bionic (5 nm)",
      cpu: "Hexa-core (2x3.1 GHz Firestorm + 4x1.8 GHz Icestorm)",
      gpu: "Apple GPU (4-nhân đồ họa)",
      memory: "128GB RAM 6GB",
      pin: "2815 mAh (10.78 Wh)",
    },
  },
  {
    id: 10,
    name: "Iphone 12 Pro 128GB 95%",
    price: 10890000,
    img: "./assets/img/product/iphone12pro.jpg",
    detail: {
      dateOfManufacture: "13/10/2020",
      releaseDate: "23/10/2020",
      size: "146.7 x 71.5 x 7.4 mm (5.78 x 2.81 x 0.29 in)",
      weight: "189g",
      technologyScreen: "Super Retina XDR OLED, HDR10, Dolby Vision, 800 nits",
      sizeScreen: "6.1 inches",
      screenResolution: "1170 x 2532 pixels",
      ios: 14.1,
      chip: "Apple A14 Bionic (5 nm)",
      cpu: "Hexa-core (2x3.1 GHz Firestorm + 4x1.8 GHz Icestorm)",
      gpu: "Apple GPU (4-nhân đồ họa)",
      memory: "128GB RAM 6GB",
      pin: "2815 mAh (10.78 Wh)",
    },
  },
  {
    id: 11,
    name: "Iphone 12 Pro Max 128GB 95%",
    price: 13990000,
    img: "./assets/img/product/iphone12promax.jpg",
    detail: {
      dateOfManufacture: "13/10/2020",
      releaseDate: "23/10/2020",
      size: "160.8 x 78.1 x 7.4 mm (6.33 x 3.07 x 0.29 in)",
      weight: "228g",
      technologyScreen: "Super Retina XDR OLED, HDR10, Dolby Vision, 800 nits",
      sizeScreen: "6.7 inches",
      screenResolution: "1284 x 2778 pixels",
      ios: 14.1,
      chip: "Apple A14 Bionic (5 nm)",
      cpu: "Hexa-core (2x3.1 GHz Firestorm + 4x1.8 GHz Icestorm)",
      gpu: "Apple GPU (4-nhân đồ họa)",
      memory: "128GB RAM 6GB",
      pin: "3687 mAh (10.78 Wh)",
    },
  },
  {
    id: 12,
    name: "Iphone 13 128GB 99%",
    price: 14890000,
    img: "./assets/img/product/iphone13.jpg",
    detail: {
      dateOfManufacture: "14/9/2021",
      releaseDate: "24/9/2021",
      size: "146.7 x 71.5 x 7.7 mm (5.78 x 2.81 x 0.30 in)",
      weight: "174g",
      technologyScreen: "Super Retina XDR OLED, HDR10, Dolby Vision, 800 nits",
      sizeScreen: "6.1 inches",
      screenResolution: "1170 x 2532 pixels",
      ios: 15,
      chip: "Apple A15 Bionic (5 nm)",
      cpu: "Hexa-core (2x3.22 GHz Avalanche + 4xX.X GHz Blizzard)",
      gpu: "Apple GPU (4-nhân đồ họa)",
      memory: "128GB RAM 6GB",
      pin: "3240 mAh",
    },
  },
  {
    id: 13,
    name: "Iphone 13 Pro 128GB 95%",
    price: 15690000,
    img: "./assets/img/product/iphone13pro.jpg",
    detail: {
      dateOfManufacture: "14/9/2021",
      releaseDate: "24/9/2021",
      size: "146.7 x 71.5 x 7.7 mm (5.78 x 2.81 x 0.30 in)",
      weight: "204g",
      technologyScreen: "Super Retina XDR OLED",
      sizeScreen: "6.1 inches",
      screenResolution: "1170 x 2532 pixels",
      ios: 15,
      chip: "Apple A15 Bionic (5 nm)",
      cpu: "Hexa-core (2x3.22 GHz Avalanche + 4xX.X GHz Blizzard)",
      gpu: "Apple GPU (4-nhân đồ họa)",
      memory: "128GB RAM 6GB",
      pin: "3095mAh (12.11 Wh)",
    },
  },
  {
    id: 14,
    name: "Iphone 13 Pro Max 256GB 95%",
    price: 18690000,
    img: "./assets/img/product/iphone13promax.jpg",
    detail: {
      dateOfManufacture: "14/9/2021",
      releaseDate: "24/9/2021",
      size: "160,8 x 78,1 x 7,7 mm (6,33 x 3,07 x 0,30 in)",
      weight: "240g",
      technologyScreen:
        "Super Retina XDR OLED, 120Hz, HDR10, Dolby Vision, 1000 nits",
      sizeScreen: "6.7 inches",
      screenResolution: "1284 x 2778 pixel",
      ios: 15,
      chip: "Apple A15 Bionic (5 nm)",
      cpu: "Hexa-core (2x3.22 GHz Avalanche + 4xX.X GHz Blizzard)",
      gpu: "Apple GPU (4-nhân đồ họa)",
      memory: "256 GB RAM 6 GB",
      pin: "4352 mAh (16,75 Wh)",
    },
  },
  {
    id: 15,
    name: "Iphone 14 256GB VN/A",
    price: 17190000,
    img: "./assets/img/product/iphone14.jpg",
    detail: {
      dateOfManufacture: "07/09/2022",
      releaseDate: "16/09/2022",
      size: "146.7 x 71.5 x 7.8 mm",
      weight: "172g",
      technologyScreen:
        "Super Retina XDR OLED, HDR10, Dolby Vision, 800 nits, 1200 nits",
      sizeScreen: "6.1 inches",
      screenResolution: "1170 x 2532 pixels",
      ios: 16,
      chip: "Apple A16 Bionic (4 nm)",
      cpu: "Hexa-core (2x3.23 GHz Avalanche + 4x1.82 GHz Blizzard)",
      gpu: "Apple GPU (5-nhân đồ họa)",
      memory: "256 GB RAM 6 GB",
      pin: "3.279 mAh",
    },
  },
  {
    id: 16,
    name: "Iphone 14 Plus 256GB VN/A",
    price: 21290000,
    img: "./assets/img/product/iphone14plus.jpg",
    detail: {
      dateOfManufacture: "07/09/2022",
      releaseDate: "16/09/2022",
      size: "160.8 x 78.1 x 7.8 mm",
      weight: "203g",
      technologyScreen:
        "Super Retina XDR OLED, HDR10, Dolby Vision, 800 nits, 1200 nits",
      sizeScreen: "6.7 inches",
      screenResolution: "1170 x 2532 pixels",
      ios: 16,
      chip: "Apple A16 Bionic (4 nm)",
      cpu: "Hexa-core (2x3.23 GHz Avalanche + 4x1.82 GHz Blizzard)",
      gpu: "Apple GPU (5-nhân đồ họa)",
      memory: "256 GB RAM 6 GB",
      pin: "4.325 mAh",
    },
  },
  {
    id: 17,
    name: "Iphone 14 Pro 256GB VN/A",
    price: 22990000,
    img: "./assets/img/product/iphone14pro.jpeg",
    detail: {
      dateOfManufacture: "07/09/2022",
      releaseDate: "16/09/2022",
      size: "147.5 x 71.5 x 7.9 mm",
      weight: "206g",
      technologyScreen:
        "LTPO Super Retina XDR OLED, 120Hz, HDR10, Dolby Vision, 1000 nits, 2000 nits",
      sizeScreen: "6.1 inches",
      screenResolution: "1179 x 2556 pixels",
      ios: 16,
      chip: "Apple A16 Bionic (4nm)",
      cpu: "Hexa-core",
      gpu: "Apple GPU (5-nhân đồ họa)",
      memory: "256 GB RAM 6 GB",
      pin: "3.200 mAh",
    },
  },
  {
    id: 18,
    name: "Iphone 14 Pro Max 1TB VN/A",
    price: 40990000,
    img: "./assets/img/product/iphone14promax.jpeg",
    detail: {
      dateOfManufacture: "07/09/2022",
      releaseDate: "16/09/2022",
      size: "160.7 x 77.6 x 7.9 mm",
      weight: "240g",
      technologyScreen:
        "LTPO Super Retina XDR OLED, 120Hz, HDR10, Dolby Vision, 1000 nits, 2000 nits",
      sizeScreen: "6.7 inches",
      screenResolution: "1290 x 2796 pixels",
      ios: 16,
      chip: "Apple A16 Bionic (4nm)",
      cpu: "Hexa-core",
      gpu: "Apple GPU (5-nhân đồ họa)",
      memory: "1TB RAM 6GB",
      pin: "4.323 mAh",
    },
  },
  {
    id: 19,
    name: "Iphone 15 256GB VN/A",
    price: 29900000,
    img: "./assets/img/product/iphone15.jpg",
    detail: {
      dateOfManufacture: "13/09/2023",
      releaseDate: "16/09/2023",
      size: "146.6 x 70.6 x 8.3 mm",
      weight: "187g",
      technologyScreen:
        "LTPO Super Retina XDR OLED, 120Hz, HDR10, Dolby Vision, 1000 nits (typ), 2000 nits (HBM)",
      sizeScreen: "6.1 inches",
      screenResolution: "1179 x 2556 pixels",
      ios: 17,
      chip: "Apple A17 Bionic (3 nm)",
      cpu: "Hexa-core (2x3.78 GHz + 4)",
      gpu: "Apple GPU (6-nhân đồ hoạ)",
      memory: "256GB RAM 8GB",
      pin: "3.349 mAh",
    },
  },
  {
    id: 20,
    name: "Iphone 15 Plus 512GB VN/A",
    price: 33490000,
    img: "./assets/img/product/iphone15plus.jpg",
    detail: {
      dateOfManufacture: "13/09/2023",
      releaseDate: "16/09/2023",
      size: "160.9 x 77.8 x 7.8 mm",
      weight: "201g",
      technologyScreen:
        "Super Retina XDR OLED, HDR10, Dolby Vision, 1000 nits (HBM), 2000 nits (peak)",
      sizeScreen: "6.7 inches",
      screenResolution: "1290 x 2796 pixels",
      ios: 17,
      chip: "A16 Bionic (4 nm)",
      cpu: "Hexa-core (2x3.46 GHz Everest + 4x2.02 GHz Sawtooth)",
      gpu: "Apple GPU (5-nhân đồ hoạ)",
      memory: "512GB RAM 8GB",
      pin: "4.352 mAh",
    },
  },
  {
    id: 21,
    name: "Iphone 15 Pro 128GB VN/A",
    price: 33490000,
    img: "./assets/img/product/iphone15pro.jpg",
    detail: {
      dateOfManufacture: "13/09/2023",
      releaseDate: "16/09/2023",
      size: "146.6 x 70.6 x 8.3 mm",
      weight: "187g",
      technologyScreen:
        "LTPO Super Retina XDR OLED, 120Hz, HDR10, Dolby Vision, 1000 nits (typ), 2000 nits (HBM)",
      sizeScreen: "6.1 inches",
      screenResolution: "1179 x 2556 pixels",
      ios: 17,
      chip: "Apple A17 Pro (3 nm)",
      cpu: "Hexa-core (2x3.78 GHz + 4)",
      gpu: "Apple GPU (6-nhân đồ hoạ)",
      memory: "128GB RAM 8GB",
      pin: "3.274 mAh",
    },
  },
  {
    id: 22,
    name: "Iphone 15 Pro Max 1TB VN/A",
    price: 43990000,
    img: "./assets/img/product/iphone15promax.jpg",
    detail: {
      dateOfManufacture: "13/09/2023",
      releaseDate: "16/09/2023",
      size: "159.9 x 76.7 x 8.3 mm",
      weight: "221g",
      technologyScreen:
        "LTPO Super Retina XDR OLED, 120Hz, HDR10, Dolby Vision, 1000 nits (typ), 2000 nits (HBM)",
      sizeScreen: "6.7 inches",
      screenResolution: "1290 x 2796 pixels",
      ios: 17,
      chip: "Apple A17 Pro (3 nm)",
      cpu: "Hexa-core (2x3.78 GHz + 4)",
      gpu: "Apple GPU (6-nhân đồ hoạ)",
      memory: "1TB RAM 8GB",
      pin: "4.422 mAh",
    },
  },
];
const nextProduct = document.querySelector(".next-product");
const prevProduct = document.querySelector(".prev-product");
const product = document.querySelector(".product");
const listNumber = document.querySelector(".item-number_page");
let itemPerPage = 4,
  currentPage = 1;
let start = 0,
  end = itemPerPage;
const totalPage = Math.ceil(products.length / itemPerPage);
// start = itemPerPage * (currentPage - 1);
// end = currentPage * itemPerPage;
const renderProduct = () => {
  const htmls = products.map((item, index) => {
    const formattedTotal = new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(item.price);
    if (index >= start && index < end) {
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
          <button class="detail-btn" data = ${index}>DETAIL</button>
          <button class="addtocart-btn" data="${index}">ADD TO CART</button>
        </div>
      </div>
    </div>`;
    }
  });
  product.innerHTML = htmls.join("");
};

document.addEventListener("click", (event) => {
  if (event.target.matches(".addtocart-btn")) {
    addToCart();
  }
});
const renderListNumber = () => {
  listNumber.innerHTML = "";

  if (currentPage != 1) {
    let prev = document.createElement("li");
    prev.innerText = "prev";
    prev.setAttribute("class", "prev-product");
    prev.setAttribute("onclick", "changePage(" + (currentPage - 1) + ")");
    listNumber.appendChild(prev);
  }

  for (i = 1; i <= totalPage; i++) {
    let numberItem = document.createElement("li");
    numberItem.innerText = i;
    numberItem.setAttribute("class", "number");

    if (i == currentPage) {
      numberItem.classList.add("active");
    }
    numberItem.setAttribute("onclick", "changePage(" + i + ")");
    listNumber.appendChild(numberItem);
  }
  if (currentPage != totalPage) {
    let next = document.createElement("li");
    next.innerText = "next";
    next.setAttribute("class", "next-product");
    next.setAttribute("onclick", "changePage(" + (currentPage + 1) + ")");
    listNumber.appendChild(next);
  }
};
const changePage = (i) => {
  currentPage = i;
  start = itemPerPage * (currentPage - 1);
  end = currentPage * itemPerPage;
  renderProduct();
  renderListNumber();
  detailProduct();
};

renderProduct();
renderListNumber();

const detailProduct = () => {
  const itemProduct = document.querySelectorAll(".detail-btn");
  const detailItem = itemProduct.forEach((item, index) => {
    item.addEventListener("click", () => {
      const dataProduct = item.attributes.data.value;
      products.forEach((item, index) => {
        if (dataProduct == index) {
          localStorage.setItem("product-detail", JSON.stringify(item));
          renderProductDetail();
          return;
        }
      });
    });
  });
};

const content = document.querySelector(".content");

const renderProductDetail = () => {
  content.innerHTML = "";
  const htmls = `<h1>xin chào các bạn</h1>
  <button>mua ngay</button>`;
  const tag = document.createElement("div");
  tag.innerHTML = htmls;
  content.appendChild(tag);
  window.screenTop = 0;
  barItem[1].classList.add("active");
  barItem[0].classList.remove("active");
};

detailProduct();

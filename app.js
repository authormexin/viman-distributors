const products = [
  {id:1,name:'AZAM Energy Drink 300ml (24 Pack)',cat:'Beverages',price:860,img:'https://vimandistributors.store/images/download-41.jpg.jpeg'},
  {id:2,name:'POWER PLAY Energy Drink 500ml (12Pcs)',cat:'Beverages',price:500,img:'https://vimandistributors.store/images/download-3y.jpg.jpeg'},
  {id:3,name:'PREDATOR Energy Drink 500ml (12pcs)',cat:'Beverages',price:480,img:'https://vimandistributors.store/images/download-42.jpg.jpeg'},
  {id:4,name:'RED BULL (24 Pack)',cat:'Beverages',price:2400,img:'https://vimandistributors.store/images/download-39.jpg.jpeg'},

  {id:5,name:'Minute Maid Apple Juice 12x400ml',cat:'Beverages',price:600,img:'https://vimandistributors.store/images/download-22.jpg.jpeg'},
  {id:6,name:'Minute Maid Mango Juice 12x400ml',cat:'Beverages',price:600,img:'https://vimandistributors.store/images/download-37.jpg.jpeg'},
  {id:7,name:'Pick N Peel Mango 12x1L',cat:'Beverages',price:2900,img:'https://vimandistributors.store/images/download-34.jpg.jpeg'},

  {id:12,name:'Kamande 50Kgs',cat:'Staples',price:5500,img:'https://vimandistributors.store/images/download-53.jpg.jpeg'},
  {id:13,name:'Makueni Ndengu 90Kgs',cat:'Staples',price:7500,img:'https://vimandistributors.store/images/download-52.jpg.jpeg'},
  {id:14,name:'Nylon Ndengu 90Kgs',cat:'Staples',price:6500,img:'https://vimandistributors.store/images/download-54.jpg.jpeg'},
  {id:15,name:'Soghum 90Kgs',cat:'Staples',price:3500,img:'https://vimandistributors.store/images/download-55.jpg.jpeg'},
  {id:16,name:'Weatabix 45grams (Carton of 24)',cat:'Staples',price:1420,img:'https://vimandistributors.store/images/download-1.jpg.jpeg'},
  {id:76,name:'INDOMIE 70g (Carton of 24)',cat:'Staples',price:500,img:'https://vimandistributors.store/images/greenspoon_indomie_70g-2076-100x100.jpg.jpeg'},
  {id:80,name:'Daawat Spaghetti 400 grams (Carton of 24)',cat:'Staples',price:1800,img:'https://vimandistributors.store/images/21784_main.avif'},

  {id:17,name:'50kgs SUGAR (Brown)',cat:'Staples',price:6400,img:'https://vimandistributors.store/images/download-76.jpg.jpeg'},
  {id:18,name:'50kgs SUGAR (White)',cat:'Staples',price:6500,img:'https://vimandistributors.store/images/download-2-1.jpg.jpeg'},
  {id:19,name:'MAIZE Flour 1Kg Bale',cat:'Staples',price:1550,img:'https://vimandistributors.store/images/m1-300x150.jpg.jpeg'},
  {id:20,name:'MAIZE Flour 2Kg Bale',cat:'Staples',price:1600,img:'https://vimandistributors.store/images/woocommerce-placeholder.webp'},
  {id:21,name:'WHEAT Flour 1Kg Bale',cat:'Staples',price:1750,img:'https://vimandistributors.store/images/download-13g.jpg.jpeg'},
  {id:22,name:'WHEAT Flour 2kg Bale',cat:'Staples',price:1800,img:'https://vimandistributors.store/images/images-3-300x150.jpg.jpeg'},
  {id:23,name:'25kgs BASMATI RICE',cat:'Staples',price:2800,img:'https://vimandistributors.store/images/download-76.jpg.jpeg'},
  {id:24,name:'25kgs BIRIYANI RICE',cat:'Staples',price:2100,img:'https://vimandistributors.store/images/download-7.jpg.jpeg'},
  {id:25,name:'25kgs PISHORI RICE',cat:'Staples',price:4000,img:'https://vimandistributors.store/images/download-76.jpg.jpeg'},
  {id:26,name:'25kgs SINDANO RICE',cat:'Staples',price:2000,img:'https://vimandistributors.store/images/download-7.jpg.jpeg'},

  {id:27,name:'10 Litres RINA Cooking Oil',cat:'Cooking',price:2000,img:'https://vimandistributors.store/images/download-59.jpg.jpeg'},
  {id:28,name:'10 Litres SALIT/BAHARI/POSTMAN/PIKA Cooking Oil',cat:'Cooking',price:2000,img:'https://vimandistributors.store/images/1q.jpg.jpeg'},
  {id:29,name:'20 Litres RINA Cooking Oil',cat:'Cooking',price:4000,img:'https://vimandistributors.store/images/download-58.jpg.jpeg'},
  {id:30,name:'20 Litres RINSUN Sunflower Vegetable Oil',cat:'Cooking',price:4200,img:'https://vimandistributors.store/images/download-67.jpg.jpeg'},
  {id:31,name:'20 Litres SALIT/BAHARI/POSTMAN/PIKA Cooking Oil',cat:'Cooking',price:4000,img:'https://vimandistributors.store/images/download-66.jpg.jpeg'},
  {id:32,name:'FRY MATE 10Kgs Carton',cat:'Cooking',price:1250,img:'https://vimandistributors.store/images/download-71-166x300.jpg.jpeg'},
  {id:33,name:'SOMO Solid Cooking Fat 10kgs Carton',cat:'Cooking',price:1250,img:'https://vimandistributors.store/images/download-69.jpg.jpeg'},

  {id:34,name:'25kg MILK POWDER',cat:'Dairy',price:7800,img:'https://vimandistributors.store/images/download-56.jpg.jpeg'},
  {id:35,name:'CHEESE 250g (Box of 12)',cat:'Dairy',price:3600,img:'https://vimandistributors.store/images/download-40.jpg.jpeg'},
  {id:36,name:'Lato BUTTER 500g (Carton of 12)',cat:'Dairy',price:5880,img:'https://vimandistributors.store/images/download-38.jpg.jpeg'},
  {id:75,name:'Eggs Crate (30 Pieces)',cat:'Dairy',price:380,img:'https://vimandistributors.store/images/WhatsApp-Image-2025-11-20-at-6.58.00-PM-2-1.jpeg'},

  {id:41,name:'BIDCO Cream Bar Soap 800g (25Pcs)',cat:'Cleaning',price:2300,img:'https://vimandistributors.store/images/download-25.jpg.jpeg'},
  {id:42,name:'MENENGAI Bar Soap 1Kg (Carton of 25)',cat:'Cleaning',price:3000,img:'https://vimandistributors.store/images/download-23.jpg.jpeg'},
  {id:45,name:'Nuru Dish Washing Liquid Lemon Spark 4x5L',cat:'Cleaning',price:2500,img:'https://vimandistributors.store/images/download-31.jpg.jpeg'},
  {id:46,name:'Sunlight Hand Washing Powder 6x1Kg',cat:'Cleaning',price:2000,img:'https://vimandistributors.store/images/woocommerce-placeholder.webp'},
  {id:48,name:'Velvex Dishwashing Liquid Lemon Burst 5L',cat:'Cleaning',price:450,img:'https://vimandistributors.store/images/download-30.jpg.jpeg'},
  {id:58,name:'Bella/Hanan Tissue (Bale of 48)',cat:'Cleaning',price:1020,img:'https://vimandistributors.store/images/download-11-1.jpg.jpeg'},
  {id:60,name:'Cleanrol Kitchen Towel 24x2s',cat:'Cleaning',price:5000,img:'https://vimandistributors.store/images/download-21.jpg.jpeg'},

  {id:67,name:'Kisskids (Bale of 6 Packets)',cat:'Health & Beauty',price:2500,img:'https://vimandistributors.store/images/download-5.jpg.jpeg'},
  {id:69,name:'Kotex Ultrathin Sanitary Pads Super',cat:'Health & Beauty',price:1800,img:'https://vimandistributors.store/images/woocommerce-placeholder.webp'},
  {id:70,name:'Mara Moja Painkiller Tablets 4x100s',cat:'Health & Beauty',price:2100,img:'https://vimandistributors.store/images/download-6.jpg.jpeg'},
  {id:72,name:'Softcare Pampers (Bale of 6 Packets)',cat:'Health & Beauty',price:2700,img:'https://vimandistributors.store/images/download-4.jpg.jpeg'},
  {id:73,name:'Velvex Liquid Hand Wash Coral 6x400ml',cat:'Health & Beauty',price:1100,img:'https://vimandistributors.store/images/148428_main-100x100.jpg.jpeg'}
];

let cart = JSON.parse(localStorage.getItem('vimanCart') || '[]');
let category = 'All';

const money = n =>
  'KSh ' + Number(n).toLocaleString('en-KE');

function saveCart() {
  localStorage.setItem('vimanCart', JSON.stringify(cart));
}

function renderCategories() {

  const categories = [
    'All',
    ...new Set(products.map(product => product.cat))
  ];

  const container = document.querySelector('#categories');

  if (!container) return;

  container.innerHTML = categories
    .map(cat => `
      <button
        type="button"
        class="${cat === category ? 'active' : ''}"
        data-cat="${cat}"
      >
        ${cat}
      </button>
    `)
    .join('');

  document.querySelectorAll('[data-cat]').forEach(button => {

    button.addEventListener('click', () => {

      category = button.dataset.cat;

      renderCategories();
      renderProducts();

    });

  });

}

function renderProducts() {

  const search = document.querySelector('#search');
  const sort = document.querySelector('#sort');
  const container = document.querySelector('#products');
  const empty = document.querySelector('#empty');

  if (!search || !sort || !container || !empty) return;

  const query = search.value
    .toLowerCase()
    .trim();

  let list = products.filter(product =>
    (category === 'All' || product.cat === category) &&
    product.name.toLowerCase().includes(query)
  );

  if (sort.value === 'low') {
    list.sort((a, b) => a.price - b.price);
  }

  if (sort.value === 'high') {
    list.sort((a, b) => b.price - a.price);
  }

  if (sort.value === 'name') {
    list.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

  empty.hidden = list.length > 0;

  container.innerHTML = list.map(product => `
    <article class="card">

      <img
        src="${product.img}"
        alt="${product.name}"
        loading="lazy"
        onerror="this.src='https://vimandistributors.store/images/woocommerce-placeholder.webp'"
      >

      <div class="card-body">

        <small>${product.cat}</small>

        <h3>${product.name}</h3>

        <div class="price">
          ${money(product.price)}
        </div>

        <button
          type="button"
          class="add"
          data-add="${product.id}"
        >
          Add to cart
        </button>

      </div>

    </article>
  `).join('');

  document.querySelectorAll('[data-add]').forEach(button => {

    button.addEventListener('click', () => {

      add(Number(button.dataset.add));

    });

  });

}

function add(id) {

  const product = products.find(
    item => item.id === id
  );

  if (!product) return;

  const existing = cart.find(
    item => item.id === id
  );

  if (existing) {

    existing.qty += 1;

  } else {

    cart.push({
      ...product,
      qty: 1
    });

  }

  saveCart();
  renderCart();
  openCart();

}

function change(id, amount) {

  const item = cart.find(
    product => product.id === id
  );

  if (!item) return;

  item.qty += amount;

  if (item.qty <= 0) {

    cart = cart.filter(
      product => product.id !== id
    );

  }

  saveCart();
  renderCart();

}

function renderCart() {

  const count = document.querySelector('#cartCount');
  const items = document.querySelector('#cartItems');
  const totalElement = document.querySelector('#cartTotal');

  if (!count || !items || !totalElement) return;

  const totalQuantity = cart.reduce(
    (sum, item) => sum + item.qty,
    0
  );

  count.textContent = totalQuantity;

  if (!cart.length) {

    items.innerHTML = `
      <div class="empty-cart">
        <p>Your cart is empty.</p>
        <p>Add products from the shop to get started.</p>
      </div>
    `;

  } else {

    items.innerHTML = cart.map(item => `
      <div class="drawer-item">

        <div>

          <strong>
            ${item.name}
          </strong>

          <div>
            ${money(item.price)} × ${item.qty}
          </div>

        </div>

        <div class="qty">

          <button
            type="button"
            data-dec="${item.id}"
            aria-label="Decrease quantity"
          >
            −
          </button>

          <b>
            ${item.qty}
          </b>

          <button
            type="button"
            data-inc="${item.id}"
            aria-label="Increase quantity"
          >
            +
          </button>

        </div>

      </div>
    `).join('');

  }

  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.qty,
    0
  );

  totalElement.textContent = money(total);

  document.querySelectorAll('[data-dec]').forEach(button => {

    button.addEventListener('click', () => {

      change(
        Number(button.dataset.dec),
        -1
      );

    });

  });

  document.querySelectorAll('[data-inc]').forEach(button => {

    button.addEventListener('click', () => {

      change(
        Number(button.dataset.inc),
        1
      );

    });

  });

}

function openCart() {

  const cartElement = document.querySelector('#cart');
  const overlay = document.querySelector('#overlay');

  if (!cartElement || !overlay) return;

  cartElement.classList.add('open');
  overlay.classList.add('show');

  cartElement.setAttribute(
    'aria-hidden',
    'false'
  );

}

function closeCart() {

  const cartElement = document.querySelector('#cart');
  const overlay = document.querySelector('#overlay');

  if (!cartElement || !overlay) return;

  cartElement.classList.remove('open');
  overlay.classList.remove('show');

  cartElement.setAttribute(
    'aria-hidden',
    'true'
  );

}


/* ================= EVENTS ================= */

document.addEventListener('DOMContentLoaded', () => {

  const cartOpen = document.querySelector('#cartOpen');
  const cartClose = document.querySelector('#cartClose');
  const overlay = document.querySelector('#overlay');
  const search = document.querySelector('#search');
  const sort = document.querySelector('#sort');

  if (cartOpen) {
    cartOpen.addEventListener(
      'click',
      openCart
    );
  }

  if (cartClose) {
    cartClose.addEventListener(
      'click',
      closeCart
    );
  }

  if (overlay) {
    overlay.addEventListener(
      'click',
      closeCart
    );
  }

  if (search) {
    search.addEventListener(
      'input',
      renderProducts
    );
  }

  if (sort) {
    sort.addEventListener(
      'change',
      renderProducts
    );
  }

  renderCategories();
  renderProducts();
  renderCart();

});

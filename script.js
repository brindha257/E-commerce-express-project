let cart = [];
let total = 0;

// Add to Cart
function addToCart(product, price) {
  cart.push({ product, price });
  total += price;
  document.getElementById("cart-count").innerText = cart.length;
  updateCart();
}

// Update Cart
function updateCart() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";
  cart.forEach((item, index) => {
    cartItems.innerHTML += `<li>${item.product} - $${item.price} 
      </li>`;
  });
  document.getElementById("cart-total").innerText = total;
}

//<button onclick="removeFromCart(${index})">❌</button>
// Remove from Cart
function removeFromCart(index) {
  total -= cart[index].price;
  cart.splice(index, 1);
  document.getElementById("cart-count").innerText = cart.length;
  updateCart();
}

// Toggle Cart Sidebar
function toggleCart() {
  document.getElementById("cart-sidebar").classList.toggle("active");
  }

// Close on outside click
document.addEventListener("click", function (event) {
  const sidebar = document.getElementById("cart-sidebar");
  const cartIcon = document.querySelector(".cart-icon");
  if (
    sidebar.classList.contains("active") &&
    !sidebar.contains(event.target) &&
    !cartIcon.contains(event.target)
  ) {
    sidebar.classList.remove("active");
  }
});

// Checkout
function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
  } else {
    alert(`Thanks for shopping! Total: $${total}`);
    cart = [];
    total = 0;
    document.getElementById("cart-count").innerText = 0;
    updateCart();
    toggleCart(); // close after checkout
  }
}

// Search Products
function searchProducts() {
  const searchValue = document.getElementById("search").value.toLowerCase();
  const products = document.querySelectorAll(".product");
  products.forEach(product => {
    const name = product.querySelector("h3").innerText.toLowerCase();
    product.style.display = name.includes(searchValue) ? "block" : "none";
  });
}

// Filter by Category
function filterCategory(category) {
  const products = document.querySelectorAll(".product");
  products.forEach(product => {
    if (category === "all" || product.dataset.category === category) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}
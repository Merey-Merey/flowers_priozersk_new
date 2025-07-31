function toggleMenu() {
  var header = document.getElementById("myHeader");
  var icon = document.getElementById("burgerIcon");
  if (header.classList.contains("responsive")) {
    header.classList.remove("responsive");
    icon.innerHTML = "&#9776;"; // burger
  } else {
    header.classList.add("responsive");
    icon.innerHTML = "&times;"; // close
  }
}

const searchBox = document.getElementById("searchBox");
const cards = document.querySelectorAll(".card");

function getChecked(selector) {
  return Array.from(document.querySelectorAll(selector + ":checked")).map(cb => cb.value.toLowerCase());
}

function filterProducts() {
  const search = searchBox.value.toLowerCase();
  const selectedColors = getChecked(".color-filter");
  const selectedTypes = getChecked(".type-filter");
  const selectedSizes = getChecked(".size-filter");

  cards.forEach(card => {
    const name = (card.dataset.name || "").toLowerCase(); // защита от undefined
    const color = (card.dataset.color || "").toLowerCase();
    const type = (card.dataset.type || "").toLowerCase();
    const sizes = (card.dataset.size || "").toLowerCase().split(",");

    const matchesSearch = name.includes(search);
    const matchesColor = selectedColors.length === 0 || selectedColors.includes(color);
    const matchesType = selectedTypes.length === 0 || selectedTypes.includes(type);
    const matchesSize = selectedSizes.length === 0 || selectedSizes.some(s => sizes.includes(s));

    if (matchesSearch && matchesColor && matchesType && matchesSize) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

function resetAll() {
  document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
  searchBox.value = "";
  filterProducts();
}

document.querySelectorAll('input[type="checkbox"]').forEach(cb => {
  cb.addEventListener("change", filterProducts);
});

searchBox.addEventListener("input", filterProducts);

filterProducts(); // сразу отфильтровать при загрузке

const filterToggle = document.getElementById('filterToggle');
const filtersPanel = document.getElementById('filtersPanel');

filterToggle.addEventListener('click', () => {
  filtersPanel.classList.toggle('active');
});

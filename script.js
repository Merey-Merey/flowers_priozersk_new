function toggleMenu() {
  var header = document.getElementById("myHeader");
  var burger = document.getElementById("burgerIcon");
  var closeIcon = document.getElementById("closeIcon");
  
  header.classList.toggle("responsive");
  
  if (header.classList.contains("responsive")) {
    burger.style.display = "none";
    closeIcon.style.display = "block";
  } else {
    burger.style.display = "block";
    closeIcon.style.display = "none";
  }
}

const searchBox = document.getElementById("searchBox");
const cards = document.querySelectorAll(".card");

function filterProducts() {
  const search = searchBox.value.toLowerCase().trim();
  const searchWords = search.split(/\s+/); // разбиваем строку на отдельные слова

  cards.forEach(card => {
    const name = (card.dataset.name || "").toLowerCase();

    // карточка показывается, если каждое слово из поиска есть в названии
    const matches = searchWords.every(word => name.includes(word));

    card.style.display = matches ? "block" : "none";
  });
}

searchBox.addEventListener("input", filterProducts);

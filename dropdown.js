// === Dropdown source: открытие/закрытие ===

const dropdownToggle = document.querySelector(".dropdown-source-toggle");
const dropdownList = document.querySelector(".dropdown-source-list");
const dropdownArrow = document.querySelector(".dropdown-source-arrow");

dropdownToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  dropdownList.classList.toggle("hidden");
  dropdownArrow.classList.toggle("open");
});

// Закрытие при клике вне дропдауна
document.addEventListener("click", (e) => {
  if (!e.target.closest(".dropdown-source")) {
    dropdownList.classList.add("hidden");
    dropdownArrow.classList.remove("open");
  }
});

// === Search dropdown: показ при фокусе на строке поиска ===

const searchInput = document.querySelector(".search-input");
const searchDropdown = document.querySelector(".search-dropdown");

searchInput.addEventListener("focus", () => {
  searchDropdown.classList.remove("hidden");
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".search-container")) {
    searchDropdown.classList.add("hidden");
  }
});

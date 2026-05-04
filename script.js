// === Navigation: перемещение фона active-type-bg ===

const navBg = document.querySelector(".active-type-bg");
const navBtns = document.querySelectorAll(".navigation-row .nav-btn");
const navigation = document.querySelector(".navigation");

navBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const navRect = navigation.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();

    // Смещение кнопки относительно контейнера .navigation
    const offsetX = btnRect.left - navRect.left;
    const offsetY = btnRect.top - navRect.top;

    navBg.style.width = btnRect.width + "px";
    navBg.style.height = btnRect.height + "px";
    navBg.style.left = offsetX + "px";
    navBg.style.top = offsetY + "px";
  });
});

// === Navigation: смена цвета SVG при выборе ===

navBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Сбрасываем цвет всех SVG-элементов во всех кнопках
    navBtns.forEach((b) => {
      b.querySelectorAll("svg path, svg rect, svg circle").forEach((el) => {
        const currentColor = el.getAttribute("fill");
        if (currentColor && currentColor !== "none") {
          el.setAttribute("fill", "#8AA3B9");
        }
        const strokeColor = el.getAttribute("stroke");
        if (strokeColor && strokeColor !== "none") {
          el.setAttribute("stroke", "#8AA3B9");
        }
      });
    });

    // Красим SVG нажатой кнопки в белый
    btn.querySelectorAll("svg path, svg rect, svg circle").forEach((el) => {
      const currentColor = el.getAttribute("fill");
      if (currentColor && currentColor !== "none") {
        el.setAttribute("fill", "#ffffff");
      }
      const strokeColor = el.getAttribute("stroke");
      if (strokeColor && strokeColor !== "none") {
        el.setAttribute("stroke", "#ffffff");
      }
    });
  });
});

let hamburger = document.querySelector(".hamburger");
let menu = document.querySelector(".menu");
let menu_overlay = document.querySelector(".menu_overlay");
let menu_btn_close = document.querySelector(".menu_btn_close");
hamburger.addEventListener("click", () => {
  menu.classList.add("menu_active");
  menu_overlay.classList.add("menu_overlay_active");
});
menu_btn_close.addEventListener("click", () => {
  menu.classList.remove("menu_active");
  menu_overlay.classList.remove("menu_overlay_active");
});

// собираем все якоря; устанавливаем время анимации и количество кадров
const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
  animationTime = 600,
  framesCount = 100;

anchors.forEach(function (item) {
  // каждому якорю присваиваем обработчик события
  item.addEventListener("click", function (e) {
    // убираем стандартное поведение
    e.preventDefault();

    // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
    let coordY =
      document.querySelector(item.getAttribute("href")).getBoundingClientRect()
        .top +
      window.scrollY +
      100;

    // запускаем интервал, в котором
    let scroller = setInterval(function () {
      // считаем на сколько скроллить за 1 такт
      let scrollBy = coordY / framesCount;

      // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
      // и дно страницы не достигнуто
      if (
        scrollBy > window.scrollY - coordY &&
        window.innerHeight + window.scrollY < document.body.offsetHeight - 400
      ) {
        // то скроллим на к-во пикселей, которое соответствует одному такту
        window.scrollBy(0, scrollBy);
      } else {
        // иначе добираемся до элемента и выходим из интервала
        window.scrollTo(0, coordY);
        clearInterval(scroller);
      }
      // время интервала равняется частному от времени анимации и к-ва кадров
    }, animationTime / framesCount);

    setTimeout(() => {
      menu.classList.remove("menu_active");
      menu_overlay.classList.remove("menu_overlay_active");
    }, animationTime + 300);
  });
});
// КОНЕЦ собираем все якоря; устанавливаем время анимации и количество кадров

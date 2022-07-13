const tabsController = document.querySelector(".tabs__controller");
const tabsBtn = document.querySelectorAll(".tabs__controller--btn");
const tabsContent = document.querySelectorAll(".tabs__content");

tabsController.addEventListener("click", function (e) {
  const clicked = e.target.closest(".tabs__controller--btn");
  if (!clicked) return;
  /* 
    COMMENT: Tab Buttons activate and deactivate
  */
  //=== deactivate all buttons  ===//
  tabsBtn.forEach((tabBtn) =>
    tabBtn.classList.remove("tabs__controller--btn-active")
  );

  //=== activate clicked button  ===//
  clicked.classList.add("tabs__controller--btn-active");

  /* 
    COMMENT: Tab content activation
  */
  //===  deactivate all content ===//
  tabsContent.forEach((tabContent) =>
    tabContent.classList.remove("tabs__content--active")
  );
  //=== activate tab content  ===//
  document
    .querySelector(`.tabs__content--${clicked.dataset.tab}`)
    .classList.add("tabs__content--active");
});

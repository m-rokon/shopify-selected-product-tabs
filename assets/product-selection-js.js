const tabbedContent = () => {
  let tab = document.querySelectorAll(".tab-btn");
  let tabContent = document.querySelectorAll(".product-details");

  for (let i = 0; i < tab.length; i++) {
        tab[0].classList.add("active");
        tabContent[0].classList.add("active");
        tab[i].addEventListener("click", (e) => {
            // removing active class form all tabs
            for (let i = 0; i < tab.length; i++) {
            tab[i].classList.remove("active");

            }
            // removing active class from all content tab
            for (let i = 0; i < tabContent.length; i++) {
                tabContent[i].classList.remove("active");
            }
            // adding back the active class when clicked
            e.target.classList.add("active");
            // get the data attribute
            let data_content = e.target.getAttribute("data-tab");
            // adding active class to the tabcontent that matched with data-content
            document.getElementById(data_content).classList.add("active");
        }, false);
  }
};
tabbedContent();

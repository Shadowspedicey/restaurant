const content = document.querySelector("#content");

const mainPage = (function ()
{
  const createMainPage = (() =>
  {
    const createNavBar = (() =>
    {
      const navBar = document.createElement("nav");
      navBar.id = "navbar";

      const div = document.createElement("div");
      div.id = "img-logo-div";
      const img = document.createElement("img");
      img.src = "./images/BCS-Logo-Blank.png"
      div.appendChild(img);
      navBar.appendChild(div);

      const h2 = document.createElement("h2");
      h2.textContent = "Brazillian Coffee Stores";
      navBar.appendChild(h2);

      content.appendChild(navBar);
    })()

    const createHeader = (() =>
    {
      const div = document.createElement("div");
      div.id = "header";

      const h1 = document.createElement("h1");
      h1.textContent = "Brazillian Coffee Stores Since 1929";
      div.appendChild(h1);

      content.appendChild(div);
    })();

    const createMenuBar = (() =>
    {
      console.log("a7a");
      const menubar = document.createElement("div");
      menubar.id = "menubar";

      const ul = document.createElement("ul");

      const reviews = document.createElement("li");
      reviews.classList.add("menuElement");
      reviews.textContent = "Reviews";
      reviews.id = "reviews";
      ul.appendChild(reviews);

      const menu = document.createElement("li");
      menu.textContent = "Menu";
      menu.classList.add("menuElement");
      menu.id = "menu";
      ul.appendChild(menu);

      const contact = document.createElement("li");
      contact.textContent = "Contact";
      contact.classList.add("menuElement");
      contact.id = "contact"
      ul.appendChild(contact);

      menubar.appendChild(ul);

      content.appendChild(menubar);
    })();
  })();

  const _menuElements = document.querySelectorAll(".menuElement");

  const ClearUnderline = () => _menuElements.forEach(element => element.classList.remove("selected"));

  const AddEventListeners = (() =>
  {
    _menuElements.forEach(element =>
      {
        element.addEventListener("click", () =>
        {
          ClearUnderline();
          element.classList.add("selected");
        });
      });
  })();
})()
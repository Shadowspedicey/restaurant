import drinks from "./drinks.js";

const PricesMenu = (() =>
{
  const CreatePricesMenuWindow = () =>
  {
    const menuWindow = document.querySelector("#menu-window");
    
    (function ()
    {
      const __menu = document.querySelector("#menu");
      __menu.classList.add("selected");
    })();

    (function()
    {
      const mainDiv = document.createElement("div");
      mainDiv.id = "prices-window";

      const header = document.createElement("div");
      header.id = "prices-header";
      const headerH2 = document.createElement("h2");
      headerH2.textContent = "Drink";
      header.appendChild(headerH2);
      const headerPriceH2 = document.createElement("h2");
      headerPriceH2.textContent = "Price";
      header.appendChild(headerPriceH2);
      mainDiv.appendChild(header);


      for (let i = 0; i < drinks.length; i++)
      {
        let div = document.createElement("div");
        div.classList.add("drink");

        let nameH2 = document.createElement("h2");
        nameH2.classList.add("drink-name");
        div.appendChild(nameH2);

        let priceH2 = document.createElement("h2");
        priceH2.classList.add("price")
        div.appendChild(priceH2);

        mainDiv.appendChild(div);
      }
      menuWindow.appendChild(mainDiv);
    })();

    (function()
    {
      const _drinks = Array.from(document.querySelectorAll(".drink"));
      for (let i = 0; i < _drinks.length; i++)
      {
        _drinks[i].querySelector(".drink-name").textContent = drinks[i].name;
        _drinks[i].querySelector(".price").textContent = drinks[i].price;
      }
    })()
  }

  return { CreatePricesMenuWindow }
})()

export default PricesMenu.CreatePricesMenuWindow;
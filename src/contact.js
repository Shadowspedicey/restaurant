import locations from "./locations.js";

const Contact = (() =>
{
  const CreateContactWindow = () =>
  {
    const menuWindow = document.querySelector("#menu-window");
    
    (function ()
    {
      const __contact = document.querySelector("#contact");
      __contact.classList.add("selected");
    })();

    (function()
    {
      const mainDiv = document.createElement("div");
      mainDiv.id = "contact-window";

      const header = document.createElement("h2");
      header.textContent = "Visit us at one of our locations!";
      mainDiv.appendChild(header);

      const locationsDiv = document.createElement("div");
      locationsDiv.id = "locations";

      for (let i = 0; i < locations.length; i++)
      {
        let div = document.createElement("div");
        div.classList.add("location");

        let h3 = document.createElement("h3");
        div.appendChild(h3);

        let map = document.createElement("iframe");
        map.height = "300";
        map.style.border = "0";
        map.allowFullscreen = "";
        map.setAttribute("loading", "lazy");
        div.appendChild(map);

        locationsDiv.appendChild(div);
      }
      
      mainDiv.appendChild(locationsDiv);

      const callUs = document.createElement("h2");
      callUs.textContent = "Or call us!";
      mainDiv.appendChild(callUs);

      const number = document.createElement("h2");
      number.textContent = "034865059";
      number.style = "margin:0; font-size:2em;";
      mainDiv.appendChild(number);

      menuWindow.appendChild(mainDiv);
    })();

    (function()
    {
      const _locations = Array.from(document.querySelectorAll(".location"));
      for (let i = 0; i < _locations.length; i++)
      {
        _locations[i].querySelector("h3").textContent = `${locations[i].name}:`;
        _locations[i].querySelector("iframe").src = locations[i].src;
      }
    })()
  }

  return { CreateContactWindow }
})()

export default Contact.CreateContactWindow;
const Review = (review, name) =>
{
  return { review, name}
}
const ahmedReview = Review("7lw nek el sra7a bs m4 a7sn 7aga 4rbtha f el dnya fam?", "-Ahmed Khaled");
const moazReview = Review("el nescafe bkam?", "-Moaz Mohamed");
const abdelrahmanReview = Review("hya 2hwa t2ela fam fa de 7aga ndefa y3ny, value for money w keda b2a", "-Abdelrahman El-Sharkawy");
const shahdReview = Review("hwa 7elw bs mskr el sra7a", "-Shahd Mohamed");

const reviews = [ahmedReview, moazReview, abdelrahmanReview, shahdReview];

const Reviews = (() =>
{
  const CreateReviewsWindow = () =>
  {
    const menuWindow = document.querySelector("#menu-window");

    (function()
    {
      const mainDiv = document.createElement("div");
      mainDiv.id = "reviews-window"

      for (let i = 0; i < 4; i++)
      {
        let div = document.createElement("div");
        div.classList.add("review");

        let p = document.createElement("p");
        div.appendChild(p);

        let span = document.createElement("span");
        div.appendChild(span);

        mainDiv.appendChild(div);
      }
      menuWindow.appendChild(mainDiv);
    })();

    (function()
    {
      const _reviews = Array.from(document.querySelectorAll(".review"));
      for (let i = 0; i < _reviews.length; i++)
      {
        _reviews[i].querySelector("p").textContent = reviews[i].review;
        _reviews[i].querySelector("span").textContent = reviews[i].name;
      }
    })()
  }

  return { CreateReviewsWindow }
})()

export default Reviews.CreateReviewsWindow;
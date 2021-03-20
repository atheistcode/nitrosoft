const btnLeft = document.querySelector('[class*="carousel-btn--left"]');
const btnRight = document.querySelector('[class*="carousel-btn--right"]');

const slides = document.querySelectorAll('[class*="slide--');

let currentIndex = 0;
const maxIndex = slides.length - 1;
const minIndex = 0;

const nextSlide = (index) => {
  if (index < maxIndex) {
    slides[index].style.opacity = "0";
    slides[index].style.visibility = "hidden";
    slides[index + 1].style.opacity = "1";
    slides[index + 1].style.visibility = "visible";

    return (currentIndex += 1);
  }

  if (index === maxIndex || index > maxIndex) {
    slides[minIndex].style.opacity = "1";
    slides[minIndex].style.visibility = "visible";

    for (let i = minIndex + 1; i < slides.length; i++) {
      slides[i].style.opacity = "0";
      slides[i].style.visibility = "hidden";
    }

    return (currentIndex = minIndex);
  }
};

const prevSlide = (index) => {
  if (index > minIndex) {
    slides[index].style.opacity = "0";
    slides[index].style.visibility = "hidden";
    slides[index - 1].style.opacity = "1";
    slides[index - 1].style.visibility = "visible";

    return (currentIndex -= 1);
  }

  if (index === minIndex || index < minIndex) {
    slides[maxIndex].style.opacity = "1";
    slides[maxIndex].style.visibility = "visible";

    for (let i = 0; i < slides.length - 1; i++) {
      slides[i].style.opacity = "0";
      slides[i].style.visibility = "hidden";
    }

    return (currentIndex = maxIndex);
  }
};

btnRight.addEventListener("click", () => nextSlide(currentIndex));
btnLeft.addEventListener("click", () => prevSlide(currentIndex));

setInterval(() => nextSlide(currentIndex), 5000);

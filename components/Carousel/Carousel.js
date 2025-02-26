/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const carouselContainer = document.querySelector('.carousel-container');
carouselContainer.appendChild(createCarousel());

function createCarousel(){
  // create
  const carousel = document.createElement('div');
  const leftBtn = document.createElement('div');
  const image1 = document.createElement('img');
  const image2 = document.createElement('img');
  const image3 = document.createElement('img');
  const image4 = document.createElement('img');
  const rightBtn = document.createElement('div');

  // structure
  carousel.appendChild(leftBtn);
  carousel.appendChild(image1);
  carousel.appendChild(image2);
  carousel.appendChild(image3);
  carousel.appendChild(image4);
  carousel.appendChild(rightBtn);

  // classes
  carousel.classList.add('carousel');
  leftBtn.classList.add('left-button');
  rightBtn.classList.add('right-button');
  // image1.classList.add('show');

  // content
  leftBtn.textContent = '<';
  rightBtn.textContent = '>';

  image1.src = "./assets/carousel/mountains.jpeg";
  image2.src = './assets/carousel/computer.jpeg';
  image3.src = './assets/carousel/trees.jpeg';
  image4.src = './assets/carousel/turntable.jpeg';

  // image switching:
  const imgs = [image1, image2, image3, image4]
  console.log(imgs);
  let currentIndex = 0;
  let currentImg = imgs[currentIndex];
  currentImg.style.display = 'block';

  leftBtn.addEventListener('click', ()=>{previous()})
  rightBtn.addEventListener('click', ()=>{next()});

  function previous(){
    imgs.forEach(img => img.style.display = 'none');
    currentIndex -= 1;
    if (currentIndex < 0) {
      currentIndex = 3;
    }
    currentImg = imgs[currentIndex];
    currentImg.style.display = 'block';
  }

  function next(){
    imgs.forEach(img => img.style.display = 'none');
    currentIndex += 1;
    if (currentIndex > 3){
      currentIndex = 0;
    }
    currentImg = imgs[currentIndex];
    currentImg.style.display = 'block';
  }

  console.log(carousel);
  return carousel;
}


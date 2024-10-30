   const myFunction = () => {
    const selecter = document.getElementById('selecter');
    const input = document.getElementById('input');
    const btn = document.getElementById('btn');
    const result = document.getElementById('result');
  
    btn.addEventListener('click', () => {
      const dataType = selecter.value;
      const inputData = input.value;
  
      if (dataType === 'text') {
        result.textContent = inputData;
      } else if (dataType === 'img') {
        result.innerHTML = `<img src="${inputData}"/>`;
      }
    });
   }

myFunction()
const images = document.querySelectorAll('.carousel img');

const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentImageIndex = 0;

function updateCarousel() {
    images.forEach(img => img.classList.remove('active'));

    images[currentImageIndex].classList.add('active');
}

nextButton.addEventListener('click', () => {
    currentImageIndex++;
    
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    
    updateCarousel();
});

prevButton.addEventListener('click', () => {
    currentImageIndex--;
    
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }
    
    updateCarousel();
});
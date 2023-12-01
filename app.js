document.addEventListener('DOMContentLoaded', function() {
  const square = document.getElementById('colorSquare');

  function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function changeColor() {
    const randomColor = generateRandomColor();
    square.style.backgroundColor = randomColor;
    square.innerText = randomColor;
  }

  square.addEventListener('click', changeColor);
});

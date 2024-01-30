function getRandomColor() {
  return '#'+Math.floor(Math.random()*16777215).toString(16); // Generate random hexadecimal color
}

document.querySelectorAll('.nav-list ul li a').forEach(function(item) {
  item.addEventListener('mouseenter', function() {
    const randomColor1 = getRandomColor();
    const randomColor2 = getRandomColor();
    const randomColor3 = getRandomColor();
    this.style.setProperty('--random-color-1', randomColor1);
    this.style.setProperty('--random-color-2', randomColor2);
    this.style.setProperty('--random-color-3', randomColor3);
  });
});

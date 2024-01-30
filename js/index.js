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

function removeActiveClass() {
  const navPop = document.querySelector('.nav-pop');
  const navList = document.querySelector('.nav-list');

  navPop.classList.remove('active');
  navList.classList.remove('active');
}

// Add event listener for window resize
window.addEventListener('resize', function() {
  // Check if screen width is up to 700px
  if (window.innerWidth >= 700) {
    removeActiveClass(); // Remove active classes
  }
});

window.addEventListener('scroll', function() {
  var navigation = document.getElementById('navigation');
  if (window.scrollY > 0) {
  navigation.style.borderColor = 'rgba(0, 0, 0, 1)'; // Change background color on scroll
  navigation.style.background = 'rgba(0, 0, 0, .3)'; // Change background color on scroll
  } else {
    navigation.style.borderColor = 'transparent'; // Reset background color when scrolled to the top
    navigation.style.background = 'transparent'; 
  }
});

let lastScrollPosition = window.scrollY;

document.querySelector('.nav-pop').addEventListener('click', function() {
  this.classList.toggle('active'); // Toggle active class for rotation
  const navList = document.querySelector('.nav-list');
  navList.classList.toggle("active");
  lastScrollPosition = window.scrollY;
});


// Add event listener for window scroll
window.addEventListener('scroll', function() {
  const currentScrollPosition = window.scrollY;
  if (Math.abs(currentScrollPosition - lastScrollPosition) > 5) {
    removeActiveClass(); // Remove active classes
  }
  lastScrollPosition = currentScrollPosition; // Update last scroll position
});

var buttons = document.querySelectorAll('.btn');
buttons.forEach(function(button) {
  button.addEventListener('click', function(event) {
    event.preventDefault();
    var buttonName = this.innerText;
    alert(buttonName + ' button clicked!');
  });
});
var projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(function(card) {
  card.addEventListener('mouseenter', function() {
    this.style.backgroundColor = 'blue';
  });

  card.addEventListener('mouseleave', function() {
    this.style.backgroundColor = '';
  });
});
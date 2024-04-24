var container1 = document.getElementById('container1');
var container2 = document.getElementById('container2');

container1.addEventListener('mouseenter', function() {
  container1.style.boxShadow = '0 0 30px blue';
});

container1.addEventListener('mouseleave', function() {
  container1.style.boxShadow = '0 0 20px darkgrey';
});

container2.addEventListener('mouseenter', function() {
  container2.style.boxShadow = '0 0 30px purple';
});

container2.addEventListener('mouseleave', function() {
  container2.style.boxShadow = '0 0 20px darkgrey';
});
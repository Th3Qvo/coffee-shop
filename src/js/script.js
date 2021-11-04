
const productInfo = document.getElementById('product-coffee-one').innerHTML;
const template = Handlebars.compile(productInfo);
const productData = template({
  no: '01.',
  name: 'LA LAGARTIJA',
  roasting: '5/10',
  intensity: '6/10',
  description: 'Mysterious and treacherous... The best choice for the start of your journey! It will provide you a rich delicious flavor.',
  images: '<img src="/images/coffee-1.png alt="">',
});
document.getElementById('products').innerHTML += productData;


const showSection = function(id) {
  const sections = document.querySelectorAll('main section');
  for(let section of sections) {
    section.classList.remove('active');
  }
  
  const sectionToShow = document.querySelector('main ' + id);
  sectionToShow.classList.add('active');
};
  
const navigationInit = function() {
  const buttons = document.querySelectorAll('.nav-list li a');
  for(let button of buttons) {
    button.addEventListener('click', function(event) {
      event.preventDefault();
  
      const sectionToShowId = event.target.getAttribute('href');
      showSection(sectionToShowId);
    });
  }
};
  
navigationInit();

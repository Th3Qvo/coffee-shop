const showSection = function(id) {
  const sections = document.querySelectorAll('main section');
  for(let section of sections) {
    section.classList.remove('active');
  }
  
  const sectionToShow = document.querySelector('main ' + id);
  sectionToShow.classList.add('active');
}
  
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
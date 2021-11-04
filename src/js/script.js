
const productInfo = document.getElementById('product-card').innerHTML;
console.log('productCard', productInfo);
const template = Handlebars.compile(productInfo);
const productData = template(
  {
    'no': '01.',
    'name': 'LA LAGARTIJA',
    'roasting': '5/10',
    'intensity': '6/10',
    'description': 'Mysterious and treacherous... The best choice for the start of your journey! It will provide you a rich delicious flavor.',
    'most-popular': [
      '<img src="images/badge.png">'
    ],
    'images': [
      '<img src="/images/coffee-1.png">'
    ]
  },
  {
    'no': '02.',
    'name': 'EL TIGRE',
    'roasting': '8/10',
    'intensity': '9/10',
    'description': 'Really dark coffee, only for the real gourmets. It has bitter flavor of grapefruits and is mixed with a little bit of peanuts with caramel.',
    'images': [
      '<img src="images/coffee-2.png">'
    ]
  },
  {
    'no': '03.',
    'name': 'LA CUCARACHA',
    'roasting': '3/10',
    'intensity': '7/10',
    'description': 'Sweet and intense with a big amount of different flavors. Caramel,  grapes, strwaberry, you name it! It’s great choice for warm summer days.',
    'images': [
      '<img src="images/coffee-3.png">'
    ]
  });
document.getElementById('product-card').innerHTML += productData;


// const products = [
//   {
//     'no': '01.',
//     'name': 'LA LAGARTIJA',
//     'roasting': '5/10',
//     'intensity': '6/10',
//     'description': 'Mysterious and treacherous... The best choice for the start of your journey! It will provide you a rich delicious flavor.',
//     'most-popular': [
//       '<img src="images/badge.png">'
//     ],
//     'images': [
//       '<img src="/images/coffee-1.png">'
//     ]
//   },
//   {
//     'no': '02.',
//     'name': 'EL TIGRE',
//     'roasting': '8/10',
//     'intensity': '9/10',
//     'description': 'Really dark coffee, only for the real gourmets. It has bitter flavor of grapefruits and is mixed with a little bit of peanuts with caramel.',
//     'images': [
//       '<img src="images/coffee-2.png">'
//     ]
//   },
//   {
//     'no': '03.',
//     'name': 'LA CUCARACHA',
//     'roasting': '3/10',
//     'intensity': '7/10',
//     'description': 'Sweet and intense with a big amount of different flavors. Caramel,  grapes, strwaberry, you name it! It’s great choice for warm summer days.',
//     'images': [
//       '<img src="images/coffee-3.png">'
//     ]
//   }
// ];

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

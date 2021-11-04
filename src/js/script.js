/* global Handlebars, dataSource */

const utils = {}; // eslint-disable-line no-unused-vars

utils.createDOMFromHTML = function(htmlString) {
  let div = document.createElement('div');
  div.innerHTML = htmlString.trim();
  return div.firstChild;
};

utils.createPropIfUndefined = function(obj, key, value = []){
  if(!obj.hasOwnProperty(key)){
    obj[key] = value;
  }
};

utils.serializeFormToObject = function(form){
  let output = {};
  if (typeof form == 'object' && form.nodeName == 'FORM') {
    for (let field of form.elements) {
      if (field.name && !field.disabled && field.type != 'file' && field.type != 'reset' && field.type != 'submit' && field.type != 'button') {
        if (field.type == 'select-multiple') {
          for (let option of field.options) {
            if(option.selected) {
              utils.createPropIfUndefined(output, field.name);
              output[field.name].push(option.value);
            }
          }
        } else if ((field.type != 'checkbox' && field.type != 'radio') || field.checked) {
          utils.createPropIfUndefined(output, field.name);
          output[field.name].push(field.value);
        } else if(!output[field.name]) output[field.name] = [];
      }
    }
  }
  return output;
};

utils.convertDataSourceToDbJson = function(){
  const productJson = [];
  for(let key in dataSource.products){
    productJson.push(Object.assign({id: key}, dataSource.products[key]));
  }

  console.log(JSON.stringify({product: productJson, order: []}, null, '  '));
};

Handlebars.registerHelper('ifEquals', function(arg1, arg2, options) {
  return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
});

Handlebars.registerHelper('joinValues', function(input, options) {
  return Object.values(input).join(options.fn(this));
});


const productInfo = document.getElementById('product-coffee-one').innerHTML;
const template = Handlebars.compile(productInfo);
const productData = template({
  no: '01.',
  name: 'LA LAGARTIJA',
  roasting: '5/10',
  intensity: '6/10',
  description: 'Mysterious and treacherous... The best choice for the start of your journey! It will provide you a rich delicious flavor.',
  images: utils.createDOMFromHTML('<img src="../../images/coffee-1.png alt="">'),
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

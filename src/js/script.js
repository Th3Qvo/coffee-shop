import { utils } from './utils.js';
import { settings, templates, select, classNames } from './settings.js';

class Product {
  constructor(id, data){
    const thisProduct = this;
    thisProduct.id = id;
    thisProduct.data = data;

    thisProduct.render();
  }

  render(){
    const thisProduct = this;
    const generatedHTML = templates.menuProduct(thisProduct.data);
    thisProduct.element = utils.createDOMFromHTML(generatedHTML);
    const menuContainer = document.querySelector(select.containerOf.menuProduct);
    menuContainer.appendChild(thisProduct.element);
  }
}

const app = {
  init: function(){
    const thisApp = this;
    thisApp.initData();
    thisApp.initPages();
  },

  initPages: function(){
    const thisApp = this;
    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    thisApp.navLinks = document.querySelectorAll(select.items.navLinks);
    const idFromHash = window.location.hash.replace('#', '');
    let pageMatchingHash = thisApp.pages[0].id;
    for(let page of thisApp.pages){
      if(page.id == idFromHash){
        pageMatchingHash = page.id;
        break;
      }
    }
    thisApp.activatePage(pageMatchingHash);

    for(let link of thisApp.navLinks){
      link.addEventListener('click', function(event){
        event.preventDefault();
        const clickedItem = this;
        const idFromHref = clickedItem.getAttribute('href').replace('#', '');
        thisApp.activatePage(idFromHref);
        window.location.hash = '/#' + idFromHref;
      });
    }
  },

  activatePage: function(pageId){
    const thisApp = this;
    for(let page of thisApp.pages){
      page.classList.toggle(classNames.pages.active, page.id == pageId);
    }
    for(let link of thisApp.navLinks){
      link.classList.toggle(
        classNames.navLinks.active,
        link.getAttribute('href') == '#' + pageId
      );
    }
  },

  initMenu: function(){
    const thisApp = this;
    for(let productData in thisApp.data.products){
      console.log(thisApp.data.products[productData]);
      new Product(thisApp.data.products[productData].id, thisApp.data.products[productData]);
    }
  },

  initData: function(){
    const thisApp = this;
    thisApp.data = {};
    const url = settings.db.url + '/' + settings.db.products;
    fetch(url)
      .then(function(rawResponse){
        return rawResponse.json();
      })
      .then(function(parsedResponse){
        thisApp.data.products = parsedResponse;
        thisApp.initMenu();
      });
  },
};

app.init();
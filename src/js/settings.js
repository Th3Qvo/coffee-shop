export const settings = {
  db: {
    url: 'http://localhost:3131',
    products: 'products',
  },
};

export const select = {
  templateOf: {
    menuProduct: '#template-menu-product',
  },
  containerOf: {
    menuProduct: '.section-menu-product',
    pages: '.pages',
  },
  items: {
    navLinks: '.nav-list a',
  }
};

export const classNames = {
  pages: {
    active: 'active',
  },
  navLinks: {
    active: 'active',
  },
};

export const templates = {
  menuProduct: Handlebars.compile(document.querySelector(select.templateOf.menuProduct).innerHTML),
};
const pages = [
  {
    path: `/`,
    component: `src/Templates/Landing/index.js`,
    context: {},
  },

  {
    path: `/products`,
    component: `src/Templates/ProductList/index.js`,
    context: {},
  },

  {
    path: `/product`,
    component: `src/Templates/ProductDetail/index.js`,
    context: {},
  },

  {
    path: `/articles`,
    component: `src/Templates/ArticleList/index.js`,
    context: {},
  },

  {
    path: `/article`,
    component: `src/Templates/ArticleDetail/index.js`,
    context: {},
  },

  {
    path: `/register/request`,
    component: `src/Templates/Register/RequestPage.js`,
    context: {},
  },

  {
    path: `/register/confirm`,
    component: `src/Templates/Register/ConfirmPage.js`,
    context: {},
  },

  {
    path: `/forgot-password/request`,
    component: `src/Templates/ForgotPassword/RequestPage.js`,
    context: {},
  },

  {
    path: `/forgot-password/confirm`,
    component: `src/Templates/ForgotPassword/ConfirmPage.js`,
    context: {},
  },

  {
    path: `/social-login`,
    component: `src/Templates/SocialLogin/index.js`,
    context: {},
  },

  {
    path: `/profile`,
    component: `src/Templates/Profile/index.js`,
    context: {},
  },

  {
    path: `/profile/orders`,
    component: `src/Templates/OrderList/index.js`,
    context: {},
  },

  {
    path: `/checkout`,
    component: `src/Templates/Cart/index.js`,
    context: {},
  },

  {
    path: `/checkout/info`,
    component: `src/Templates/CheckoutInfo/index.js`,
    context: {},
  },

  {
    path: `/checkout/review`,
    component: `src/Templates/CheckoutReview/index.js`,
    context: {},
  },

  {
    path: `/admin`,
    component: `src/Templates/Admin/index.js`,
    context: {},
  },

  {
    path: `/admin/settings`,
    component: `src/Templates/AdminSettings/index.js`,
    context: {},
  },

  {
    path: `/admin/articles`,
    component: `src/Templates/AdminArticles/index.js`,
    context: {},
  },

  {
    path: `/admin/images`,
    component: `src/Templates/AdminImageList/index.js`,
    context: {},
  },
];

const config = {
  generateAdmin: true,
  generatePromo: true,
  generateMarkdown: true,
};

exports.pages = pages;
exports.config = config;
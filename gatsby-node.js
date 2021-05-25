const path = require('path');

exports.createPages = async ({graphql, actions}) => {
  const {createPage} = actions;

  const env = process.env.REV_ENV || 'stg';
  const commonContext = {env};

  createPage({
    path: `/`,
    component: path.resolve(`src/Templates/Landing/index.js`),
    context: {...commonContext},
  });

  createPage({
    path: `/admin`,
    component: path.resolve(`src/Templates/Admin/index.js`),
    context: {...commonContext},
  });

  createPage({
    path: `/admin/settings`,
    component: path.resolve(`src/Templates/AdminSettings/index.js`),
    context: {...commonContext},
  });

  createPage({
    path: `/admin/articles`,
    component: path.resolve(`src/Templates/AdminArticles/index.js`),
    context: {...commonContext},
  });
};

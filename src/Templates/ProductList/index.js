import React from 'react';
import ProductGrid from './ProductGrid';
import ProductListPage from 'rev.sdk.js/Templates/ProductList';
import * as AppActions from '../../AppActions';

function ProductList(props) {
  let onCustomClick = (item) => {
    if (props.location.pathname.indexOf('/products') > -1) {
      AppActions.navigate(`/product?id=${item.id}`, {loading: true});
    } else if (props.location.pathname.indexOf('/articles') > -1) {
      AppActions.navigate(`/article?id=${item.id}`, {loading: true});
    }
  };
  return (
    <div style={{maxWidth: 'var(--contentMaxWidth)', margin: '0 auto'}}>
      <ProductListPage
        {...props}
        ProductGrid={ProductGrid}
        onCustomClick={onCustomClick}
      />
    </div>
  );
}

export default ProductList;

import React from 'react';

const ProductOrder = ({}) => {

  return (<div className="product-order">
    <div className='price'>Итого: 20 200 руб.</div>
    <div class="divider"></div>
    <div className="columns">
      <div className="form-horizontal column col-xs-12 col-sm-12 col-lg-6 col-xl-6 col-6">
        <div class="form-group">
          <div class="col-3 col-sm-12">
            <label class="form-label">Кол-во:</label>
          </div>
          <div class="col-3 col-sm-12">
            <input class="form-input" type="number" />
          </div>
        </div>
      </div>
      <div className="to_cart column col-xs-12 col-sm-12 col-lg-6 col-xl-6 col-6">
        <button class="btn btn-primary  btn-lg">
          <i class="fa fa-cart-plus" aria-hidden="true"></i>&nbsp; В корзину</button>
      </div>
    </div>
    <div class="divider"></div>
  </div>)

}

export default ProductOrder;

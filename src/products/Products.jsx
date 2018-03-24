import React from 'react';
import Product from './Product';

const Products = ({columns}) => {

  return (<div className="columns products">

    <Product columns={columns} caption={'Крем для лица Айва 5мл Крем для лица Айва 5мл'}/>
    <Product columns={columns} caption={'Крем для лица Айва 5мл'}/>
    <Product columns={columns} caption={'Крем для лица Айва 5мл'}/>
    <Product columns={columns} caption={'Крем для лица Айва 5мл'}/>
    <Product columns={columns} caption={'Крем для лица Айва 5мл'}/>
    <Product columns={columns} caption={'Крем для лица Айва 5мл'}/>

  </div>)
}

export default Products;

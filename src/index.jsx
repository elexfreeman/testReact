import React from 'react';
import {render} from 'react-dom';
import MenuTop from './menu-top/MenuTop';
import Slider from './main-page/Slider'

import MenuLeft from './menu-left/MenuLeft';

import Offer from './main-page/Offer';

import BaseHead from './base/BaseHead';
import Products from './products/Products';



import './styles/main.scss';

render(<div>

  <MenuTop/>

  <div className="center-container-wrap-g">
    <div className="container grid-xl center-container">
      <div className="columns">
        <div className="column col-xs-2 col-lg-4 col-xl-4 col-3">
          <MenuLeft/>
        </div>
        <div className="column col-xs-10 col-lg-8 col-xl-8 col-9">
          <Offer/>
          <BaseHead caption={'Новые поступления'}/>
          <Products columns={4}/>
        </div>
      </div>
    </div>
  </div>

  <div className='center-container-wrap-w'>
    <div className="container grid-xl center-container">
        <BaseHead caption={'Популярные среди женшин вашего города'}/>
      <div className="columns">
        <Products  columns={3}/>
      </div>
    </div>
  </div>

</div>, document.getElementById('root'));
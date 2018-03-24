import React, {Component} from 'react';

import SearchTop from './Search';
import MenuButton from './MenuButton';
import CartButton from './CartButton';


class MenuTop extends Component {
  render() {
    return (<header className="navbar">
      <div className="container grid-xl">
        <div className="columns">
          <div className="column col-xs-2">
            <div className='logo'>
              <span>Rouse</span>.One
            </div>
          </div>

          <div className="column col-xs-8">
            <SearchTop/>
          </div>

          <div className="column col-xs-2 text-right">
            <CartButton/>
            <MenuButton/>
          </div>
        </div>
      </div>

    </header>);
  }
}

export default MenuTop;

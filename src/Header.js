import React from 'react'
import './Header.css'
import logo from './logo.svg';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
function Header() {
  return (
    <div className='header'>
        <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="no logo:)"/>
        

        <div className='header_search'>
            <input type="text" className='header_searchInput'/>
            <SearchIcon className='searchicon'/>
        </div>

        <div className='header_nav'>

            <div className='header_option'>
                <span className='optionL1'>
                  Hello Guest
                </span>
                <span className='optionL2'>
                  Sign In
                </span>
            </div>

            <div className='header_option'>
                <span className='optionL1'>
                  Returns
                </span>
                <span className='optionL2'>
                  &Orders
                </span>
            </div>

            <div className='header_option'>
                <span className='optionL1'>
                  Join
                </span>
                <span className='optionL2'>
                  Prime
                </span>
            </div>

            <div className='option_basket'>
                <ShoppingCartIcon className='cart'/>
                <span className='optionL2 basketCount'>0</span>
            </div>

        </div>

    </div>
  );
}

export default Header
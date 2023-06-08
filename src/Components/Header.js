import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Location from '@mui/icons-material/ShareLocation';
import { Link } from 'react-router-dom';
import {useStateValue} from "./StateProvider"

function Header() {

  const [{basket},dispatch]=useStateValue();
  return (
    <div className='header'>
        <Link to="/">
            <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="no logo:)"/>
            
        </Link>
        
        <div className='header_option'>
            <span className='optionL1'>
              Hello
            </span>
            <span className='optionL2'>
              Select your address
            </span>
        </div>

        <div className='header_search'>
            <input type="text" className='header_searchInput'/>
            <SearchIcon className='searchicon'/>
        </div>

        <div className='header_nav'>

            <Link to='/login'>
             <div className='header_option'>
                <span className='optionL1'>
                  Hello Guest
                </span>
                <span className='optionL2'>
                  Sign In
                </span>
              </div>
            </Link>

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
            <Link to="/checkout">
              <div className='option_basket'>
                <ShoppingCartIcon className='cart'/>
                <span className='optionL2 basketCount'>{basket?.length }</span>
              </div>
            </Link>

        </div>

    </div>
  );
}

export default Header;
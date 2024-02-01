// MobileHeader.js

import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublicIcon from '@mui/icons-material/Public';
import user from '../assets/Userprofile.png';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';

const MobileHeader = () => {
  return (
    <div className='mobile-header'>
      <div className='brbox'>
        <div className='brac-mob'>Brackets </div>
      </div>
      <div className='d-flex mob-head-icon justify-content-between'>
      <div className='d-flex'>
      <FavoriteBorderIcon style={{ margin: '2px' }} />
      <div className='hr-line'/>
        <PublicIcon style={{ margin: '2px' }} /> Public &nbsp;
     <div className='hr-line'/>
        <ShoppingBasketOutlinedIcon style={{ margin: '2px' }} />
      </div>
       <div className='d-flex '> 
       <img src={user} alt="User Profile" style={{height:'4vh'}}/>
        <div className='menu-mob'>Menu</div></div>
      </div>
    </div>
  );
};

export default MobileHeader;

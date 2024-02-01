// MobileNav.js

import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import user from '../assets/User.png'
import graph from '../assets/graphIcon.png'


const MobileNav = () => {
  const handleSearch = (query) => {
    console.log('Search query:', query);
  };

  return (
    <div className='mobile-nav'>
      <div className='inner-mobile-nav'>
        <div className='mob-nav-start'><img src={graph}/> <SearchIcon className='iconnav'/></div>
        <div className='mob-nav-end'>
            <div className='mob-nav-icon'> <AddCircleOutlineRoundedIcon className='iconnav'/> <ErrorOutlineRoundedIcon className='iconnav'/><NotificationsOutlinedIcon className='iconnav'/ ></div>
            <div className='mob-nav-user'>
                <img src={user}/> 
            </div>
        </div>
        
      </div>
    </div>
  );
};

export default MobileNav;

import React from 'react'
import graph from '../assets/graphIcon.png'
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import user from '../assets/User.png'
import SearchBar from './SearchBar';

const Nav = () => {
    const handleSearch = (query) => {
        console.log('Search query:', query);
      };
  return (
    <div className='navv'>
        <div className='inner-nav'>
            <div className='title'>Trello</div>
            <div className='hr-line'/>
            <div className='Boards'><img src={graph}/>Boards</div>
            <div className='hr-line'/>
            <div className='Search'>  <SearchBar onSearch={handleSearch} /> </div>
            <div className='sidenav'>
            <div><AddCircleOutlineRoundedIcon className='iconnav' />
            <NotificationsOutlinedIcon className='iconnav'/> 
            <ErrorOutlineRoundedIcon className='iconnav'/></div>
            <div><img src={user} style={{margin:'5px',height:'5vh',marginRight:'2vw'}}/></div>
            </div>
     
        </div>
    </div>
  )
}

export default Nav
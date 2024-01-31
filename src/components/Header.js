import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublicIcon from '@mui/icons-material/Public';
import user from '../assets/Userprofile.png'
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
const Header = () => {
  return (
    <div className='Bracketnav'>
      <div className='brbox'><div className='brac'>Brackets </div><FavoriteBorderIcon style={{margin:'10px'}}/> <div className='hr-line'/>< PublicIcon style={{margin:'10px'}}/> Public &nbsp;<div className='hr-line'/><ShoppingBasketOutlinedIcon style={{margin:'10px'}}/></div>
      <div className='d-flex'><img src={user}/> <div className='menu'>Menu</div></div></div>
  )
}

export default Header
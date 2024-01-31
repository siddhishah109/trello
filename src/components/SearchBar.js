// SearchBar.js
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ placeholder, onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    onSearch(searchText);
  };

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleIconClick = () => {
    setSearchText('');
    handleSearch();
  };

  return (
    <div className='searchbar'>
      <TextField
        placeholder={placeholder || 'Search...'}
        fullWidth
        value={searchText}
        onChange={handleInputChange}
        InputProps={{
          endAdornment: (
            <SearchIcon
              style={{ marginLeft: 10, marginRight: 5, color: '#757575', cursor: 'pointer' }}
              onClick={handleIconClick}
            />
          ),
          style: {
            borderRadius: '0 25px 25px 0',
          },
        }}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleSearch();
          }
        }}
      />
    </div>
  );
};

export default SearchBar;

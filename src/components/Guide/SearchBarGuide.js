import React, {useState, useCallback} from 'react';
import {Searchbar} from 'react-native-paper';
import {debounce} from 'lodash';

const SearchBar = ({placeholder}) => {
  return <Searchbar placeholder={placeholder} size />;
};

export default SearchBar;

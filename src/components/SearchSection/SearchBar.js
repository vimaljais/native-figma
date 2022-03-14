import React, {useState, useCallback} from 'react';
import {Searchbar} from 'react-native-paper';
import {debounce} from 'lodash';

const SearchBar = ({placeholder, setQuery, query}) => {
  const [localQuery, setLocalQuery] = useState('Maldives');

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSave = useCallback(
    debounce(q => setQuery(q), 1000),
    [query],
  );

  const onChangeSearch = q => {
    setLocalQuery(q);
    debouncedSave(q);
  };

  return (
    <Searchbar
      placeholder={placeholder}
      size
      onChangeText={onChangeSearch}
      value={localQuery}
    />
  );
};

export default SearchBar;

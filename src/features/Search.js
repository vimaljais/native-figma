import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import SearchBar from '../components/SearchSection/SearchBar';
import Destinations from '../components/SearchSection/Destinations';
import Attractions from '../components/SearchSection/Attractions';
import {api} from '../utils/api';

const Search = ({placeholder = 'Search'}) => {
  const [query, setQuery] = useState('Maldives');
  const [ImgList, setImgList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(
      `https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=${api}`,
    ).then(res =>
      res.json().then(res => {
        setImgList(prev => [...prev, ...res.results]);
      }),
    );
  }, [query, page]);

  const fetchAgain = () => {
    setPage(prev => prev + 1);
  };

  return (
    <View style={styles.scrollView}>
      <Text style={styles.heading}>Search</Text>
      <View style={styles.searchbar}>
        <SearchBar
          setQuery={setQuery}
          query={query}
          placeholder={placeholder}
        />
      </View>
      <Text style={styles.destination}>Top Destinations</Text>
      <View>
        <Destinations />
      </View>
      <Text style={styles.attraction}>Nearby Attractions</Text>
      <Attractions query={query} ImgList={ImgList} fetchAgain={fetchAgain} />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  heading: {
    fontSize: 28,
    fontWeight: '600',
    color: 'black',
    marginTop: 40,
    marginLeft: 20,
  },
  searchbar: {
    margin: 20,
  },
  destination: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
    marginLeft: 20,
  },
  attraction: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
    marginLeft: 20,
    marginTop: 15,
  },
  scrollView: {
    marginHorizontal: 0,
    flex: 1,
  },
});

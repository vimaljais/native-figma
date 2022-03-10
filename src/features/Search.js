import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SearchBar from '../components/SearchSection/SearchBar';
import Destinations from '../components/SearchSection/Destinations';
import Attractions from '../components/SearchSection/Attractions';

const Search = ({placeholder = 'Search'}) => {
  return (
    <View>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.heading}>Search</Text>
        <View style={styles.searchbar}>
          <SearchBar placeholder={placeholder} />
        </View>
        <Text style={styles.destination}>Top Destinations</Text>
        <Destinations />
        <Text style={styles.attraction}>Nearby Attractions</Text>
        <Attractions />
      </ScrollView>
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
  },
});

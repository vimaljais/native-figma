import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import GuideStories from '../components/Guide/GuideStories';
import SearchBar from '../components/SearchSection/SearchBar';
import ButtonGroup from '../components/Guide/ButtonGroup';
import Articles from '../components/Guide/Articles';

const Guide = () => {
  return (
    <View>
      <Text style={styles.heading}>Trip Plan</Text>
      <View style={styles.headerContainer}>
        <Text style={styles.need}>MIGHT NEED THIS</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>
      <GuideStories />
      <View style={styles.search}>
        <SearchBar placeholder="Search for a place" />
      </View>
      <ButtonGroup />
      <Text style={styles.top}>Top-pick articles</Text>
      <Articles />
    </View>
  );
};

export default Guide;

const styles = StyleSheet.create({
  heading: {
    fontSize: 28,
    fontWeight: '600',
    color: 'black',
    marginTop: 40,
    marginLeft: 20,
  },
  top: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
    marginTop: 20,
    marginLeft: 20,
  },
  headerContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  need: {
    fontWeight: '600',
    fontSize: 14,
    color: 'black',
  },
  seeAll: {
    fontWeight: '500',
    color: 'red',
    textDecorationLine: 'underline',
  },
  search: {
    margin: 20,
  },
});

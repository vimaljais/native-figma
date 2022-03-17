import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import GuideStories from '../components/Guide/GuideStories';
import SearchBarGuide from '../components/Guide/SearchBarGuide';
import ButtonGroup from '../components/Guide/ButtonGroup';
import Articles from '../components/Guide/Articles';

const Guide = () => {
  const [selected, setSelected] = useState('sightseeing');

  return (
    <View style={styles.guideContainer}>
      <Text style={styles.heading}>Guide</Text>
      <View style={styles.headerContainer}>
        <Text style={styles.need}>MIGHT NEED THIS</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>
      <View>
        <GuideStories />
      </View>
      <View style={styles.search}>
        <SearchBarGuide placeholder="Search for a place" />
      </View>
      <View>
        <ButtonGroup setSelected={setSelected} selected={selected} />
      </View>
      <Text style={styles.top}>Top-pick articles</Text>
      <Articles selected={selected} />
    </View>
  );
};

export default Guide;

const styles = StyleSheet.create({
  guideContainer: {
    flex: 1,
  },
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

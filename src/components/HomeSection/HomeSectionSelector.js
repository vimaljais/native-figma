import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const LIST = [
  {
    id: 1,
    name: 'All',
  },
  {
    id: 2,
    name: 'Flights',
  },
  {
    id: 3,
    name: 'Hotels',
  },
  {
    id: 4,
    name: 'Transportations',
  },
];

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={[title === 'All' ? styles.titleSelected : styles.title]}>
      {title}
    </Text>
  </View>
);

const HomeSectionSelector = () => {
  const renderItem = ({item}) => <Item title={item.name} />;
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={LIST}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default HomeSectionSelector;

const styles = StyleSheet.create({
  container: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 15,
  },
  title: {
    fontSize: 15,
    marginRight: 20,
  },
  titleSelected: {
    fontSize: 15,
    marginRight: 20,
    color: 'red',
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
});

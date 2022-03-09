import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TRAVEL_LIST = [
  {
    id: 1,
    name: 'Flights',
  },
  {
    id: 2,
    name: 'Hotels',
  },
  {
    id: 3,
    name: 'Cars',
  },
  {
    id: 4,
    name: 'Taxi',
  },
];

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Travel = () => {
  const renderItem = ({item}) => <Item title={item.name} />;
  return (
    <View style={styles.container}>
      <FlatList
        data={TRAVEL_LIST}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Travel;

const styles = StyleSheet.create({});

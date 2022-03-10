import {FlatList, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IconButton} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';

const TRAVEL_LIST = [
  {
    id: 1,
    name: 'Flights',
    icon: 'plane-departure',
  },
  {
    id: 2,
    name: 'Hotels',
    icon: 'hotel',
  },
  {
    id: 3,
    name: 'Cars',
    icon: 'car',
  },
  {
    id: 4,
    name: 'Taxi',
    icon: 'taxi',
  },
];

const Item = ({title, icon_name}) => (
  <View style={styles.item}>
    <Icon name={icon_name} size={30} color="white" />
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Travel = () => {
  const renderItem = ({item}) => (
    <Item title={item.name} icon_name={item.icon} />
  );
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={TRAVEL_LIST}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Travel;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  item: {
    justifyContent: 'center',
    textAlign: 'center',
    alignContent: 'center',
    alignItems: 'center',
    width: 100,
  },
  title: {
    marginTop: 10,
    fontWeight: '500',
    color: 'white',
    textAlign: 'center',
  },
});

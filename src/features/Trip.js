import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Selector from '../components/TripSection/Selector';
import Attractions from '../components/SearchSection/Attractions';
import Covid from '../components/TripSection/Covid';

const Trip = () => {
  return (
    <View>
      <Text style={styles.heading}>Trip Plan!</Text>
      <Selector />
      <Attractions />
      <Covid />
    </View>
  );
};

export default Trip;

const styles = StyleSheet.create({
  heading: {
    fontSize: 28,
    fontWeight: '600',
    color: 'black',
    marginTop: 40,
    marginLeft: 20,
  },
});

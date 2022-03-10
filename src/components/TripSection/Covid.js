import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';

const Covid = () => {
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <View style={styles.info}>
          <Text style={styles.main}>Here's a checklist for your trip 👋 </Text>
          <Text style={styles.subtext}>
            As your upcoming destination has some travel restrictions due to
            COVID-19.
          </Text>
        </View>
        <View style={styles.arrow}>
          <Icon name="angle-right" size={30} color="#900" />
        </View>
      </View>
    </View>
  );
};

export default Covid;

const styles = StyleSheet.create({
  banner: {
    flexDirection: 'row',
    width: 330,
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(253, 157, 148, 0.4)',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  main: {
    fontWeight: '600',
    fontSize: 15,
    marginBottom: 10,
    color: '#990014',
  },
  subtext: {
    color: '#FF4760',
    fontSize: 13,
  },
  arrow: {
    justifyContent: 'center',
  },
  info: {
    paddingRight: 20,
    marginLeft: 10,
    flex: 0.9,
  },
});

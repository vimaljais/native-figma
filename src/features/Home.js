import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Avatar, IconButton} from 'react-native-paper';

import bg from '../assets/15.png';

const Home = () => {
  console.log('dasds');
  return (
    <View style={styles.home}>
      <ImageBackground source={bg} resizeMode="cover" style={styles.image}>
        <View style={styles.header}>
          <View>
            <Avatar.Image size={40} source={require('../assets/14.jpeg')} />
          </View>
          <View style={styles.icons}>
            <IconButton
              style={styles.barcode}
              icon="barcode-scan"
              color="white"
              size={30}
              onPress={() => console.log('Pressed')}
            />
            <IconButton
              style={styles.barcode}
              icon="bell"
              color="white"
              size={30}
              onPress={() => console.log('Pressed')}
            />
          </View>
        </View>
        <Text style={styles.heading}>Where's your next destination</Text>
      </ImageBackground>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  home: {flex: 1},
  image: {
    flex: 0.5,
  },
  header: {
    marginTop: 50,
    marginLeft: 20,
    marginRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  barcode: {
    margin: 0,
  },
  icons: {
    flexDirection: 'row',
  },
  heading: {
    marginTop: 80,
    color: 'white',
    fontSize: 35,
    marginLeft: 15,
  },
});

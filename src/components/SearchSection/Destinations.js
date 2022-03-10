import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {Card} from 'react-native-paper';

const Destinations = () => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        <Card style={styles.cardList}>
          <ImageBackground
            source={require('../../assets/11.jpeg')}
            resizeMode="cover"
            imageStyle={styles.img}
            style={styles.imgContainer}>
            <View style={styles.imgContainer}>
              <Text style={styles.textInside}>Tokyo</Text>
              <Text style={styles.textInsideSmall}>Japan</Text>
            </View>
          </ImageBackground>
        </Card>

        <Card style={styles.cardList}>
          <ImageBackground
            source={require('../../assets/10.jpeg')}
            resizeMode="cover"
            imageStyle={styles.img}
            style={styles.imgContainer}>
            <View style={styles.imgContainer}>
              <Text style={styles.textInside}>Sydney</Text>
              <Text style={styles.textInsideSmall}>Australia</Text>
            </View>
          </ImageBackground>
        </Card>
        <Card style={styles.cardList}>
          <ImageBackground
            source={require('../../assets/9.jpeg')}
            resizeMode="cover"
            imageStyle={styles.img}
            style={styles.imgContainer}>
            <View style={styles.imgContainer}>
              <Text style={styles.textInside}>Armsterdam</Text>
              <Text style={styles.textInsideSmall}>Neitherlands</Text>
            </View>
          </ImageBackground>
        </Card>
      </View>
    </ScrollView>
  );
};

export default Destinations;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginLeft: 10,
    flexDirection: 'row',
  },

  img: {
    height: 200,
    borderRadius: 10,
  },
  imgContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    width: 150,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 10,
  },
  cardList: {
    borderRadius: 10,
    width: 150,
    marginRight: 15,
  },
  textInside: {
    color: 'white',
    fontWeight: '600',
    fontSize: 20,
  },
  textInsideSmall: {
    color: 'white',
  },
});

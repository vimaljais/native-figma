import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {Card} from 'react-native-paper';

const GuideStories = () => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        <Card style={styles.cardList}>
          <ImageBackground
            source={require('../../assets/5.jpeg')}
            resizeMode="cover"
            imageStyle={styles.img}
            style={styles.imgContainer}>
            <View style={styles.imgContainer}>
              <Text style={styles.textInside}>Budget Travel</Text>
            </View>
          </ImageBackground>
        </Card>

        <Card style={styles.cardList}>
          <ImageBackground
            source={require('../../assets/4.jpeg')}
            resizeMode="cover"
            imageStyle={styles.img}
            style={styles.imgContainer}>
            <View style={styles.imgContainer}>
              <Text style={styles.textInside}>First Time Abroad</Text>
            </View>
          </ImageBackground>
        </Card>
        <Card style={styles.cardList}>
          <ImageBackground
            source={require('../../assets/3.jpeg')}
            resizeMode="cover"
            imageStyle={styles.img}
            style={styles.imgContainer}>
            <View style={styles.imgContainer}>
              <Text style={styles.textInside}>Safe Travel</Text>
            </View>
          </ImageBackground>
        </Card>
      </View>
    </ScrollView>
  );
};

export default GuideStories;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginLeft: 10,
    flexDirection: 'row',
  },

  img: {
    borderRadius: 10,
  },
  imgContainer: {
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    height: 140,
    width: 108,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 10,
  },
  cardList: {
    borderRadius: 10,
    marginRight: 15,
  },
  textInside: {
    color: 'white',
    fontWeight: '600',
    marginLeft: 5,
    fontSize: 18,
    marginBottom: 10,
    marginRight: 10,
  },
});

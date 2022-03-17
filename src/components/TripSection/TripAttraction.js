import {FlatList, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Card, IconButton} from 'react-native-paper';

import img1 from '../../assets/8.jpeg';
import img2 from '../../assets/7.jpeg';

const LIST = [
  {
    id: 1,
    name: 'Marina Bay',
    subText: 'Singarpore',
    img: img1,
  },
  {
    id: 2,
    name: 'Petronas Twin Towers',
    subText: 'Singarpore',
    img: img2,
  },
];

const Item = ({name, img, subText}) => (
  <Card style={styles.cardList}>
    <ImageBackground
      source={img}
      resizeMode="cover"
      imageStyle={styles.img}
      style={styles.imgContainer}>
      <View style={styles.imgContainer}>
        <View style={styles.buttonbookmark}>
          <Button
            style={styles.button}
            labelStyle={styles.buttonText}
            mode="contained"
            onPress={() => console.log('Pressed')}>
            Hotel
          </Button>
          <IconButton
            icon="bookmark"
            color="white"
            size={20}
            onPress={() => console.log('Pressed')}
          />
        </View>
        <View style={styles.texts}>
          <Text style={styles.textInside}>{name}</Text>
          <Text style={styles.textInsideSmall}>{subText}</Text>
        </View>
      </View>
    </ImageBackground>
  </Card>
);

const Attractions = () => {
  const renderItem = ({item}) => (
    <Item name={item.name} subText={item.subText} img={item.img} />
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={LIST}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Attractions;

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
  cardList: {
    height: 153,
    marginBottom: 20,
    borderRadius: 10,
  },
  img: {
    height: 153,
    borderRadius: 10,
  },
  imgContainer: {
    borderRadius: 10,
    backgroundColor: 'rgba(0,0,0,0.3)',
    height: 153,
  },
  buttonbookmark: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonText: {fontSize: 12},
  button: {
    width: 100,
    backgroundColor: '#FF4760',
    marginLeft: 10,
    marginTop: 5,
  },
  textInside: {
    color: 'white',
    fontWeight: '600',
    fontSize: 20,
  },
  textInsideSmall: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
  },
  texts: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

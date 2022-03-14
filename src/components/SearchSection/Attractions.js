import {FlatList, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {Button, Card, IconButton} from 'react-native-paper';

const Item = ({name, img, subText}) => (
  <Card style={styles.cardList}>
    <ImageBackground
      source={{uri: img}}
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

const Attractions = ({ImgList, query}) => {
  useEffect(() => {
    console.log(ImgList);
  }, [ImgList]);

  const renderItem = ({item}) => (
    <Item name={item.user.first_name} subText={query} img={item.urls.regular} />
  );
  return (
    <View style={styles.container}>
      {ImgList.length > 0 ? (
        <FlatList
          data={ImgList}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      ) : (
        <Text>Enter a Query</Text>
      )}
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

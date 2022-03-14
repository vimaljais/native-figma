import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Card} from 'react-native-paper';
import {api} from '../../utils/api';

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

const Item = ({title, setQuery, Query}) => (
  <View style={styles.item}>
    <Text
      style={[title === Query ? styles.titleSelected : styles.title]}
      onPress={() => {
        setQuery(title);
      }}>
      {title}
    </Text>
  </View>
);

const Images = ({url, ImgList}) => (
  <Card style={styles.cardList}>
    <Card.Cover
      style={styles.img1}
      source={{
        uri: url,
      }}
    />
  </Card>
);

const HomeCarousel = () => {
  const [Query, setQuery] = useState('Flights');
  const [ImgList, setImgList] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${Query}&client_id=${api}`,
    ).then(res =>
      res.json().then(res => {
        setImgList(res.results);
      }),
    );
  }, [Query]);

  const renderItem = ({item}) => (
    <Item title={item.name} setQuery={setQuery} Query={Query} />
  );
  const renderImages = ({item}) => {
    return <Images url={item.urls.regular} ImgList={ImgList} />;
  };

  return (
    <>
      <View style={styles.container}>
        <FlatList
          horizontal
          data={LIST}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.cardContainer}>
          {ImgList.length > 0 ? (
            <FlatList
              horizontal
              data={ImgList}
              renderItem={renderImages}
              keyExtractor={img => img.id}
            />
          ) : (
            <Text>dasds</Text>
          )}
        </View>
      </ScrollView>
    </>
  );
};

export default HomeCarousel;

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
  cardContainer: {
    marginTop: 50,
    marginLeft: 10,
    flexDirection: 'row',
  },
  img1: {borderRadius: 10},
  cardList: {borderRadius: 10, height: 168, width: 280, marginRight: 15},
});

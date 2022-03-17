import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Card, ActivityIndicator} from 'react-native-paper';
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

const Item = ({title, setQuery, query, setImgList, setPage}) => (
  <View style={styles.item}>
    <Text
      style={[title === query ? styles.titleSelected : styles.title]}
      onPress={() => {
        setQuery(title);
        setPage(1);
        setImgList([]);
      }}>
      {title}
    </Text>
  </View>
);

const Images = ({url}) => (
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
  const [query, setQuery] = useState('Flights');
  const [ImgList, setImgList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(
      `https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=${api}`,
    ).then(res =>
      res.json().then(res => {
        setImgList(prev => [...prev, ...res.results]);
      }),
    );
  }, [query, page]);

  const fetchAgain = () => {
    setPage(prev => prev + 1);
  };

  const renderItem = ({item}) => (
    <Item
      title={item.name}
      setQuery={setQuery}
      query={query}
      setImgList={setImgList}
      setPage={setPage}
    />
  );

  const loadingIndicator = () => {
    return (
      <View style={styles.ActivityIndicator}>
        <ActivityIndicator animating={true} size={'large'} color={'blue'} />
      </View>
    );
  };

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
      <View style={styles.imglist}>
        <View style={styles.cardContainer}>
          {ImgList.length > 0 ? (
            <FlatList
              horizontal
              data={ImgList}
              renderItem={renderImages}
              keyExtractor={img => img.id}
              onEndReachedThreshold={0.2}
              onEndReached={fetchAgain}
              ListFooterComponent={loadingIndicator}
            />
          ) : (
            <ActivityIndicator animating={true} color={'red'} />
          )}
        </View>
      </View>
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
    flex: 1,
  },
  img1: {borderRadius: 10},
  imglist: {flex: 1},
  cardList: {borderRadius: 10, height: 168, width: 280, marginRight: 15},
  ActivityIndicator: {
    justifyContent: 'center',
    alignContent: 'center',
    flex: 1,
    marginRight: 20,
  },
});

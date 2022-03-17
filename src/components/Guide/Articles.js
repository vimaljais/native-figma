import {FlatList, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Card, ActivityIndicator} from 'react-native-paper';
import {api} from '../../utils/api';

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

const Articles = ({selected}) => {
  const [ImgList, setImgList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(
      `https://api.unsplash.com/search/photos?page=${page}&query=${selected}&client_id=${api}`,
    ).then(res =>
      res.json().then(res => {
        setImgList(prev => [...prev, ...res.results]);
      }),
    );
  }, [selected, page]);

  const fetchAgain = () => {
    setPage(prev => prev + 1);
  };

  useEffect(() => {
    console.log(selected);
    setImgList([]);
    setPage(1);
    fetchAgain();
  }, [selected]);

  const loadingIndicator = () => {
    return (
      <View style={styles.ActivityIndicator}>
        <ActivityIndicator animating={true} size={'large'} color={'blue'} />
      </View>
    );
  };

  const renderImages = ({item}) => {
    return <Images url={item.urls.regular} />;
  };

  return (
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
  );
};

export default Articles;

const styles = StyleSheet.create({
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
  cardList: {borderRadius: 10, height: 161, width: 253, marginRight: 15},
  ActivityIndicator: {
    justifyContent: 'center',
    alignContent: 'center',
    flex: 1,
    marginRight: 20,
  },
});

import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {Card} from 'react-native-paper';

const HomeCarousel = () => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        <Card style={styles.cardList}>
          <Card.Cover
            style={styles.img1}
            source={require('../../assets/13.jpeg')}
          />
        </Card>
        <Card style={styles.cardList}>
          <Card.Cover
            style={styles.img1}
            source={require('../../assets/12.jpeg')}
          />
        </Card>
      </View>
    </ScrollView>
  );
};

export default HomeCarousel;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginLeft: 10,
    flexDirection: 'row',
  },
  img1: {borderRadius: 10},
  cardList: {borderRadius: 10, height: 168, width: 280, marginRight: 15},
});

import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import img1 from '../../assets/2.jpeg';
import img2 from '../../assets/1.jpeg';

const DATA = [
  {
    id: 1,
    title: 'EXPERIENCE',
    text: 'Beautiful Alley Scene in Old Town in Europe at Sunset',
    img: img1,
  },

  {
    id: 2,
    title: 'SHOPPING',
    text: 'The Ultimate Guide to Shopping for Travel',
    img: img2,
  },
];

const Articles = () => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <Image style={styles.img} source={DATA[0].img} />
          <Text style={styles.title}>{DATA[0].title}</Text>
          <Text style={styles.text}>{DATA[0].text}</Text>
        </View>
        <View>
          <Image style={styles.img} source={DATA[1].img} />
          <Text style={styles.title}>{DATA[1].title}</Text>
          <Text style={styles.text}>{DATA[1].text}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Articles;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginLeft: 20,
    marginTop: 20,
  },
  cardContainer: {
    width: 253,
    marginRight: 20,
  },
  img: {
    height: 161,
    width: 253,
    borderRadius: 10,
  },
  title: {
    margin: 10,
    fontWeight: '600',
    color: '#0048F0',
    marginBottom: 5,
  },
  text: {
    marginLeft: 10,
    fontWeight: '600',
  },
});

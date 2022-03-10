import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';

const ButtonGroup = () => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        <Button
          icon="camera"
          style={styles.button}
          mode="outlined"
          onPress={() => console.log('Pressed')}>
          Sightseeing
        </Button>
        <Button
          style={styles.button}
          icon="glass-wine"
          mode="outlined"
          onPress={() => console.log('Pressed')}>
          Resort
        </Button>
        <Button
          icon="food"
          style={styles.button}
          mode="outlined"
          onPress={() => console.log('Pressed')}>
          Restraunt
        </Button>
      </View>
    </ScrollView>
  );
};

export default ButtonGroup;

const styles = StyleSheet.create({
  container: {flexDirection: 'row', marginLeft: 20},
  button: {
    borderWidth: 1,
    borderRadius: 20,
    marginRight: 10,
  },
});

import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';

const ButtonGroup = ({selected, setSelected}) => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        <Button
          icon="camera"
          style={styles.button}
          mode={selected === 'sightseeing' ? 'contained' : 'outlined'}
          onPress={() => setSelected('sightseeing')}>
          Sightseeing
        </Button>
        <Button
          style={styles.button}
          icon="glass-wine"
          mode={selected === 'resort' ? 'contained' : 'outlined'}
          onPress={() => setSelected('resort')}>
          Resort
        </Button>
        <Button
          icon="food"
          style={styles.button}
          mode={selected === 'restraunt' ? 'contained' : 'outlined'}
          onPress={() => setSelected('restraunt')}>
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

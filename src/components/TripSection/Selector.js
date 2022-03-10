import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, ToggleButton} from 'react-native-paper';

const COLOR = '#FF4760';

const Selector = () => {
  const [choice, setChoice] = React.useState('first');

  return (
    <View style={styles.selectors}>
      <Button
        color={choice === 'first' ? COLOR : 'gray'}
        icon="briefcase"
        mode="text"
        onPress={() => setChoice('first')}>
        Trip
      </Button>
      <Button
        color={choice === 'second' ? COLOR : 'gray'}
        icon="bookmark"
        mode="text"
        onPress={() => setChoice('second')}>
        Bookmark
      </Button>
    </View>
  );
};

export default Selector;

const styles = StyleSheet.create({
  selectors: {
    flexDirection: 'row',
    margin: 20,
  },
});

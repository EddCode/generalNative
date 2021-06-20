import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import Icon from 'react-native-vector-icons/FontAwesome';

const ScreenIcon = () => {
  const inset = useSafeAreaInsets();
  return (
    <View style={{...styles.container,  marginTop: inset.top}}>
      <Icon name="500px" size={40} color="tomato" />
      <Icon name="home" size={40} color="tomato" />
      <Icon name="glass" size={40} color="tomato" />
      <Icon name="music" size={40} color="tomato" />
      <Icon name="gear" size={40} color="tomato" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-around',
    flexWrap: 'wrap'
  }
})

export default ScreenIcon;

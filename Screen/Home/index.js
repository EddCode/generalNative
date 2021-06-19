import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {View, Text} from 'react-native';

const Home = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{marginTop: insets.top}}>
      <Text>Hello home</Text>
    </View>
  );
};

export default Home;

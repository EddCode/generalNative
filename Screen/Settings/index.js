import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {View, Text} from 'react-native';

const Setting = () => {
  const insets = useSafeAreaInsets();
  return (
     <View style={{marginTop: insets.top}}>
      <Text>Hello setting</Text>
    </View>
  );
};

export default Setting;

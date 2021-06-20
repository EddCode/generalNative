import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const Setting = props => {
  const {navigation} = props;

  const handleGoDepthSettings = () => {
    navigation.push('depthSettings')
  };

  return (
    <View>
      <Text>Hello setting</Text>
      <TouchableOpacity onPress={handleGoDepthSettings}>
        <Text>Depth settings</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Setting;

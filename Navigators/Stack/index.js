import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SegttingScreen from '../../Screen/Settings';
import DepthSetting from '../../Screen/DepthSetting'

const {Navigator, Screen} = createStackNavigator();

const SettignStack = () => {
  return (
    <Navigator>
      <Screen name="settings" component={SegttingScreen} />
      <Screen name="depthSettings" options={{title: "setup"}} component={DepthSetting} />
    </Navigator>
  );
};

export default SettignStack;

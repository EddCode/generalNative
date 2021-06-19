import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import TopTab from '../TopTabs';
import SettingScreen from '../../Screen/Settings';
import IconScreen from '../../Screen/IconScreen';
import TabIcon from '../../TabBarIcon';

const {Screen, Navigator} = createBottomTabNavigator();

const MainNavigation = () => (
  <Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({color, size}) => (
        <TabIcon route={route} color={color} size={size} />
      ),
    })}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }}>
    <Screen name="Home" component={TopTab} />
    <Screen name="Icon" component={IconScreen} />
    <Screen name="Setting" component={SettingScreen} />
  </Navigator>
);

export default MainNavigation;

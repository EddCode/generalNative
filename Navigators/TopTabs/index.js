import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import Profile from '../../Screen/Home'

const { Navigator, Screen } = createMaterialTopTabNavigator()

const Toptab = () => {
  const insets = useSafeAreaInsets();

  return (
    <Navigator style={{ paddingTop: insets.top}}>
      <Screen name="Profile" component={Profile} />
      <Screen name="List" component={Profile} />
    </Navigator>
  )
}

export default Toptab

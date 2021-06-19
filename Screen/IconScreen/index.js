import React from 'react'
import { View } from 'react-native'
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import Icon from 'react-native-vector-icons/FontAwesome';
import I from 'react-native-vector-icons/FontAwesome'

const ScreenIcon = () => {
  const inset = useSafeAreaInsets()
  return (
    <View style={{marginTop: inset.top}}>
      <Icon name="500px" size={40} color="tomato"/>
      <Icon name="home" size={40} color="tomato"/>
      <Icon name="glass" size={40} color="tomato"/>
      <Icon name="music" size={40} color="tomato"/>
      <Icon name="gear" size={40} color="tomato"/>
      <Icon name="wrench" size={40} color="tomato"/>
    </View>
  )
}

export default ScreenIcon

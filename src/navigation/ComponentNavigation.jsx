import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import i18n from '../i18n/i18n'

import MainScreen from '../screen/ComponentsScreen'
import Animation101 from '../components/Animation/101'
import Animation102 from '../components/Animation/102'

const {Navigator, Screen} = createStackNavigator()

const ComponentsNavigator = () => (
	 <Navigator headerMode={false}>
      <Screen name="components" options={{title: i18n.t('components.navigation.components') }} component={MainScreen} />
      <Screen name="Animation101" options={{title: i18n.t('components.navigation.animation101')}} component={Animation101} />
      <Screen name="Animation102" options={{title: i18n.t('components.navigation.animation102')}} component={Animation102} />
   </Navigator>
)

export default ComponentsNavigator

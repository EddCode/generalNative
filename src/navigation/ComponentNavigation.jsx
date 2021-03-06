import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import i18n from '../i18n/i18n'

import MainScreen from '../screen/ComponentsScreen'
import Animation101 from '../components/Animation/101'
import Animation102 from '../components/Animation/102'
import Switch from '../screen/ComponentsScreen/SwitchScreen'
import AlertScreen from '../screen/ComponentsScreen/Alert'
import InputScreen from '../screen/ComponentsScreen/Input'
import RefreshScreen  from '../screen/ComponentsScreen/Refresh'
import ModalScreen  from '../screen/ComponentsScreen/Modal'
import InfinitScroll  from '../screen/ComponentsScreen/InfinitScroll'


const {Navigator, Screen} = createStackNavigator()

const ComponentsNavigator = () => (
	 <Navigator headerMode={false}>
      <Screen
         name="components"
         options={{title: i18n.t('components.navigation.components') }}
         component={MainScreen}
      />
      <Screen
         name="Animation101"
         options={{title: i18n.t('components.navigation.animation101')}}
         component={Animation101}
      />
      <Screen
         name="Animation102"
         options={{title: i18n.t('components.navigation.animation102')}}
         component={Animation102}
      />
      <Screen
         name="Switch"
         options={{title: i18n.t('components.navigation.switches')}}
         component={Switch}
      />
      <Screen
         name="Alert"
         options={{title: i18n.t('components.navigation.switches')}}
         component={AlertScreen}
      />
      <Screen
         name="Input"
         options={{title: i18n.t('components.navigation.inputs')}}
         component={InputScreen}
      />
      <Screen
         name="Refresh"
         options={{title: i18n.t('components.navigation.refresh')}}
         component={RefreshScreen}
      />
      <Screen
         name="Modal"
         options={{title: i18n.t('components.navigation.modal')}}
         component={ModalScreen}
      />
      <Screen
         name="InfinitScroll"
         options={{title: i18n.t('components.navigation.modal')}}
         component={InfinitScroll}
      />
   </Navigator>
)

export default ComponentsNavigator

import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import i18n from '../i18n/i18n'

import MoviesStack from './MoviesNavigation'
import ComponentStack from './ComponentNavigation'

const {Navigator, Screen} = createDrawerNavigator()

const DrawerNavigation = () => (
	<Navigator initialRouteName="ComponenScreen" drawerPosition="right">
		<Screen name="MoviesScreen" options={{title: i18n.t('drawerMenu.movies')}}  component={MoviesStack} />
		<Screen name="ComponenScreen" options={{title: i18n.t('drawerMenu.components')}}component={ComponentStack} />
	</Navigator>
)

export default DrawerNavigation

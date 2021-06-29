import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'

import MoviesStack from './MoviesNavigation'
import ComponentStack from './ComponentNavigation'

const {Navigator, Screen} = createDrawerNavigator()

const DrawerNavigation = () => (
	<Navigator initialRouteName="ComponenScreen" drawerPosition="right">
		<Screen name="MoviesScreen" options={{title: 'Movies'}}  component={MoviesStack} />
		<Screen name="ComponenScreen" options={{title: 'Components'}}component={ComponentStack} />
	</Navigator>
)

export default DrawerNavigation

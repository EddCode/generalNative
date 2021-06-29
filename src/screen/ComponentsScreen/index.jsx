import React from 'react'
import {View} from 'react-native'
import {useSafeAreaInsets} from 'react-native-safe-area-context'

import {globalStyles} from '../../theme/appTheme'

import ListKnowledge from '../../components/Listknowledge'

import { menuOptions } from '../../helpers/MenuOptions'

const MainScreenComponents = () => {
  const {top} = useSafeAreaInsets()

	return (
		<View style={{paddingTop: top, ...globalStyles.margin}} >
			<ListKnowledge menuOptions={menuOptions} />
		</View>
	)
}


export default MainScreenComponents

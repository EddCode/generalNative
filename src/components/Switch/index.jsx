import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import {View} from 'react-native'

import i18n from '../../i18n/i18n'

import Title from '../CustomTitle'

const CustomSwitch = () => {
	const {top} = useSafeAreaInsets()
	return (
		<View style={{marginTop: top+20, marginLeft: 20}}>
			<Title title={i18n.t('components.navigation.switches')}/>
		</View>
	)
}

export default CustomSwitch

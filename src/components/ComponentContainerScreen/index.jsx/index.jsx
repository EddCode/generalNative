import React from 'react'
import {View} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const ComponentContainerScreen = ({ children }) => {
	const { top } = useSafeAreaInsets()
	return (
		<View style={{marginTop: top+20, marginHorizontal: 20}}>
			{children}
		</View>
	)
}

export default ComponentContainerScreen

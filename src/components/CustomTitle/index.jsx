import React from 'react'
import {Text, View} from 'react-native'
import {globalStyles} from '../../theme/appTheme'

const Title = (props) => {
	const {title, marginBottom} = props

	return (
		<View style={marginBottom}>
			<Text style={globalStyles.title} >{title}</Text>
		</View>
	)
}

export default Title

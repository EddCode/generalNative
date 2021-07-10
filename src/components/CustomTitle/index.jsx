import React from 'react'
import {Text, View} from 'react-native'
import {globalStyles} from '../../theme/appTheme'

const Title = (props) => {
	const {title, marginBottom, fontSize=null} = props

	const textStyle = fontSize ? { ...globalStyles.title, fontSize } : globalStyles.title

	return (
		<View style={marginBottom}>
			<Text style={textStyle} >{title}</Text>
		</View>
	)
}

export default Title

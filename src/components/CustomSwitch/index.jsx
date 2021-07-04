import React from 'react'
import {Switch} from 'react-native'

import { globalStyles } from '../../theme/appTheme'

const CustomSwitch = (props) => {
	const { isChecked, onChange, switchLabel } = props

	const handleChange = () => {
		onChange(switchLabel, !isChecked)
	}

	return (
	<Switch
		trackColor={{false: '#3e3e3e', true: globalStyles.mainColor.color}}
		thumbColor="#f3f3f3"
		ios_backgroundColor="#3e3e3e"
		onValueChange={handleChange}
		value={isChecked}
	/>
	)
}
export default CustomSwitch

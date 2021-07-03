import React from 'react'
import {Switch} from 'react-native'

const CustomSwitch = (props) => {
	const { isChecked, onChange, switchLabel } = props

	const handleChange = () => {
		onChange(switchLabel, !isChecked)
	}

	return (
	<Switch
		trackColor={{false: 'yellow', true: 'blue'}}
		ios_backgroundColor="#3e3e3e"
		onValueChange={handleChange}
		value={isChecked}
	/>
	)
}
export default CustomSwitch

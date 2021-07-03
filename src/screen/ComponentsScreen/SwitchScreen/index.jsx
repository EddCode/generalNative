import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import {View, Text, StyleSheet} from 'react-native'

import i18n from '../../../i18n/i18n'

import Title from '../../../components/CustomTitle'
import CustomSwitch from '../../../components/CustomSwitch'
import {useState} from 'react'

const SwitchScreen = () => {
	const {top} = useSafeAreaInsets()
	const [test, setTest] = useState({
		Happy: true,
		Ungry: false,
		Lazy: false
	})

	const handleChange = (switchLabel, checked) => {
		setTest({
			...test,
			[switchLabel]: checked
		})
	}

	return (
		<View style={{marginTop: top+20, marginHorizontal: 20}}>
			<Title title={i18n.t('components.navigation.switches')}/>
			<View style={style.row}>
				<Text style={style.label}>Hungry</Text>
				<CustomSwitch isChecked={test.Happy} onChange={handleChange} switchLabel="Happy"/>
			</View>
			<View style={style.row}>
				<Text style={style.label}>Ungry</Text>
				<CustomSwitch isChecked={test.Ungry} onChange={handleChange}  switchLabel="Ungry"/>
			</View>
			<View style={style.row}>
				<Text style={style.label}>Lazy</Text>
				<CustomSwitch isChecked={test.Lazy} onChange={handleChange} switchLabel="Lazy"/>
			</View>
			<View style={{marginTop: 50}}>
				<Text style={{fontSize: 30}}>The Dog is</Text>
				<Text style={{fontSize: 20}}>
					{JSON.stringify(test, '', 4)}
				</Text>
			</View>
		</View>
	)
}

const style = StyleSheet.create({
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginVertical: 10
	},
	label: {
		fontSize: 15,
		fontWeight: '500'
	}
})

export default SwitchScreen

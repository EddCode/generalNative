import {useNavigation} from '@react-navigation/native'
import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

import { globalStyles } from '../../theme/appTheme'

const style = StyleSheet.create({
	listItem: {
		flexDirection: 'row',
	},
	itemText: {
		marginLeft: 10,
		fontSize: 19
	},
	arrowIcon: {
		alignSelf: 'flex-end'
	},
	separetor: {
		borderBottomWidth: 1,
		borderBottomColor: '#000',
		opacity: 0.4,
		marginVertical: 10
	},
	marginBottom: {
		marginBottom: 20
	}
})

export const ListHeader = () => (
	<View style={style.marginBottom}>
		<Text style={globalStyles.title} >Menu Options</Text>
	</View>
)

export const renderItem = ({item}) => <FlatMenuItem item={item}/>

export const ItemSeparator = () => (
	<View style={style.separetor}/>
)

const FlatMenuItem = ({item}) => {
	const navigation = useNavigation()

	const handleNavigate = () => navigation.navigate(item.component)

	return (
		<TouchableOpacity activeOpacity={0.3} onPress={handleNavigate}>
			<View style={style.listItem}>
				<Icon size={23} name={item.icon} color="gray" />
				<Text style={style.itemText} >{item.name}</Text>
				<View style={{flex: 1}} />
				<Icon size={23} name="chevron-right" color="gray" />
			</View>
		</TouchableOpacity>
	)
}


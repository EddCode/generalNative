import React from 'react'
import {useNavigation} from '@react-navigation/native'
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

import i18n from '../../i18n/i18n'
import Title from '../CustomTitle'
import {globalStyles} from '../../theme/appTheme'


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
	<Title marginBottom={style.marginBottom} title={i18n.t('components.mainTitle')} />
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
				<Icon size={23} name={item.icon} color={globalStyles.mainColor.color} />
				<Text style={style.itemText} >{item.name}</Text>
				<View style={{flex: 1}} />
				<Icon size={23} name="chevron-right" color="gray" />
			</View>
		</TouchableOpacity>
	)
}


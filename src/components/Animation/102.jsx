import React from 'react'
import {Animated, StyleSheet, View} from 'react-native'
import useAnimation from '../../hooks/useAnimation'

import i18n from '../../i18n/i18n'

import Title from '../CustomTitle'

const Animation102 = () => {
	const {pan, panResponder} = useAnimation()

	return (
		<View style={style.container}>
			<Title title={i18n.t('components.navigation.animation102')} marginBottom={{marginBottom:0}}/>
			<Animated.View style={[pan.getLayout(), style.item]} {...panResponder.panHandlers} />
		</View>
	)
}

const style = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	item:{
		marginBottom: 10,
		width: 150,
		height: 150,
		backgroundColor: 'purple',
		borderRadius: 5
	}
})

export default Animation102

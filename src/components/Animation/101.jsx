import React from 'react'
import {Animated, Button, Text, StyleSheet, View} from 'react-native'

import i18n from '../../i18n/i18n'

import useAnimation from '../../hooks/useAnimation'
import Title from '../CustomTitle'

const Animation101 = () => {
	const {fadeIn, fadeOut, bounce, opacity, transition} = useAnimation({
		transition: -400, transitionDuration: 1000
	})

	const handleShowBox = () => {
		fadeIn()
		bounce()
	}

	return (
		<View style={style.container}>
			<Title title={i18n.t('components.navigation.animation101')} marginBottom={{marginBottom:0}}/>
			<Animated.View
				style={[
					style.item,
					{
						opacity: opacity,
						transform: [{translateY: transition}]
					}
				]}
			/>
			<View>
				<Button title="Fade In View" onPress={handleShowBox}/>
				<Button title="Fade Out View" onPress={fadeOut} />
			</View>

		</View>
	)
}

const style = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	title: {
		fontSize: 30,
	},
	item:{
		width: 150,
		height: 150,
		backgroundColor: 'purple',
		borderRadius: 5
	}
})

export default Animation101

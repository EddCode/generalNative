import React from 'react'
import {Animated, Button, Text, StyleSheet, View} from 'react-native'

import useFade from '../../hooks/useFade'

const Animation101 = () => {
	const {fadeIn, fadeOut, opacity} = useFade(400, 0)

	return (
		<View style={style.container}>
			<Text style={style.title}> Animation 101</Text>
			<Animated.View
				style={[
					style.item,
					{opacity: opacity}
				]}
			/>
			<View>
				<Button title="Fade In View" onPress={fadeIn}/>
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

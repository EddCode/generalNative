import React from 'react'
import {Button, StyleSheet, Text, View} from 'react-native'

const Animation102 = () => {
	return (
		<View style={style.container}>
			<Text>Amimation 102</Text>
			<View style={style.item}/>
			<View>
				<Button title="Fade In View"/>
				<Button title="Fade Out View"/>
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
	item:{
		marginBottom: 10,
		width: 150,
		height: 150,
		backgroundColor: 'purple',
		borderRadius: 5
	}
})

export default Animation102

import React, {useRef} from 'react'
import {StyleSheet, View} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const GradientBackground = ({children}) => {
	const {current: colors} = useRef(['#084F6A', '#75CEDB', '#FFF'])
	const {current: gradientStart} = useRef({x: 0.1, y: 0.1})
	const {current: gradientEnd} = useRef({x: 0.3, y: 0.7})

	return (
		<View style={styles.container}>
			<LinearGradient
				colors={colors}
				style={{...StyleSheet.absoluteFillObject}}
				start={gradientStart}
				end={gradientEnd}
			/>
			{children}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	}
})

export default GradientBackground

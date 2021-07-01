import React, {useContext, useEffect, useRef, useState} from 'react'
import {Animated, StyleSheet, View} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import {GradientContext} from '../../Context/GradientColors'
import useAnimation from '../../hooks/useAnimation'

const GradientBackground = ({children}) => {
	const {
		currentColors: {
			primary: currentPrimaryColor,
			secondary: currentSecondaryColor
		},
		prevColors: {
			primary: prevPrimaryColor,
			secondary: prevSecondaryColor
		},
		setPrevColors
	} = useContext(GradientContext)

	const {current: gradientStart} = useRef({x: 0.1, y: 0.1})
	const {current: gradientEnd} = useRef({x: 0.5, y: 0.7})

	const {fadeIn, fadeOut, animation: opacity} = useAnimation(200, 0)

	useEffect(() => {
		fadeIn(fadeInCB)
	}, [currentSecondaryColor, currentPrimaryColor])

	const fadeInCB = () => {
		setPrevColors({primary: currentPrimaryColor, secondary: currentSecondaryColor})
		fadeOut()
	}

	return (
		<View style={styles.container}>
			<LinearGradient
				colors={[prevPrimaryColor, prevSecondaryColor, "#FFF"]}
				style={{...StyleSheet.absoluteFillObject}}
				start={gradientStart}
				end={gradientEnd}
			/>
			<Animated.View
				style={{
					...StyleSheet.absoluteFillObject, opacity
				}}
			>
				<LinearGradient
					colors={[currentPrimaryColor, currentSecondaryColor, '#FFF']}
					style={{...StyleSheet.absoluteFillObject}}
					start={gradientStart}
					end={gradientEnd}
				/>
			</Animated.View>
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

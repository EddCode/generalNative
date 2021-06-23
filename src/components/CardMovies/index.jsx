import React, {useRef} from 'react'
import { useNavigation} from '@react-navigation/core'
import {Image, StyleSheet, TouchableWithoutFeedback, View} from 'react-native'

const MovieCard = (props) => {
	const {
		height = 400,
		width = 250,
		movie: {
			poster_path
		},
		movie
	} = props

	const nav = useNavigation()
	const { current: cardStyles} = useRef(cardContainer({height, width}))

	const imgURI = useRef(`https://image.tmdb.org/t/p/w500${poster_path}`)

	const handleGoDetails = () => {
		nav.navigate('details', movie)
	}

	return (
		<View style={cardStyles.cardContainer}>
			<TouchableWithoutFeedback onPress={handleGoDetails}>
				<View style={styles.cardImg}>
					<Image source={{ uri: imgURI.current	}} style={styles.img} />
				</View>
			</TouchableWithoutFeedback>
		</View>
	)
}

const cardContainer = ({height, width}) => StyleSheet.create({
	cardContainer: {
		height,
		width
	}
})

const styles = StyleSheet.create({
	cardImg: {
		marginHorizontal: 5,
		flex: 1,
		borderRadius: 20,
		shadowColor: '#000',
		shadowOpacity: 0.52,
		shadowRadius: 4.50,
		shadowOffset: {
			height: 2.78
		}
	},
	img: {
		flex: 1,
		borderRadius: 20
	}
})

export default MovieCard

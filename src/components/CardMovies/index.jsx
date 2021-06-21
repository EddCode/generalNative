import React, {useRef} from 'react'
import {Image, StyleSheet, Text, View} from 'react-native'

const MovieCard = (props) => {
	const {
		height = 400,
		width = 250,
		movie: {
			poster_path
		}
	} = props

	const { current: cardStyles} = useRef(cardContainer({height, width}))

	const imgURI = useRef(`https://image.tmdb.org/t/p/w500${poster_path}`)

	return (
		<View style={cardStyles.cardContainer}>
			<View style={styles.cardImg}>
				<Image source={{ uri: imgURI.current	}} style={styles.img} />
			</View>
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

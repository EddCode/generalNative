import React, {useRef} from 'react'
import {Image, View, StyleSheet} from 'react-native'

const ActorCard = (props) => {
	const {profile_path} = props

	const imgURI = useRef(`https://image.tmdb.org/t/p/w500${profile_path}`)

	return (
		<View style={cardStyles.cardContainer}>
				<View style={styles.cardImg}>
					<Image source={{ uri: imgURI.current	}} style={styles.img} />
				</View>
		</View>
	)
}

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

export default ActorCard

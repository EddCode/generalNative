import React, {useRef} from 'react'
import {Image, View, StyleSheet, Text} from 'react-native'

const ActorCard = (props) => {
	const {
		actor: {
			profile_path,
			original_name,
			job
		}
	} = props

	const imgURI = useRef(`https://image.tmdb.org/t/p/w500${profile_path}`)

	return (
		<View style={styles.cardContainer}>
			{profile_path && <Image source={{ uri: imgURI.current	}} style={styles.img} />}
			<View style={styles.actorName}>
				<Text>{original_name}</Text>
				<Text style={{ marginTop: 10}}>{job}</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	cardContainer: {
		flexDirection: 'row',
		padding: 5,
		backgroundColor: '#FFF',
		marginVertical: 25,
		marginHorizontal: 5,
		borderRadius: 5,
		shadowColor: '#000',
		shadowOpacity: 0.52,
		shadowRadius: 4.50,
		shadowOffset: {
			height: 2.78
		}
	},
	img: {
		height: 50,
		width: 50,
		borderRadius: 4
	},
	actorName: {
		marginHorizontal: 8
	}
})

export default ActorCard

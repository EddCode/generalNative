import React, {useRef} from 'react'
import {StyleSheet, Text, View} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome5'
import CrewList from '../CrewList'

const MovieDetail = (props) => {
	const {details, crew} = props
	const budget = useRef(
			new Intl.NumberFormat('en', {style: 'currency', currency: 'USD'})
			.format(details.budget)
	)
	const revenue = useRef(
		new Intl.NumberFormat('en', {style: 'currency', currency: 'USD'})
		.format(details.revenue)
	)

	return (
		<View style={styles.detailsContainer}>
			<View style={styles.rating}>
				<Icon name="star" size={20}/>
				<Text style={{marginLeft: 5 }}>{details.vote_average} - </Text>
				<Text>{details.genres.map(g  => g.name).join(', ')}</Text>
			</View>
			<View style={{marginTop: 20}}>
				<Text style={styles.titleSection}>Historia</Text>
				<Text style={{ paddingHorizontal: 20}}>{details.overview}</Text>
			</View>
			<View style={styles.detailsContainer}>
				<View style={styles.row}>
					<Text style={styles.moneyTitle}>Presupuesto</Text>
					<Text>{budget.current}</Text>
				</View>
				<View style={styles.row}>
					<Text style={styles.moneyTitle}>Ingresos</Text>
					<Text>{revenue.current}</Text>
				</View>
			</View>
			<CrewList crew={crew}/>
		</View>
	)
}

const styles = StyleSheet.create({
	row:{
		flexDirection: 'row',
		marginVertical: 2.5,
		paddingHorizontal: 20
	},
	detailsContainer: {
		marginTop: 5
	},
	rating: {
		flexDirection: 'row',
		alignItems: 'baseline',
		opacity: .5,
		paddingHorizontal: 20
	},
	titleSection: {
		marginVertical: 5,
		fontSize: 20,
		fontWeight: 'bold',
		paddingHorizontal: 20
	},
	moneyTitle: {
		fontWeight: 'bold',
		marginRight: 15,
	}
})

export default MovieDetail

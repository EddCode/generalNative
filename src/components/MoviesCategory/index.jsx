import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

// Components
import MovieCard from '../CardMovies'

const MoviesCategory = (props) => {
	const {category, movies} = props

	return (
		<View style={styles.listContainer}>
			<Text style={styles.categorytitle}>{category}</Text>
			<FlatList
				data={movies}
				renderItem={renderCardMovie}
				keyExtractor={keyExtractor}
				horizontal={true}
				showsHorizontalScrollIndicator={false}
			/>
		</View>
	)
}

const renderCardMovie = ({item}) => (
  <MovieCard movie={item} width={100} height={180}/>
)

const keyExtractor = item => item.id.toString()


const styles = StyleSheet.create({
	listContainer: {
		marginVertical: 15,
		height: 280
	},
	categorytitle: {
		fontSize: 30,
		marginBottom: 15
	}
})

export default MoviesCategory

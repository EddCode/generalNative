import React from 'react'
import { ActivityIndicator,  FlatList, StyleSheet, Text, View } from 'react-native'
import useMovies from '../../hooks/useMovies'

// Components
import MovieCard from '../CardMovies'

const MoviesCategory = (props) => {
	const {category, listTitle} = props

	const {listMovies, isLoading} = useMovies(category)

  if (isLoading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator color="purple" size={600} />
      </View>
    )
  }

	return (
		<View style={styles.listContainer}>
			<Text style={styles.categorytitle}>{listTitle}</Text>
			<FlatList
				data={listMovies}
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
		marginVertical: 5,
		height: 240
	},
	categorytitle: {
		fontSize: 30,
		marginBottom: 15
	}
})

export default MoviesCategory

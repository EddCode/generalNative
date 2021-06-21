import React from 'react'
import {ActivityIndicator, useWindowDimensions, StyleSheet, View, ScrollView } from 'react-native'
import {useSafeAreaInsets} from 'react-native-safe-area-context'
import Carousel from 'react-native-snap-carousel'

// Components
import MoviesCategory from '../components/MoviesCategory'
import MovieCard from '../components/CardMovies'

// Hooks
import useMovies from '../hooks/useMovies'


const Movies = () => {
  const { width: screenWidth} = useWindowDimensions()
  const {top} = useSafeAreaInsets()
  const {listMovies, isLoading} = useMovies()

  if (isLoading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator color="purple" size={600} />
      </View>
    )
  }

  return (
    <ScrollView>
      <View style={{paddingTop: top+10, ...styles.slider}}>
        <Carousel
          data={listMovies}
          renderItem={renderCard}
          sliderWidth={screenWidth}
          itemWidth={240}
          firstItem={10}
        />
      </View>
      <MoviesCategory listTitle="Junior" category='upcoming' />
      <MoviesCategory listTitle="Popular" category='popular' />
      <MoviesCategory listTitle="Top Rated" category='top_rated' />
    </ScrollView>
  )
}

const renderCard = ({item}) => (
  <MovieCard movie={item}/>
)

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  slider: {
    height: 480
  }
})

export default Movies

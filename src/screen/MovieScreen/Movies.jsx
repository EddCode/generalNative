import React, {useContext, useEffect} from 'react'
import {ActivityIndicator, useWindowDimensions, StyleSheet, View, ScrollView } from 'react-native'
import {useSafeAreaInsets} from 'react-native-safe-area-context'
import Carousel from 'react-native-snap-carousel'

import i18n from '../../i18n/i18n'

// Components
import MoviesCategory from '../../components/MoviesCategory'
import MovieCard from '../../components/CardMovies'

// Hooks
import useMovies from '../../hooks/useMovies'
import GradientBackground from '../../components/GradientBackground'
import {getColorsImg} from '../../helpers/colors'
import {GradientContext} from '../../Context/GradientColors'


const Movies = () => {
  const { width: screenWidth} = useWindowDimensions()
  const {top} = useSafeAreaInsets()
  const {listMovies, isLoading} = useMovies()

  // Context
  const { setCurrentColors } = useContext(GradientContext)

  useEffect(() => {
    listMovies.length && getPosterColors(10)
  }, [listMovies])

  const getPosterColors = async (idx) => {
    const movie = listMovies[idx]
    const imgUri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    const {primary, secondary} = await getColorsImg(imgUri)
    setCurrentColors({primary, secondary})
  }

  const posterMovie = idx => getPosterColors(idx)

  if (isLoading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator color="purple" size={40} />
      </View>
    )
  }

  return (
    <GradientBackground>
       <ScrollView>
         <View style={{paddingTop: top+10, ...styles.slider}}>
           <Carousel
             data={listMovies}
             renderItem={renderCard}
             sliderWidth={screenWidth}
             itemWidth={240}
             firstItem={10}
             onSnapToItem={posterMovie}
           />
         </View>
         <MoviesCategory listTitle={i18n.t('homeScreen.upcoming')} category='upcoming' />
         <MoviesCategory listTitle={i18n.t('homeScreen.topRated')} category='top_rated' />
         <MoviesCategory listTitle={i18n.t('homeScreen.popular')} category='popular' />
         <MoviesCategory listTitle={i18n.t('homeScreen.latest')} category='latest' />
       </ScrollView>
    </GradientBackground>
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

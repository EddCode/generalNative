import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import MoviesScreen from '../screen/Movies'
import MovieDetailScreen from '../screen/MovieDetails'

const {Navigator, Screen} = createStackNavigator()

const MainNavigation = () => {
  return (
    <Navigator screenOptions={screenOptions} headerMode={false}>
      <Screen name="movies" component={MoviesScreen} />
      <Screen name="details" component={MovieDetailScreen} />
    </Navigator>
  )
}

const screenOptions = {
  cardStyle: {
    backgroundColor: '#FFF'
  }
}

export default MainNavigation

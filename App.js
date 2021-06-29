import 'react-native-gesture-handler'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'

import MainNavigation from './src/navigation/DrawerNavigation'
import GradientProvider from './src/Context/GradientColors'

const App = () => {
  return (
    <GradientProvider>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </GradientProvider>
  )
}

export default App

import 'react-native-gesture-handler'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'

import StackNavigator from './src/navigation/Navigation'
import GradientProvider from './src/Context/GradientColors'

const App = () => {
  return (
    <GradientProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </GradientProvider>
  )
}

export default App

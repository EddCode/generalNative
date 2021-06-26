import {useRef} from 'react'
import {Animated} from 'react-native'

const useFade = () => {
  const opacity = useRef(new Animated.Value(0)).current

  const fadeIn = cb => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true
    }).start(() => (cb ? cb() : null))
  }

  const fadeOut = cb => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 0,
      useNativeDriver: true
    }).start()
  }

  return {
    fadeIn,
    fadeOut,
    opacity
  }
}

export default useFade

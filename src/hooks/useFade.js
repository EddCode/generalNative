import {useRef} from 'react'
import {Animated} from 'react-native'

const useFade = (animationDuration = 300, opacityValue = null) => {
  const opacity = useRef(new Animated.Value(opacityValue)).current

  const fadeIn = cb => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true
    }).start(() => (typeof cb == 'function' ? cb() : null))
  }

  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: opacityValue,
      duration: animationDuration,
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

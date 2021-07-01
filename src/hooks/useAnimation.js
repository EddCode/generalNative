import {useRef} from 'react'
import {Animated, Easing, PanResponder} from 'react-native'

const useAnimation = ({
  opacity = 0,
  opacityDuration = 300,
  transition = 0,
  transitionDuration = 300
} = {}) => {
  const opacityValue = useRef(new Animated.Value(opacity)).current
  const transitionValue = useRef(new Animated.Value(transition)).current
  const pan = useRef(new Animated.ValueXY()).current

  const fadeIn = cb => {
    Animated.timing(opacityValue, {
      toValue: 1,
      duration: opacityDuration,
      useNativeDriver: true
    }).start(() => (typeof cb === 'function' ? cb() : null))
  }

  const fadeOut = () => {
    Animated.timing(opacityValue, {
      toValue: 0,
      duration: opacityDuration,
      useNativeDriver: true
    }).start()
  }

  const bounce = () => {
    Animated.timing(transitionValue, {
      toValue: 100,
      duration: transitionDuration,
      useNativeDriver: true,
      easing: Easing.bounce
    }).start()
  }

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      {
        dx: pan.x,
        dy: pan.y
      }
    ]),
    onPanResponderRelease: () => {
      Animated.spring(pan, {
        useNativeDriver: true,
        toValue: {x: 0, y: 0}
      }).start()
    }
  })

  return {
    opacity: opacityValue,
    transition: transitionValue,
    pan,
    panResponder,
    fadeIn,
    fadeOut,
    bounce
  }
}

export default useAnimation

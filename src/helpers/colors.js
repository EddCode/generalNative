import {Platform} from 'react-native'
import imageColors from 'react-native-image-colors'

export const getColorsImg = async image => {
  const colors = await imageColors.getColors(image, {
    quality: 'highest',
    cache: true
  })

  if (Platform.OS == 'ios') {
    return {
      primary: colors.primary,
      secondary: colors.secondary
    }
  } else {
    return {
      primary: colors.dominant,
      secondary: colors.average
    }
  }
}

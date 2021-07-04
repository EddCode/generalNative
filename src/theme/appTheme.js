import {StyleSheet} from 'react-native'

const mainColor = '#1A86B9'

export const globalStyles = StyleSheet.create({
  componentScreen: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  margin: {
    marginHorizontal: 20
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold'
  },
  mainColor: {
    color: mainColor
  }
})

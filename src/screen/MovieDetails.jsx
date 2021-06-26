import React, {useRef} from 'react'
import {ActivityIndicator, Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native'

import useMovies from '../hooks/useMovies'
import { buildImgURL } from '../helpers/buildImgUrl'

import Icon from 'react-native-vector-icons/FontAwesome5'
import FullMovie from '../components/MovieDetail'

const { height: screenHigth} = Dimensions.get('screen')

const MovieDetail = props => {
  const {
    route: {
      params: {
        id,
        poster_path,
        original_title,
        title
      },
    },
    navigation
  } = props


  const {details, isLoading} = useMovies(id, 'details')
  const {crew} = useMovies(`${id}/credits`, 'crew')

  const imgURI = useRef(buildImgURL(poster_path))

  const handleBack = () => {
    navigation.popToTop()
  }

  return (
    <ScrollView>
      <View style={styles.posterConteiner}>
        <View style={styles.imgBorder}>
          <Image source={{uri: imgURI.current}} style={styles.img} />
        </View>
      </View>
      <View style={styles.marginContainer}>
        <Text style={styles.subtitle}>{original_title}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
        {
          isLoading
            ? <ActivityIndicator size={20}/>
            : <FullMovie details={details} crew={crew} />
        }
      <TouchableOpacity style={styles.backIcon} onPress={handleBack}>
        <Icon  name="arrow-left" size={40} color="#FFF" style={{opacity: .9}}/>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  posterConteiner: {
    height: screenHigth * .70,
		flex: 1,
    elevation: 10,
		shadowColor: '#000',
		shadowOpacity: 0.52,
		shadowRadius: 4.50,
		shadowOffset: {
			height: 2.78
		},

    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  imgBorder: {
		flex: 1,
    overflow: 'hidden',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  img: {
    flex: 1,
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 25,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  subtitle: {
    opacity: .5,
    fontSize: 18,
    marginBottom: 4
  },
  rating: {
    flex: 1,
    flexDirection: 'row'
  },
  backIcon: {
    position: 'absolute',
    top: 40,
    left: 20,
    color: '#FFF',
    elevation: 9,
    zIndex: 1
  }
})

export default MovieDetail

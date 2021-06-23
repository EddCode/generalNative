import React, {useRef} from 'react'
import {Dimensions, Image, ScrollView, StyleSheet, Text, View} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome5'
import useMovies from '../hooks/useMovies'

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
    }
  } = props

  const movieDetail = useMovies(id, 'details')
  const movieCredits = useMovies(`${id}/credits`, 'crew')

  const imgURI = useRef(`https://image.tmdb.org/t/p/w500${poster_path}`)

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
      <View style={[styles.marginContainer, styles.rating]}>
        {[1,2,3,4,5].map(icon => (
          <Icon
            key={icon}
            style={styles.ratingIcon}
            name="star"
            size={20}
          />
        ))}

      </View>
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
    opacity: .8,
    fontSize: 18,
    marginBottom: 4
  },
  rating: {
    flex: 1,
    flexDirection: 'row'
  },
  ratingIcon: {
    marginHorizontal: 5
  }
})

export default MovieDetail

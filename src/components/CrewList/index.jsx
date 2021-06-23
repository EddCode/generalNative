import React from 'react'
import {FlatList} from 'react-native'

import CardActor from '../CardActor'

const CrewList = (props) => {
	const {crew} = props
	console.log("===>")
	return (
		<FlatList
			data={crew}
			renderItem={renderActor}
			keyExtractor={keyExtractor}
			horizontal={true}
			showsHorizontalScrollIndicator={false}
		/>
	)
}

const renderActor = ({item}) => (
  <CardActor movie={item} width={100} height={180}/>
)

const keyExtractor = item => item.id.toString()


export default CrewList

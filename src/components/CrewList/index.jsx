import React from 'react'
import {FlatList} from 'react-native'

import CardActor from '../CardActor'

const CrewList = (props) => {
	const {crew} = props

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
  <CardActor actor={item} />
)

const keyExtractor = item => item.credit_id


export default CrewList

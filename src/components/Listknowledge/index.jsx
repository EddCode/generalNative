import React from 'react'
import {FlatList} from 'react-native'

import { ListHeader, renderItem, ItemSeparator } from './FlatListComponents'

const ListKnowledge = (props) => {
	const { menuOptions = [] } = props

	return (
			<FlatList
				data={menuOptions}
				renderItem={renderItem}
				keyExtractor={keyExtractor}
				ListHeaderComponent={ListHeader}
				ItemSeparatorComponent={ItemSeparator}
			/>
	)
}

const keyExtractor = (item) => item.name

export default ListKnowledge

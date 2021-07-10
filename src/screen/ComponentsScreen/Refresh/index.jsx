import React, {useState} from 'react'
import {RefreshControl, ScrollView, StyleSheet, View} from 'react-native'

import Title from '../../../components/CustomTitle'
import ComponentContainerScreen from '../../../components/ComponentContainerScreen/index.jsx'

import i18n from '../../../i18n/i18n'

const RefreshScreen = () => {

	const [isRefreshing, setIsRefreshing] = useState(false)
	const [data, setData] = useState(null)

	const fakePromise = timeout => Promise.resolve(resolve => setTimeout(resolve, timeout))

	const onRefresh = () => {
		setIsRefreshing(true)
		fakePromise(7300).then(_ => {
			setData('lorem ipsum dolo')
			setIsRefreshing(false)
		})
	}

	return (
		<ComponentContainerScreen style={style.container}>
			<ScrollView
				contentContainerStyle={style.scollView}
				refreshControl={
					<RefreshControl
						colors={['red','blue','green']}
						refreshing={isRefreshing}
						onRefresh={onRefresh}
					/>
				}
			>
				<Title title={i18n.t('components.navigation.refresh')}></Title>
				{ data && <Title title={data} fontSize={20}></Title> }
			</ScrollView>
		</ComponentContainerScreen>
	)
}

const style = StyleSheet.create({
	container: {
		flex: 1
	},
	scrollView: {
		flex: 1
	}
})

export default RefreshScreen

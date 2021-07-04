import React, {useState} from 'react'
import {Alert, Button, Text, View} from 'react-native'
import ComponentContainerScreen from '../../../components/ComponentContainerScreen/index.jsx'
import Title from '../../../components/CustomTitle/index.jsx'

import i18n from '../../../i18n/i18n'

const AlertScreen = () => {
	const [text, setText] = useState(false)

	const handlePress = () => {
		Alert.alert(
			i18n.t('components.alert.title'),
			i18n.t('components.alert.alertMessage'),
			[
				{
					text: i18n.t('components.alert.cancel'),
					style: 'cancel',
					onPress: setText(false)
				},
				{
					text: i18n.t('components.alert.accept'),
					onPress: setText(i18n.t('components.alert.alertMessage'))
				}
			]
		)
	}

	return (
		<ComponentContainerScreen>
			<Title title={i18n.t('components.navigation.alert')} />
			<View>
				<Button title={i18n.t('components.alert.dispatchAlert')} onPress={handlePress} />
				{text && <Text>{text}</Text>}
			</View>
		</ComponentContainerScreen>
	)
}

export default AlertScreen

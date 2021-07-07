import React, {useState} from 'react'
import {Alert, Button, Text, View} from 'react-native'
import prompt from 'react-native-prompt-android'
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
					onPress: console.log("no pos no")
				},
				{
					text: i18n.t('components.alert.accept'),
					onPress: console.log("===>")
				}
			]
		)
	}

	const handleOpenPrompr = () => prompt(
		i18n.t('components.alert.promptTitle'),
		i18n.t('components.alert.promptText'),
		'Enter your password to claim your $1.5B in lottery winnings',
		[
			{text: i18n.t('components.alert.cancel'), style: 'Cancel'},
			{text: i18n.t('components.alert.accept'), onPress: handleAccept}
		],
		{
			type: 'secure-text',
			defaultValue: '',
			cancelable: false,
			keyboardType: 'web-search'
		}
	)

	const handleAccept = (textPrompt) => setText(textPrompt)

	return (
		<ComponentContainerScreen>
			<Title title={i18n.t('components.navigation.alert')} />
			<View>
				<Button title={i18n.t('components.alert.dispatchAlert')} onPress={handlePress} />
				{text && <Text>{text}</Text>}
				<Button title={i18n.t('components.alert.dispatchPrompt')} onPress={handleOpenPrompr} />
			</View>
		</ComponentContainerScreen>
	)
}

export default AlertScreen

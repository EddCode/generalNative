import React, {useReducer} from 'react'
import {Text, View, TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, ScrollView} from 'react-native'

import ComponentContainerScreen from '../../../components/ComponentContainerScreen/index.jsx'
import Title from '../../../components/CustomTitle/index.jsx'

import i18n from '../../../i18n/i18n'
import {ACTIONS, initValue, reducer} from './reducer'

const InputScreen = () => {
	const [state, dispatch] = useReducer(reducer, initValue)

	const handleChange  = (text, valueType) => {
		dispatch({type: valueType, payload: text})
	}

	return (
		<ComponentContainerScreen>
			 <KeyboardAvoidingView style={style.keyboardContainer} behavior={Platform.OS == 'ios' ? 'padding' : 'height'} >
			 	<TouchableWithoutFeedback onPress={Keyboard.dismiss} >
			 		<ScrollView  showsVerticalScrollIndicator={false}>
			 			<Title title={i18n.t('components.navigation.inputs')} />

			 			<Text style={style.dummyText}>
			 				Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum cumque commodi ut eaque voluptatum.
			 				Tenetur aperiam, cumque et, quaerat voluptas cupiditate nobis laboriosam temporibus voluptate saepe excepturi odit atque ducimus.
			 				Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nulla culpa molestiae ullam perspiciatis tempore consectetur, a tenetur dolorum adipisci earum,
			 				aut laboriosam animi veniam alias dicta at. Debitis, ex.
			 			</Text>

			 			<Text style={style.dummyText}>
			 				Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum cumque commodi ut eaque voluptatum.
			 				Tenetur aperiam, cumque et, quaerat voluptas cupiditate nobis laboriosam temporibus voluptate saepe excepturi odit atque ducimus.
			 				Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nulla culpa molestiae ullam perspiciatis tempore consectetur, a tenetur dolorum adipisci earum,
			 				aut laboriosam animi veniam alias dicta at. Debitis, ex.
			 			</Text>


			 			<View style={{marginTop: 20}}>
			 				<TextInput
			 					style={style.input}
			 					placeholder={i18n.t('components.input.name')}
			 					autoCapitalize="words"
			 					onChangeText={text => handleChange(text, ACTIONS.NAME)}
			 				/>
			 				<TextInput
			 					style={style.input}
			 					placeholder={i18n.t('components.input.email')}
			 					onChangeText={text => handleChange(text, ACTIONS.EMAIL)}
			 					keyboardType='email-address'
			 					autoCapitalize="none"
			 				/>
			 				<TextInput
			 					style={style.input}
			 					keyboardType='phone-pad'
			 					onChangeText={text => handleChange(text, ACTIONS.PHONE)}
			 					placeholder={i18n.t('components.input.phone')}
			 					autoCapitalize="none"
			 				/>
			 			</View>
			 			<View>
			 				<Text style={{fontSize: 30}}>{i18n.t('components.input.data')} :</Text>
			 				<Text style={style.fontSize}>
			 					{JSON.stringify(state, '', 4)}
			 				</Text>
			 			</View>
					</ScrollView>
			 	</TouchableWithoutFeedback>
			 </KeyboardAvoidingView>
		</ComponentContainerScreen>
	)
}

const style = StyleSheet.create({
	keyboardContainer: {
	},
	input: {
		marginVertical: 10,
		borderWidth: 1,
		borderColor: 'rgba(0,0,0,.4)',
		borderRadius: 5,
		paddingHorizontal: 5,
		paddingVertical: 8
	},
	fontSize: {
		fontSize: 20,
	},
	dummyText: {
		marginVertical: 19
	}
})

export default InputScreen

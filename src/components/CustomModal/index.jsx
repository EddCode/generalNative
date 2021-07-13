import React from 'react'
import {Modal, StyleSheet, View} from 'react-native'

const CustomModal =  ({ children,  animation, visible, transparent}) => {
	console.log(visible)
	return (
		<Modal
			animationType={animation}
			visible={visible}
			transparent={transparent}
		>
			<View style={style.modalBackground}>
				<View style={style.modalContainer}>
					{children}
				</View>
			</View>
		</Modal>
	)
}


const style = StyleSheet.create({
	modalBackground: {
		flex: 1,
		backgroundColor: 'rgba(0,0,0,0.5)',
		justifyContent: 'center',
		alignItems: 'center'
	},
	modalContainer: {
		width: 200,
		height: 200,
		backgroundColor: '#FFF',
		justifyContent: 'center',
		alignItems: 'center',
		shadowOffset: {
			height:	10,
			width: 0
		},
		shadowOpacity: .25,
		elevation: 10,
		borderRadius: 5
	}
})

export default CustomModal

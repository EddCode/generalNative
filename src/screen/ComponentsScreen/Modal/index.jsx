import React, {useState} from 'react'
import { Button, View } from 'react-native'

import ComponentContainerScreen from '../../../components/ComponentContainerScreen/index.jsx'
import CustomModal from '../../../components/CustomModal/index.jsx'
import CustomTitle from '../../../components/CustomTitle'

import  i18n from '../../../i18n/i18n'

const ModalScreen = () => {
	const [isVisible, setVisible] = useState(false)

	const handleVisible = () => setVisible(!isVisible)

	return (
		<ComponentContainerScreen>
			<CustomTitle title={i18n.t('components.modal.title')} />
			<Button title={i18n.t('components.modal.open')} onPress={handleVisible}/>
			<CustomModal animation='fade' transparent={true} visible={isVisible}>
				<CustomTitle title={i18n.t('components.modal.title')}/>
				<Button title={i18n.t('components.modal.close')} onPress={handleVisible} />
			</CustomModal>
		</ComponentContainerScreen>
	)
}

export default ModalScreen

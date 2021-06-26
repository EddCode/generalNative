import React, {createContext, useRef, useState} from 'react'

export const GradientContext = createContext({
  primary: 'transparent',
  secondary: 'transparent'
})

const GradientProvider = ({children}) => {
	const [currentColors, setCurrentColors] = useState({
		primary: 'transparent',
		secondary: 'transparent'
	})

	const [prevColors, setPrevColors] = useState({
		primary: 'transparent',
		secondary: 'transparent'
	})

	return (
		<GradientContext.Provider value={{
			currentColors,
			prevColors,
			setPrevColors,
			setCurrentColors
			}}>
			{children}
		</GradientContext.Provider>
	)
}

export default GradientProvider

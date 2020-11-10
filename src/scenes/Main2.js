import React from 'react'
import {Button, View} from 'react-native'
import {useNavigation} from '@react-navigation/native'

const Main2 = () => {
	// #region hooks
	const navigation = useNavigation()
	// #endregion hooks

	// #region states
	// #endregion states

	// #region handlers
	// #endregion handlers

	return (
		<View>
			<Button title="main screen" onPress={() => navigation.navigate('Main')} />
		</View>
	)
}

export default Main2
